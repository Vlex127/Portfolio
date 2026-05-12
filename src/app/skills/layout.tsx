import { Navbar } from '@/components/sections/navbar';
import { FooterSection } from '@/components/sections/footer';

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
