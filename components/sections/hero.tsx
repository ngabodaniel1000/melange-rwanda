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

      {/* Top Banner (below navbar area) */}
      <div className="absolute top-[70px] sm:top-[90px] left-0 w-full bg-primary/90 text-white z-20 py-4 px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-8 shadow-xl border-y border-white/5 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left text-xl sm:text-2xl lg:text-3xl font-light tracking-wide">
          <span>2026 Join Rwanda's Elite</span>
          <span className="relative inline-block  font-medium z-10 mx-2">
            Now Open!
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-8 mt-4 xl:mt-0">
          <Button
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-6 text-base tracking-wider rounded-full border-none transition-all shadow-lg hover:scale-105"
            onClick={() => {
              const element = document.getElementById('current-openings');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CLICK HERE TO APPLY
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/80 w-10 h-10" />
      </div>
    </section>
  );
}
