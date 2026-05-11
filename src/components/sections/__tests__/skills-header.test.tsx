import { render, screen } from '@testing-library/react';
import { SkillsHeader } from '../skills-header';

describe('SkillsHeader', () => {
  it('renders page title and description', () => {
    render(<SkillsHeader />);

    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText(/expertise across multiple domains/i)).toBeInTheDocument();
  });
});
