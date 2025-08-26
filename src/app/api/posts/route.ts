import { NextResponse } from 'next/server';
import { DOMParser } from 'xmldom';

interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  };
  tags: { name: string }[];
}



interface Post {
  id: string;
  title: string;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes?: number;
  coverImage?: string;
  tags: { name: string }[];
  source: 'hashnode' | 'medium';
}

const HASHNODE_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  try {
    const posts: Post[] = [];

    // Fetch from Hashnode
    const hashnodeHost = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
    const hashnodeToken = process.env.HASHNODE_API_TOKEN;
    if (!hashnodeHost || !hashnodeToken) {
      console.error('Missing Hashnode env variables');
    } else {
      try {
        const hashnodeResponse = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': hashnodeToken,
          },
          body: JSON.stringify({
            query: HASHNODE_QUERY,
            variables: {
              host: hashnodeHost,
              first: 10,
            },
          }),
        });
        if (!hashnodeResponse.ok) {
          const errorText = await hashnodeResponse.text();
          console.error('Hashnode fetch failed:', errorText);
        } else {
          const hashnodeData = await hashnodeResponse.json();
          const hashnodePosts = hashnodeData?.data?.publication?.posts?.edges || [];
          hashnodePosts.forEach((edge: { node: HashnodePost }) => {
            const post = edge.node;
            posts.push({
              id: `hashnode-${post.id}`,
              title: post.title,
              brief: post.brief,
              slug: post.slug,
              url: post.url,
              publishedAt: post.publishedAt,
              readTimeInMinutes: post.readTimeInMinutes,
              coverImage: post.coverImage?.url,
              tags: post.tags.map(tag => ({ name: tag.name })),
              source: 'hashnode',
            });
          });
        }
      } catch (error) {
        console.error('Error fetching Hashnode posts:', error);
      }
    }

    // Fetch from Medium RSS (direct, no cache)
    const mediumUsername = process.env.NEXT_PUBLIC_MEDIUM_USERNAME;
    if (mediumUsername) {
      try {
        const mediumResponse = await fetch(`https://medium.com/feed/${mediumUsername}`);
        if (!mediumResponse.ok) {
          const errorText = await mediumResponse.text();
          console.error('Medium fetch failed:', errorText);
        } else {
          const xml = await mediumResponse.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(xml, 'text/xml');
          const items = Array.from(doc.getElementsByTagName('item')) as Element[];
          items.slice(0, 10).forEach((item: Element, index: number) => {
            const getText = (tag: string) => {
              const el = item.getElementsByTagName(tag)[0];
              return el && el.textContent ? el.textContent : '';
            };
            const title = getText('title');
            const link = getText('link');
            const pubDate = getText('pubDate');
            const description = getText('description');
            const categories = Array.from(item.getElementsByTagName('category')).map((cat: Element) => ({ name: cat.textContent || '' }));
            const brief = description.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
            posts.push({
              id: `medium-${index}-${link}`,
              title,
              brief: brief || 'No description available',
              slug: link.split('/').pop() || '',
              url: link,
              publishedAt: pubDate,
              readTimeInMinutes: Math.ceil((description.length || 0) / 200),
              coverImage: extractImageFromContent(description),
              tags: categories,
              source: 'medium',
            });
          });
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    }

    // Sort by publish date (newest first)
    posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return NextResponse.json(posts.slice(0, 20));
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

function extractImageFromContent(content: string): string | undefined {
  if (!content) return undefined;
  
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
}
