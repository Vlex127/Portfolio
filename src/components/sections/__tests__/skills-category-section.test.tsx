import { render, screen } from '@testing-library/react';
import { SkillsCategorySection } from '../skills-category-section';
import type { SkillsCategory } from '@/config/skills.config';

describe('SkillsCategorySection', () => {
  const mockCategory: SkillsCategory = {
    title: 'Frontend Development',
    description: 'Modern web technologies',
    icon: 'Layout',
    skills: [
      {
        name: 'React',
        icon: 'Atom',
        proficiency: 'Expert' as const,
        description: 'Building interactive UIs'
      }
    ]
  };

  it('renders category title and description', () => {
    render(<SkillsCategorySection category={mockCategory} index={0} />);

    expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    expect(screen.getByText('Modern web technologies')).toBeInTheDocument();
  });

  it('renders all skills in the category', () => {
    render(<SkillsCategorySection category={mockCategory} index={0} />);

    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
