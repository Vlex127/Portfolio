# Claude Project Context

**Project**: Vincent Iwuno Portfolio Website  
**Repository**: Vlex127/Portfolio  
**Stack**: Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion  
**Deployment**: Vercel/Railway  
**Current Branch**: main  

---

## 🎯 Project Overview

This is a modern, full-stack portfolio website showcasing Vincent Iwuno's work as a Full Stack developer with interests in AI/ML. The site features:

- **Hero Section** with interactive spotlight effect and parallax
- **Projects Grid** with real GitHub integration
- **About Page** with professional narrative
- **Contact Form** with Formspree integration
- **Blog/Posts** functionality
- **Chat Interface** (AI-powered section)
- **Dark/Light Theme** toggle with system preference detection

---

## 📋 Current Status (May 11, 2026)

### ✅ Completed
- **Priority 1: Accessibility & Focus States** - COMPLETE
  - Global focus ring utilities
  - Reduced motion support
  - Enhanced contact form with ARIA
  - Footer accessibility improvements
  - WCAG 2.1 Level AA compliant

- **Priority 3: Contact Form UX** - COMPLETE
  - Loading spinner animation
  - Success/error toast notifications
  - Form validation feedback
  - Proper aria-live regions

### ⏳ Next Priority
- **Priority 2: Skills/Tech Stack Page** (3-4 hours estimated)

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css                 # Global styles + a11y utilities
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page (hero section)
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page
│   ├── posts/page.tsx              # Blog posts
│   ├── projects/page.tsx           # Projects showcase
│   ├── chat/page.tsx               # Chat interface
│   └── api/                        # API routes (auth, chat, posts, projects)
├── components/
│   ├── sections/                   # Major page sections
│   │   ├── hero.tsx                # Hero with spotlight
│   │   ├── navbar.tsx              # Main navigation (auto-hide on scroll)
│   │   ├── contact-form.tsx        # Enhanced form with animations
│   │   ├── footer.tsx              # Footer with social links
│   │   ├── projects-grid.tsx       # Dynamic GitHub projects
│   │   ├── about-header.tsx
│   │   ├── about-content.tsx
│   │   └── ...other sections
│   └── ui/                         # shadcn/ui components
│       ├── button.tsx              # With focus-visible states
│       ├── input.tsx               # With a11y support
│       ├── textarea.tsx
│       ├── card.tsx
│       └── ...30+ other components
├── config/
│   └── site.config.ts              # Site-wide configuration
├── lib/
│   ├── utils.ts                    # Utility functions
│   ├── auth.ts                     # Authentication setup
│   └── seo.ts                      # SEO helpers
└── hooks/
    └── use-mobile.ts               # Mobile detection hook
```

---

## 🎨 Design System

### Colors (Dark Theme Default)
- **Primary**: oklch(0.922 0 0) - Light blue/white
- **Background**: oklch(0.145 0 0) - Dark
- **Foreground**: oklch(0.985 0 0) - Light text
- **Muted**: oklch(0.708 0 0) - Gray
- **Destructive**: oklch(0.704 0.191 22.216) - Red

### Typography
- **Sans**: Geist Sans (system fallback)
- **Mono**: Geist Mono
- **Base Size**: 16px
- **Line Height**: 1.5-1.75

### Spacing
- Uses Tailwind's default 4px increment
- 8px minimum gap between touch targets
- Consistent padding on containers

### Animations
- **Duration**: 150-300ms for micro-interactions
- **Easing**: ease-out for enter, ease-in for exit
- **Library**: Framer Motion (motion/react)
- **Respects**: prefers-reduced-motion

---

## 🔑 Key Features

### 1. Accessibility (Priority 1 ✅)
- Focus rings on all interactive elements (2px primary color)
- Keyboard navigation fully functional
- Screen reader support (aria-labels, aria-live regions)
- Animations disabled with prefers-reduced-motion
- WCAG 2.1 Level AA compliance

### 2. Interactive Components
- **Navbar**: Auto-hide on scroll down, visible on scroll up
- **Hero Section**: Mouse-tracking spotlight effect, parallax background
- **Projects Grid**: Real GitHub API integration with filtering
- **Contact Form**: Animated feedback, live validation, toast notifications
- **Theme Toggle**: Smooth transitions between dark/light

### 3. Performance
- Image optimization (WebP/AVIF with fallbacks)
- Lazy loading for below-fold content
- Code splitting with dynamic imports
- Suspense boundaries for async data

### 4. SEO
- Meta tags (og:image, twitter:card)
- Sitemap.xml generation
- Robots.txt configuration
- Structured data ready

---

## 💻 Tech Stack Details

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **UI Library**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4+
- **Components**: shadcn/ui (30+ components)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

### Backend
- **API Routes**: Next.js API routes
- **Authentication**: Better Auth
- **Form Handling**: Formspree (external)
- **Database**: Not yet implemented

### Development
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (Next.js 16.2)
- **TypeScript**: Strict mode enabled
- **Code Quality**: ESLint ready

---

## 📝 Code Standards

### TypeScript
- Always use strict mode
- Define interfaces for all objects
- Use type inference where clear
- Avoid `any` type

### Components
- Use functional components with hooks
- Props should be well-typed
- Use `"use client"` only when needed (interactivity)
- Server components as default

### Styling
- Use Tailwind classes for styling
- Use `cn()` utility for conditional classes
- Define custom utilities in globals.css
- Avoid inline styles

### Naming
- **Components**: PascalCase (e.g., `ContactForm`)
- **Files**: Match component names or kebab-case for utilities
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: UPPER_SNAKE_CASE when global

### Documentation
- JSDoc comments for exported functions
- Inline comments for complex logic
- README in feature folders

---

## 🚀 Development Workflow

### Starting Dev Server
```bash
npm run dev
# Server runs at http://localhost:3000
```

### Building for Production
```bash
npm run build
# Checks TypeScript
# Bundles and optimizes
# Creates .next folder
```

### Type Checking Only
```bash
npx tsc --noEmit
```

### Deployment
```bash
npm run build  # Must pass
npm run start  # Test production build
```

---

## 📊 Current Implementation Plan

### Priority Levels
1. **CRITICAL** (Week 1): Accessibility ✅ DONE
2. **HIGH** (Week 1-2): Skills Page, Case Studies, Resume
3. **MEDIUM** (Week 2-3): Blog, Filtering, Stats Counter
4. **LOW** (Week 3+): Testimonials, Timeline, Newsletter

### All 12 Priorities
1. ✅ Accessibility & Focus States - COMPLETE
2. ⏳ Skills/Tech Stack Page - NEXT
3. ✅ Contact Form UX - COMPLETE
4. ⏳ Case Studies - PLANNED
5. ⏳ Blog Structure - PLANNED
6. ⏳ Resume Page - PLANNED
7. ⏳ Stats Counter - PLANNED
8. ⏳ Project Filtering - PLANNED
9. ⏳ Testimonials - PLANNED
10. ⏳ Timeline/Experience - PLANNED
11. ⏳ Social Proof - PLANNED
12. ⏳ Newsletter - PLANNED

---

## 🔄 Common Patterns

### Creating a New Page
```typescript
// src/app/new-page/page.tsx
import { Header } from '@/components/sections/header';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: `Title | ${siteConfig.siteName}`,
  description: siteConfig.description,
};

export default function NewPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
        <Header />
        {/* Content */}
      </div>
    </div>
  );
}
```

### Creating a New Component
```typescript
// src/components/sections/new-component.tsx
"use client"; // Only if interactive

import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  title: string;
  // ...
}

export function NewComponent({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardContent>{title}</CardContent>
      </Card>
    </motion.div>
  );
}
```

### Adding Navigation Item
Edit `src/config/site.config.ts`:
```typescript
navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },  // Add here
  // ...
];
```

---

## 🐛 Common Issues & Solutions

### Issue: Focus rings not showing
**Solution**: Press Tab to navigate; may not show on mouse click. Check `globals.css` has `focus-visible` styles.

### Issue: Animations not working
**Solution**: Verify Framer Motion is imported from `motion/react` (not `framer-motion`).

### Issue: Form not submitting
**Solution**: Check Formspree endpoint in contact-form.tsx matches your form ID.

### Issue: Types don't match
**Solution**: Run `npx tsc --noEmit` to see full TypeScript errors.

---

## 📚 Related Documentation

All in portfolio root directory:

- **PROGRESS.md** - Quick overview of all priorities
- **IMPLEMENTATION_PLAN.md** - Detailed roadmap with tracking
- **ACCESSIBILITY_IMPROVEMENTS.md** - Technical details of a11y work
- **COMPLETION_SUMMARY.md** - What was done in Priority 1
- **README_CURRENT_SESSION.md** - Quick reference checklist
- **RESTORE_CONTEXT.md** - How to recover if chat is deleted (← READ THIS)

---

## 🎯 When Starting a New Session

If this chat is deleted and you need to continue:

1. **Read RESTORE_CONTEXT.md** - Complete context restoration guide
2. **Check PROGRESS.md** - See current status
3. **Review IMPLEMENTATION_PLAN.md** - See full roadmap
4. **This file (claude.md)** - Technical context for AI assistance

---

## 💡 Tips for Contributors

- Always test in both light and dark modes
- Verify TypeScript with `npm run build`
- Test keyboard navigation with Tab
- Check screen reader with VoiceOver (Mac) or NVDA (Windows)
- Respect prefers-reduced-motion in animations
- Use Tailwind classes, not custom CSS when possible
- Keep components focused and single-responsibility
- Document complex logic with comments

---

## 🚀 Ready to Work?

Start by reading:
1. **RESTORE_CONTEXT.md** - If chat was deleted
2. **PROGRESS.md** - For current status
3. **This file (claude.md)** - For technical details

Then begin work on **Priority 2: Skills Page**

Happy coding! 🎉
