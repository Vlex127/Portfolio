"use client";

import { motion, useReducedMotion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Cpu } from 'lucide-react';

export function SkillsHeader() {
  const prefersReducedMotion = useReducedMotion();

  // Animation configuration
  const animationConfig = {
    entrance: { duration: 0.6 }
  };

  return (
    <div className="text-center mb-16">
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? {} : animationConfig.entrance}
      >
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
          <Cpu className="mr-1 h-3 w-3" aria-hidden="true" />
          Technical Expertise
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          Technical{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my expertise across AI/ML engineering, full-stack development,
          and mobile application development. Each skill represents years of hands-on experience
          and continuous learning.
        </p>
      </motion.div>
    </div>
  );
}
