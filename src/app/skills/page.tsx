import { SkillsHeader } from '@/components/sections/skills-header';
import { SkillsCategorySection } from '@/components/sections/skills-category-section';
import { skillsCategories } from '@/config/skills.config';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: `Skills | ${siteConfig.siteName}`,
  description: 'Technical skills and expertise across AI/ML, full-stack development, and mobile development.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
        <SkillsHeader />
        {skillsCategories.map((category, index) => (
          <SkillsCategorySection key={category.title} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}
