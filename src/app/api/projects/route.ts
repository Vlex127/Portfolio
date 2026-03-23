import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  private: boolean;
}

export async function GET() {
  try {
    const githubToken = process.env.GITHUB_TOKEN;
    const githubUsername = process.env.GITHUB_USERNAME || 'Vlex127';

    if (!githubToken) {
      console.warn('GITHUB_TOKEN is missing. Returning mock data instead.');
      return NextResponse.json(MOCK_PROJECTS, {
        headers: {
          'Cache-Control': 'no-store',
        },
      });
    }

    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=20&type=owner`,
      {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App',
        },
        next: {
          revalidate: 3600, // Cache for 1 hour
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    // Only filter out private repos, keep forks
    const publicRepos = repos
      .filter((repo) => !repo.private)
      .sort((a, b) => {
        // Sort by combination of stars and recent updates
        const aScore = a.stargazers_count + (new Date(a.updated_at).getTime() / 1000000);
        const bScore = b.stargazers_count + (new Date(b.updated_at).getTime() / 1000000);
        return bScore - aScore;
      });

    return NextResponse.json(publicRepos, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);

    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

const MOCK_PROJECTS: GitHubRepo[] = [
  {
    id: 1,
    name: 'Portfolio-v4',
    full_name: 'Vlex127/Portfolio',
    description: 'A premium portfolio with live site previews, real-time analytics, and clean typography.',
    html_url: 'https://github.com/Vlex127/Portfolio',
    homepage: 'https://vincentiwuno.kesug.com',
    stargazers_count: 12,
    forks_count: 4,
    language: 'TypeScript',
    topics: ['nextjs', 'typescript', 'tailwindcss', 'framer-motion'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    fork: false,
    private: false,
  },
  {
    id: 2,
    name: 'Smart-Chat-Engine',
    full_name: 'Vlex127/Chat-Engine',
    description: 'An AI-powered chat interface using RAG and vector databases for contextual conversations.',
    html_url: 'https://github.com/Vlex127/Chat-Engine',
    homepage: 'https://chat.vincentiwuno.kesug.com',
    stargazers_count: 8,
    forks_count: 2,
    language: 'Python',
    topics: ['ai', 'langchain', 'openai', 'fastapi'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    fork: false,
    private: false,
  },
  {
    id: 3,
    name: 'Data-Visualizer',
    full_name: 'Vlex127/Data-Viz',
    description: 'Real-time dashboard for visualizing market trends with D3.js and WebSockets.',
    html_url: 'https://github.com/Vlex127/Data-Viz',
    homepage: null,
    stargazers_count: 15,
    forks_count: 5,
    language: 'JavaScript',
    topics: ['d3', 'visualisation', 'websockets', 'chartjs'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    fork: false,
    private: false,
  }
];
