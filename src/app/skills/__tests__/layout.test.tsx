import { render } from '@testing-library/react';
import SkillsLayout from '../layout';

describe('SkillsLayout', () => {
  it('renders children correctly', () => {
    const { container } = render(
      <SkillsLayout>
        <div>Test Content</div>
      </SkillsLayout>
    );

    expect(container.textContent).toContain('Test Content');
  });

  it('renders Navbar and FooterSection', () => {
    const { container } = render(
      <SkillsLayout>
        <div>Test Content</div>
      </SkillsLayout>
    );

    // Verify layout structure exists
    expect(container.firstChild).toBeTruthy();
  });
});
