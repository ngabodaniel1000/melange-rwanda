'use client';

import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/bridge2rwanda.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto pt-20">
        <ScrollAnimator variant="fade-up" duration={800} threshold={0}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-xl uppercase mb-6">
            Join Rwanda's Elite: We're Hiring!
          </h1>
        </ScrollAnimator>

        <ScrollAnimator variant="fade-up" duration={800} delay={200} threshold={0}>
          <p className="text-base sm:text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto drop-shadow-lg font-medium leading-relaxed mb-10">
            Become a founding freelance partner and provide world-class services to North American clients. Multiple positions available!
          </p>
        </ScrollAnimator>

        <ScrollAnimator variant="fade-up" duration={800} delay={400} threshold={0}>
          <div>
            <Button
              className="bg-primary hover:bg-primary/90 text-secondary-foreground font-bold px-8 sm:px-10 py-6 sm:py-7 text-sm sm:text-base tracking-wider rounded-full border-none transition-all shadow-xl hover:scale-105 hover:shadow-secondary/40 hover:shadow-2xl"
              onClick={() => {
                const element = document.getElementById('current-openings');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              VIEW OPEN POSITIONS
            </Button>
          </div>
        </ScrollAnimator>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/80 text-xs tracking-widest uppercase animate-fade-in" style={{ animationDelay: '1200ms' }}>
          Scroll
        </span>
        <div className="animate-bounce">
          <ChevronDown className="text-white w-8 h-8 drop-shadow-md" />
        </div>
      </div>
    </section>
  );
}