"use client";

import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-white text-slate-900 overflow-hidden">

      <style>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
      `}</style>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Mélange
          <br />
          Rwanda
        </h1>
        <p className="text-xl sm:text-2xl mb-4 text-slate-600">
          Join Rwanda's Elite
        </p>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Empowering youth through quality education, skills development, and community-driven initiatives.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-700 text-primary-foreground rounded-full px-8"
            onClick={() => {
              const element = document.getElementById('current-openings');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Open Positions
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-slate-900 border-slate-200 hover:bg-slate-100 rounded-full px-8"
          >
            Learn More
          </Button>
        </div>

    
      </div>
    </section>
  );
}
