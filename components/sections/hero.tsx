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
        <source src="/a.mp4" type="video/mp4" />
      </video>

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      <style>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 rounded-3xl shadow-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Mélange
            <br />
            <span className="text-blue-400">Rwanda</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-slate-100 font-medium tracking-wide drop-shadow">
            Join Rwanda's Elite
          </p>
          <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Empowering youth through quality education, skills development, and community-driven initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 border-none"
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
              className="text-white border-white/30 bg-white/5 hover:bg-white/20 hover:text-white rounded-full px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/70 w-8 h-8" />
      </div>
    </section>
  );
}
