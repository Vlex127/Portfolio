"use client";

import { motion, useReducedMotion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SkillCard } from './skill-card';
import type { SkillsCategory } from '@/config/skills.config';

interface SkillsCategorySectionProps {
  category: SkillsCategory;
  index: number;
}

export function SkillsCategorySection({ category, index }: SkillsCategorySectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = Icons[category.icon as keyof typeof Icons] as LucideIcon;

  // Animation configuration
  const animationConfig = {
    category: { duration: 0.6, delay: index * 0.2 },
    header: { duration: 0.4, delay: index * 0.2 + 0.1 },
    description: { duration: 0.4, delay: index * 0.2 + 0.2 }
  };

  // Icon validation with fallback
  const renderIcon = () => {
    if (!Icon) {
      console.warn(`Icon "${category.icon}" not found in lucide-react`);
      return <Icons.Layout className="h-8 w-8 text-primary" />;
    }
    return <Icon className="h-8 w-8 text-primary" />;
  };

  return (
    <motion.section
      role="region"
      aria-labelledby={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? {} : animationConfig.category}
      className="py-12"
    >
      <div className="mb-8">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          transition={prefersReducedMotion ? {} : animationConfig.header}
          className="flex items-center space-x-3 mb-3"
        >
          <div aria-hidden="true">
            {renderIcon()}
          </div>
          <h2
            id={`category-${category.title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-3xl font-bold"
          >
            {category.title}
          </h2>
        </motion.div>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={prefersReducedMotion ? {} : animationConfig.description}
          className="text-muted-foreground text-lg"
        >
          {category.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.section>
  );
}
