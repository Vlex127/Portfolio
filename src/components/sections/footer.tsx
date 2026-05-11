import Link from 'next/link';
import { siteConfig } from '@/config/site.config';

export function FooterSection() {
  return (
    <footer className="pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 text-muted-foreground px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {siteConfig.social.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.label}`}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary"
              title={link.label}
            >
              <span className="sr-only">{link.label}</span>
              {/* Icon would go here based on link.icon */}
            </a>
          ))}
        </div>

        {/* Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link 
                href="/sitemap.xml" 
                className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Sitemap
              </Link>
            </li>
            <li>
              <Link 
                href="/privacy-policy" 
                className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/refund-policy" 
                className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/terms-of-service" 
                className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Credits */}
        <p className="text-sm text-center">
          Built with <a href="https://nextjs.org" className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1">Next.js</a> &amp;{' '}
          <a href="https://tailwindcss.com" className="text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary rounded px-1">Tailwind CSS</a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-center">
          &copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}