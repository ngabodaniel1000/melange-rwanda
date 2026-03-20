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
    icon: <FileText className="w-8 h-8" />,
    number: '1',
    title: 'Apply',
    description: 'Submit your application through our form.',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    number: '2',
    title: 'Trial',
    description: 'Complete a paid project to showcase your skills. This is compensated work.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: '3',
    title: 'Grow',
    description: 'As we secure clients, you receive ongoing projects. Your role and earnings scale with our success.',
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <ScrollAnimator variant="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
              OUR PARTNERSHIP MODEL: <br className="hidden sm:block" />
              <span className="text-blue-600 mt-2 block sm:inline">HOW IT WORKS</span>
            </h2>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Steps Side */}
          <div className="space-y-10 relative">
            {/* Connecting line for mobile/desktop stacked */}
            <div className="absolute left-[47px] top-10 bottom-10 w-0.5 bg-blue-100 hidden sm:block" />

            {steps.map((step, index) => (
              <ScrollAnimator
                key={index}
                variant="fade-right"
                delay={index * 150}
                duration={700}
              >
                <div className="relative z-10 flex items-start gap-6 group">
                  <div className="w-24 h-24 shrink-0 bg-white rounded-2xl shadow-lg border-2 border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-105 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>

          {/* Visual Anchor Side */}
          <ScrollAnimator variant="fade-left" duration={900}>
            <div className="relative h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <Image
                src="/10.png"
                alt="Professional partnership process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xl font-bold mb-2">Sustainable Success</p>
                <p className="text-white/80 font-medium">Building a bridge between talent and global opportunity.</p>
              </div>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}
