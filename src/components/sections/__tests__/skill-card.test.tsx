import { render, screen } from '@testing-library/react';
import { SkillCard } from '../skill-card';

describe('SkillCard', () => {
  it('renders skill name, icon, proficiency, and description', () => {
    const skill = {
      name: 'React',
      icon: 'Atom',
      proficiency: 'Expert' as const,
      description: 'Building interactive user interfaces'
    };

    render(<SkillCard skill={skill} index={0} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Expert')).toBeInTheDocument();
    expect(screen.getByText('Building interactive user interfaces')).toBeInTheDocument();
  });

  it('applies correct proficiency badge color', () => {
    const skill = {
      name: 'Python',
      icon: 'Code',
      proficiency: 'Expert' as const,
      description: 'Primary language for AI/ML'
    };

    render(<SkillCard skill={skill} index={0} />);

    const badge = screen.getByText('Expert');
    expect(badge).toHaveClass('bg-primary/10', 'text-primary', 'border-primary/20');
  });
});
