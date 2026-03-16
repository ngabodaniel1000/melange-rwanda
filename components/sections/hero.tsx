"use client";

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bridge2rwanda.mp4" type="video/mp4" />
      </video>

      {/* Animated gradient overlay – subtle flag tint */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/30 via-black/20 to-accent/20 animate-gradient-text" />

      {/* Top Banner – slides in from top, refined for mobile fit */}
      <div
        className="absolute top-[80px] sm:top-[90px] left-1/2 -translate-x-1/2 w-[92%] sm:w-[calc(100%-2rem)] max-w-screen-lg bg-primary/95 text-white z-20 py-4 px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8 shadow-2xl border border-white/10 rounded-2xl backdrop-blur-md animate-fade-in"
        style={{ animationDelay: '200ms' }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left text-lg sm:text-2xl lg:text-3xl font-light tracking-wide">
          <span className="animate-slide-up stagger-1">2026 Join Rwanda&rsquo;s Elite</span>
          <span className="relative inline-block font-semibold z-10 text-secondary animate-slide-up stagger-2">
            Now Open! 🇷🇼
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-8 mt-4 xl:mt-0 animate-slide-up stagger-3">
          <Button
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-6 text-base tracking-wider rounded-full border-none transition-all shadow-lg hover:scale-110 hover:shadow-secondary/30 hover:shadow-xl"
            onClick={() => {
              const element = document.getElementById('current-openings');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CLICK HERE TO APPLY
          </Button>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase animate-fade-in" style={{ animationDelay: '1200ms' }}>
          Scroll
        </span>
        <div className="animate-bounce">
          <ChevronDown className="text-white/80 w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
