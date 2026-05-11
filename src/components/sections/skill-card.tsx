"use client";

import { motion } from 'motion/react';
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
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Card className="h-full backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-200 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col items-start space-y-4">
            {Icon && (
              <div className="p-3 rounded-lg bg-primary/5">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            )}
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <Badge
                  variant="outline"
                  className={cn('text-xs', getProficiencyColor(skill.proficiency))}
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
