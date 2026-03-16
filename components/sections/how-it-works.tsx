import { ScrollAnimator } from '@/components/scroll-animator';
import { FileText, Briefcase, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <FileText className="w-6 h-6" />,
    number: '01',
    title: 'Apply',
    description: 'Submit your application with your CV, cover letter, and a brief overview of your skills and career goals.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    number: '02',
    title: 'Trial Period',
    description: 'Complete a paid project to showcase your skills and personal abilities. This is compensated work.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    number: '03',
    title: 'Grow',
    description: 'As we secure clients, you receive ongoing projects. Your role and earnings scale with our success.',
  },
];

const stepColors = [
  { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', hoverBg: 'group-hover:bg-primary' },
  { bg: 'bg-secondary/10', text: 'text-secondary-foreground', border: 'border-secondary/20', hoverBg: 'group-hover:bg-secondary' },
  { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20', hoverBg: 'group-hover:bg-accent' },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-secondary shadow-lg shadow-secondary/20" />

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <ScrollAnimator variant="fade-down" duration={700}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Your Journey{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-text">
                With Us
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our simple but powerful three-step process to unlocking your full potential.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Steps – each slides in from left with stagger */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:w-1 before:bg-slate-100 before:left-8 before:top-2 before:bottom-2">
            {steps.map((step, index) => {
              const c = stepColors[index];
              return (
                <ScrollAnimator
                  key={index}
                  variant="fade-right"
                  delay={index * 150}
                  duration={700}
                >
                  <div className="relative flex items-start gap-6 group">
                    <div
                      className={`relative z-10 w-16 h-16 bg-white border-4 ${c.border} rounded-2xl shadow-sm flex items-center justify-center ${c.text} group-hover:scale-110 ${c.hoverBg} group-hover:text-white transition-all duration-300`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover-lift transition-shadow duration-300">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className={`font-bold text-lg ${c.text}`}>{step.number}.</span>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                </ScrollAnimator>
              );
            })}
          </div>

          {/* Image – slides in from right */}
          <ScrollAnimator variant="fade-left" duration={900} delay={200}>
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                alt="Collaborative work environment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white text-center animate-scale-in">
                  <p className="font-semibold text-lg mb-2">Ready to start your journey?</p>
                  <p className="text-sm opacity-90 max-w-sm mx-auto">
                    We&rsquo;re looking for individuals who are passionate about growth, community, and
                    making a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}
