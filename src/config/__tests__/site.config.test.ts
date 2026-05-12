import { siteConfig } from '../site.config';

describe('siteConfig', () => {
  it('includes Skills link in navigation', () => {
    const skillsLink = siteConfig.navigation.find(item => item.label === 'Skills');
    expect(skillsLink).toBeDefined();
    expect(skillsLink?.href).toBe('/skills');
  });
});
