"use client";

import { motion, useReducedMotion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Skill } from '@/config/skills.config';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = Icons[skill.icon as keyof typeof Icons] as LucideIcon;

  const getProficiencyColor = (proficiency: Skill['proficiency']) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Advanced':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'Intermediate':
        return 'bg-muted/10 text-muted-foreground border-muted/20';
      case 'Beginner':
        return 'bg-accent/10 text-accent-foreground border-accent/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  // Animation configuration
  const animationConfig = {
    entrance: { duration: 0.4, delay: index * 0.1 },
    hover: { duration: 0.2, scale: 1.02 }
  };

  // Icon validation with fallback
  const renderIcon = () => {
    if (!Icon) {
      console.warn(`Icon "${skill.icon}" not found in lucide-react`);
      return <Icons.Code className="h-6 w-6 text-primary" />;
    }
    return <Icon className="h-6 w-6 text-primary" />;
  };

  return (
    <motion.div
      role="article"
      aria-label={`${skill.name} skill - ${skill.proficiency} proficiency`}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? {} : animationConfig.entrance}
      whileHover={prefersReducedMotion ? {} : { scale: animationConfig.hover.scale, transition: { duration: animationConfig.hover.duration } }}
    >
      <Card className="h-full backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-200 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="p-3 rounded-lg bg-primary/5" aria-hidden="true">
              {renderIcon()}
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <Badge
                  variant="outline"
                  className={cn('text-xs', getProficiencyColor(skill.proficiency))}
                  aria-label={`Proficiency level: ${skill.proficiency}`}
                >
                  {skill.proficiency}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
