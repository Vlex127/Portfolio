"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';

export function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">
        <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
          <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
            <Image
              src={siteConfig.author_img}
              alt={`${siteConfig.author} profile`}
              width={192}
              height={192}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
            {/* Background glow effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
            </div>
          </div>
          <div className="text-center text-3xl font-extrabold text-primary mt-4">Vincent Iwuno</div>
        </CardHeader>
        <CardContent className="space-y-4 relative z-10">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I&apos;m Vincent Iwuno - a dedicated full-stack developer with a passion for crafting
            scalable, high-performance web applications. I specialize in TypeScript, React, and Next.js,
            with a strong focus on building intuitive user experiences and maintainable codebases.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Over the years, I&apos;ve worked with startups and distributed teams to deliver impactful
            solutions across e-commerce, productivity, and developer tools. I believe in writing clean
            code, following best practices, and approaching every project with curiosity and a growth mindset.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Outside of coding, I enjoy exploring emerging frameworks, contributing to open source, and
            sharing knowledge with the developer community. I&apos;m always excited to collaborate on
            innovative ideas and bring meaningful products to life.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
