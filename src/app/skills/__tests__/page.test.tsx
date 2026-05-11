import { render, screen } from '@testing-library/react';
import SkillsPage from '../page';

describe('SkillsPage', () => {
  it('renders all skill categories', () => {
    render(<SkillsPage />);

    expect(screen.getByText('AI/ML Engineering')).toBeInTheDocument();
    expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    expect(screen.getByText('Backend Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Development')).toBeInTheDocument();
  });

  it('renders page header', () => {
    render(<SkillsPage />);

    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
  });
});
