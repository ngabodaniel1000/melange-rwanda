import { ScrollAnimator } from '@/components/scroll-animator';
import { Users, TrendingUp, Target, Network, BookOpen, Award, Lightbulb, Heart } from 'lucide-react';
import Image from 'next/image';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  { icon: <Users className="w-8 h-8" />, title: 'Community First', description: 'We believe in the power of community and collective growth. Our network is our greatest asset.' },
  { icon: <TrendingUp className="w-8 h-8" />, title: 'Continuous Growth', description: 'Every member is committed to lifelong learning and professional development.' },
  { icon: <Target className="w-8 h-8" />, title: 'Purpose-Driven', description: 'We focus on making meaningful contributions to Rwanda and the wider African continent.' },
  { icon: <Network className="w-8 h-8" />, title: 'Strong Networks', description: 'Access to an extensive network of professionals, mentors, and industry leaders.' },
  { icon: <BookOpen className="w-8 h-8" />, title: 'Quality Education', description: 'We provide access to world-class training and educational resources.' },
  { icon: <Award className="w-8 h-8" />, title: 'Excellence', description: 'We set high standards and celebrate exceptional achievements among our members.' },
  { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation', description: 'We encourage creative thinking and innovative solutions to real-world challenges.' },
  { icon: <Heart className="w-8 h-8" />, title: 'Empathy', description: 'We understand the challenges young professionals face and support one another.' },
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
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-secondary/10 to-transparent z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollAnimator variant="fade-right" duration={800}>
            <div>
              <div className="inline-block px-4 py-2 bg-white text-primary rounded-full font-semibold text-sm mb-6 shadow-sm border border-primary/20 animate-glow">
                Our Values
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                Why{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-text">
                  Join Us
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Become part of a community dedicated to excellence, growth, and positive impact.
                Here is what we stand for and what you can expect feeling every day.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator variant="fade-left" duration={800} delay={150}>
            <div className="relative h-64 lg:h-80 w-full rounded-3xl overflow-hidden shadow-xl hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000"
                alt="Community values"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </ScrollAnimator>
        </div>

        {/* Cards grid – each card staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const c = colorSets[index % 3];
            return (
              <ScrollAnimator
                key={index}
                variant="zoom-in"
                delay={index * 80}
                duration={600}
              >
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover-lift hover:border-primary/20 transition-all duration-300 group relative overflow-hidden h-full">
                  <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-colors ${c.blob}`} />
                  <div className="relative z-10">
                    <div className={`mb-6 inline-flex p-3 rounded-2xl group-hover:scale-110 group-hover:text-white transition-all duration-300 ${c.bg} ${c.text} ${c.hoverBg}`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
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
