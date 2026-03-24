"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,

  AlertCircle,
  Search,
  X,
  Eye,
  Globe
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,

} from '@/components/ui/pagination';

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
  fork: boolean;
  private: boolean;
}

function ProjectThumbnail({ project, index }: { project: GitHubRepo; index: number }) {
  const [imgSrc, setImgSrc] = useState(
    project.homepage
      ? `https://v1.screenshot.11ty.dev/${encodeURIComponent(project.homepage)}/large/`
      : `https://opengraph.githubassets.com/1/${project.full_name}`
  );
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={imgSrc}
      alt={project.name}
      width={400}
      height={200}
      className="object-cover w-full h-full rounded-t-xl transition-transform duration-500 group-hover:scale-110"
      priority={index < 4}
      unoptimized
      onError={() => {
        if (!hasError) {
          setImgSrc(`https://opengraph.githubassets.com/1/${project.full_name}`);
          setHasError(true);
        }
      }}
    />
  );
}

export function ProjectsGrid() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [showTags, setShowTags] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        // Collect all topics from all projects, remove duplicates
        const topicsSet = new Set<string>();
        data.forEach((project: GitHubRepo) => {
          project.topics.forEach(topic => topicsSet.add(topic));
        });
        setAllTopics(Array.from(topicsSet).sort());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Remove filtering, always display all repos
  const displayedProjects = projects;
  const totalPages = Math.ceil(displayedProjects.length / pageSize);
  const paginatedProjects = displayedProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (loading) {
    return (
      <div className="mb-6">
        {/* Centered Search Bar with icon, like PostsSearch */}
        <div className="relative max-w-md mx-auto mb-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2 transition-colors" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary/50"
            disabled
          />
        </div>
        {/* Skeleton for filter bar */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Button key={i} disabled className="rounded-full px-4 py-1 text-xs opacity-50">
              <span className="sr-only">Loading</span>
              <span className="animate-pulse">&nbsp;</span>
            </Button>
          ))}
        </div>
        {/* Skeleton grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="group h-full min-h-[420px] flex flex-col flex-1 overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl">
              <div className="relative h-32 w-full overflow-hidden mb-2">
                <div className="animate-pulse bg-muted w-full h-full rounded-t-xl" />
              </div>
              <CardHeader className="relative space-y-4 flex-1">
                <div className="space-y-2 flex-1">
                  <div className="h-5 w-3/4 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-4 w-full bg-muted rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
                  <div className="h-4 w-8 bg-muted rounded animate-pulse" />
                </div>
              </CardHeader>
              <CardContent className="relative space-y-4 flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2">
                  <div className="h-4 w-16 bg-muted rounded-full animate-pulse" />
                  <div className="h-4 w-12 bg-muted rounded-full animate-pulse" />
                  <div className="h-4 w-10 bg-muted rounded-full animate-pulse" />
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="h-4 w-20 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-14 bg-muted rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <div className="h-9 w-full bg-muted rounded-lg animate-pulse" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h3 className="text-lg font-semibold">Unable to load projects</h3>
          <p className="text-muted-foreground">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Projects Search Bar & Tag Filter (mobile) */}
      <div className="mb-6">
        {/* Centered Search Bar with icon, like PostsSearch */}
        <div className="relative max-w-md mx-auto mb-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2 transition-colors" />
          <Input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary/50"
          />
        </div>
        <div className="flex sm:hidden justify-between items-center mb-2">
          <button
            className="px-4 py-2 rounded-full border text-xs font-medium transition-colors bg-primary text-primary-foreground border-border"
            onClick={() => setShowTags((v) => !v)}
            aria-label="Toggle tags filter"
          >
            {showTags ? 'Hide Tags' : 'Show Tags'}
          </button>
          <button
            className={`px-4 py-2 rounded-full border text-xs font-medium transition-colors ${selectedTopic === null ? 'bg-background text-foreground' : 'bg-primary text-primary-foreground'} border-border`}
            onClick={() => setSelectedTopic(null)}
          >
            Clear Filter
          </button>
        </div>
        {/* Mobile: collapsible tags, left aligned, only show once */}
        {showTags && (
          <div className="flex flex-wrap items-center gap-3 mt-2 justify-start sm:hidden">
            {allTopics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTopic(topic)}
                className="text-xs h-7"
              >
                {topic}
              </Button>
            ))}
            {(search || selectedTopic) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => { setSearch(''); setSelectedTopic(null); }}
                className="text-xs h-7 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3 w-3 mr-1" />
                Clear
              </Button>
            )}
          </div>
        )}
        {/* Desktop: tag bar, left aligned, only show once */}
        <div className="hidden sm:flex flex-wrap items-center gap-3 mt-4 justify-start">
          <button
            className="px-4 py-2 rounded-full border text-xs font-medium transition-colors bg-primary text-primary-foreground border-border"
            onClick={() => setShowTags((v) => !v)}
            aria-label="Toggle tags filter desktop"
          >
            {showTags ? 'Hide Tags' : 'Show Tags'}
          </button>
          <button
            className={`px-4 py-2 rounded-full border text-xs font-medium transition-colors ${selectedTopic === null ? 'bg-background text-foreground' : 'bg-primary text-primary-foreground'} border-border`}
            onClick={() => setSelectedTopic(null)}
          >
            Clear Filter
          </button>
          {showTags && allTopics.map((topic) => (
            <Button
              key={topic}
              variant={selectedTopic === topic ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTopic(topic)}
              className="text-xs h-7"
            >
              {topic}
            </Button>
          ))}
          {(search || selectedTopic) && showTags && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { setSearch(''); setSelectedTopic(null); }}
              className="text-xs h-7 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3 mr-1" />
              Clear
            </Button>
          )}
        </div>
        {/* Active Filters */}
        {(search || selectedTopic) && (
          <div className="flex flex-wrap items-center gap-2 mt-2 justify-start">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {search && (
              <Badge variant="secondary" className="text-xs">
                Search: &quot;{search}&quot;
              </Badge>
            )}
            {selectedTopic && (
              <Badge variant="secondary" className="text-xs">
                Tag: {selectedTopic}
              </Badge>
            )}
          </div>
        )}
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full flex flex-col"
          >
            <Card className="group h-full min-h-[420px] flex flex-col flex-1 overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-48 w-full overflow-hidden mb-2 group-hover:cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative h-full w-full">
                      <ProjectThumbnail project={project} index={index} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye className="h-4 w-4" />
                          Quick View
                        </div>
                      </div>
                      {project.homepage && (
                        <div className="absolute top-2 right-2 z-10 flex gap-2">
                          {project.private && (
                            <Badge className="bg-amber-500/90 text-white border-0 backdrop-blur-md flex items-center gap-1">
                              Private
                            </Badge>
                          )}
                          <Badge className="bg-emerald-500/90 text-white border-0 backdrop-blur-md flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            Live
                          </Badge>
                        </div>
                      )}
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden border-0 bg-transparent shadow-none sm:max-w-4xl">
                    <DialogHeader className="sr-only">
                      <DialogTitle>{project.name} Preview</DialogTitle>
                      <DialogDescription>
                        Live preview and details for {project.name}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full aspect-video bg-background rounded-xl overflow-hidden border shadow-2xl">
                      <div className="absolute top-0 left-0 right-0 h-12 bg-muted/80 backdrop-blur-md border-b flex items-center px-4 justify-between z-10">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                          </div>
                          <span className="text-sm font-medium ml-2 truncate max-w-[200px] sm:max-w-md">
                            {project.homepage || project.full_name}
                          </span>
                        </div>
                        {project.homepage && (
                          <Button asChild size="sm" variant="outline" className="h-8 gap-2 bg-background/50">
                            <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5" />
                              View Live Site
                            </Link>
                          </Button>
                        )}
                      </div>
                      <div className="pt-12 h-full w-full overflow-hidden">
                        {project.homepage ? (
                          <iframe
                            src={project.homepage}
                            className="w-full h-full border-0 bg-white"
                            title={`Preview of ${project.name}`}
                            onError={(e) => {
                              // If iframe fails (X-Frame-Options), we could show the screenshot instead
                              // but we already show the screenshot in the grid.
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                            <Image
                              src={`https://opengraph.githubassets.com/1/${project.full_name}`}
                              alt={project.name}
                              width={800}
                              height={400}
                              className="rounded-lg shadow-lg max-w-full"
                              unoptimized
                            />
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold">{project.name}</h3>
                              <p className="text-muted-foreground max-w-lg">{project.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <CardHeader className="relative space-y-4 flex-1">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 leading-relaxed">
                      {project.description || 'No description available'}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
                    <Star className="h-3 w-3" />
                    <span>{project.stargazers_count}</span>
                  </div>
                </div>
                {project.language && (
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(project.language) }}
                    />
                    <span className="text-sm text-muted-foreground">{project.language}</span>
                  </div>
                )}
              </CardHeader>
              <CardContent className="relative space-y-4 flex-1 flex flex-col justify-between">
                {project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 3).map((topic) => (
                      <Badge
                        key={topic}
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors"
                      >
                        {topic}
                      </Badge>
                    ))}
                    {project.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.topics.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Updated {formatDate(project.updated_at)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    <span>{project.forks_count}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4">
                  {!project.private && (
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <Link
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.homepage && (
                    <Button asChild size="sm" className="flex-1">
                      <Link
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(p => Math.max(1, p - 1));
                }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={e => { e.preventDefault(); setCurrentPage(i + 1); }}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (currentPage < totalPages) setCurrentPage(p => Math.min(totalPages, p + 1));
                }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'today';
  if (diffInDays === 1) return 'yesterday';
  if (diffInDays < 30) return `${diffInDays} days ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572a5',
    Java: '#b07219',
    'C#': '#239120',
    Go: '#00add8',
    Rust: '#dea584',
    PHP: '#4f5d95',
    Ruby: '#701516',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    CSS: '#1572b6',
    HTML: '#e34c26',
    Vue: '#4FC08D',
    React: '#61DAFB',
    Svelte: '#ff3e00',
  };

  return colors[language] || '#6b7280';
}
