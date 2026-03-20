import { ScrollAnimator } from '@/components/scroll-animator';
import {
  Calendar,
  TrendingUp,
  Handshake,
  Gem,
  BookOpen,
  ShieldCheck,
  Unplug,
  Leaf
} from 'lucide-react';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  { icon: <Calendar className="w-8 h-8" />, title: 'Long-Term Benefits', description: 'We are building for the long haul. You grow with us from initial projects to ongoing client work.' },
  { icon: <TrendingUp className="w-8 h-8" />, title: 'Growth Opportunities', description: 'As we win clients, your role, project volume, and earnings grow too.' },
  { icon: <Handshake className="w-8 h-8" />, title: 'Fair, Project-Based Pay', description: 'You are compensated for each project. When we succeed, you succeed.' },
  { icon: <Gem className="w-8 h-8" />, title: 'Selective Network', description: 'We are building a small, elite team. You\'ll work alongside top performers.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Training & Development', description: 'Structured training to meet global standards and advance your skills.' },
  { icon: <ShieldCheck className="w-8 h-8" />, title: 'Quality Without Compromise', description: 'Every deliverable meets North American professional standards.' },
  { icon: <Unplug className="w-8 h-8" />, title: 'Cultural Bridge', description: 'Our founder splits time between Canada and Rwanda. You\'re part of one team.' },
  { icon: <Leaf className="w-8 h-8" />, title: 'Sustainable Impact', description: 'Building long-term wealth and capabilities for Rwandans through direct global participation.' },
];

const colorSets = [
  { bg: 'bg-primary/10', text: 'text-primary', hoverBg: 'group-hover:bg-primary', blob: 'bg-primary/5 group-hover:bg-primary/10' },
  { bg: 'bg-secondary/10', text: 'text-secondary-foreground', hoverBg: 'group-hover:bg-secondary', blob: 'bg-secondary/5 group-hover:bg-secondary/10' },
  { bg: 'bg-accent/10', text: 'text-accent', hoverBg: 'group-hover:bg-accent', blob: 'bg-accent/5 group-hover:bg-accent/10' },
];

export function ValuesGridSection() {
  return (
    <section
      id="values"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full h-96 bg-linear-to-b from-slate-100 to-transparent z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header row */}
        <div className="text-center mb-16">
          <ScrollAnimator variant="fade-down" duration={700}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
              Why Join Our Founding Team?
            </h2>
          </ScrollAnimator>
        </div>

        {/* Cards grid – each card staggered */}
        {/* Desktop: 4x2 Grid, Mobile: 1 column (Stacked vertically) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const c = colorSets[index % 3];
            return (
              <ScrollAnimator
                key={index}
                variant="zoom-in"
                delay={index * 80}
                duration={600}
              >
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover-lift transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                  {/* Decorative subtle blob */}
                  <div className={`absolute -right-4 -top-4 w-32 h-32 rounded-full blur-3xl transition-colors ${c.blob}`} />
                  <div className="relative z-10 grow">
                    <div className={`mb-6 inline-flex p-4 rounded-2xl group-hover:scale-110 group-hover:text-white transition-all duration-300 ${c.bg} ${c.text} ${c.hoverBg}`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 leading-tight">
                      {value.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimator>
            );
          })}
        </div>

      </div>
    </section>
  );
}
