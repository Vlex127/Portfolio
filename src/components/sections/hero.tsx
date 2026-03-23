"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Announcement, AnnouncementTitle, AnnouncementTag } from '@/components/ui/announcement';
import { ArrowRight, Zap, ChevronDown } from 'lucide-react';
import { ArrowUpRightIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Meteors } from '@/components/ui/meteors';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleParallax = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(clientX - rect.left);
        mouseY.set(clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden z-10 bg-background"
    >
      {/* Dynamic Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-30 transition duration-300 opacity-40 dark:opacity-20 flex"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, var(--color-primary), transparent 80%)`
          ),
        }}
      />

      {/* Background Grid & Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] pointer-events-none select-none" />
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_110%)] pointer-events-none select-none"
      />

      {/* Background Meteor Effect */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none select-none z-20 overflow-hidden">
        <Meteors number={40} />
      </div>

      <motion.div
        style={{ scale: scaleParallax, opacity: opacityParallax }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-40"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="space-y-12"
        >
          {/* Announcement Component */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: -20 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
            }}
          >
            <Announcement
              themed
              className="mx-auto flex items-center justify-center w-fit max-w-full text-xs sm:text-sm px-5 py-2 border border-primary/20 bg-primary/5 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:border-primary/40 transition-colors"
            >
              <AnnouncementTag className="bg-primary/10 text-primary font-bold rounded-full px-2.5 py-0.5 mr-3 text-[10px] uppercase tracking-wider">New</AnnouncementTag>
              <AnnouncementTitle className="flex items-center gap-2 font-semibold tracking-tight">
                EXPLORE MY LATEST INNOVATIONS
                <ArrowUpRightIcon className="shrink-0 text-primary animate-bounce-slow" size={14} />
              </AnnouncementTitle>
            </Announcement>
          </motion.div>

          {/* Main Heading Section */}
          <div className="space-y-8">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] lg:leading-[0.8]"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 pb-4 filter drop-shadow-sm">
                {siteConfig.siteName}
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="mx-auto max-w-3xl text-base sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed px-4 antialiased"
            >
              Architecting <span className="text-foreground font-bold decoration-primary/30 underline decoration-2 underline-offset-4">immersive digital ecosystems</span> where technical precision meets artistic vision.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            className="flex flex-col items-center justify-center gap-5 pt-6 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group relative h-16 overflow-hidden bg-primary px-10 text-white hover:scale-105 active:scale-95 transition-all duration-500 rounded-full shadow-[0_10px_30px_-10px_rgba(var(--color-primary),0.5)]"
            >
              <Link href='/projects' className="flex items-center gap-3 font-bold uppercase tracking-[0.1em] text-xs">
                <Zap className="h-4 w-4 fill-current transition-transform group-hover:rotate-12" />
                Explore Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-16 bg-background/30 backdrop-blur-2xl border-primary/20 hover:border-primary/60 hover:bg-background/50 transition-all duration-500 rounded-full px-10 shadow-lg shadow-black/5"
            >
              <Link href={`${siteConfig.links.email}`} className="flex items-center gap-3 font-bold text-sm tracking-tight">
                Get in Touch
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Abstract Orbs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-5%] top-[5%] h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none select-none mix-blend-plus-lighter opacity-60"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[-5%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[150px] pointer-events-none select-none mix-blend-plus-lighter opacity-50"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground/40"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2 antialiased">Discover</span>
          <ChevronDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}


