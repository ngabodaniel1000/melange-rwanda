import { ScrollAnimator } from '@/components/scroll-animator';
import { FileText, Briefcase, TrendingUp } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <FileText className="w-10 h-10" />,
    number: '1',
    title: 'Apply',
    description: 'Submit your application through our form.',
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    number: '2',
    title: 'Trial',
    description: 'Complete a paid project to showcase your skills. This is compensated work.',
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    number: '3',
    title: 'Grow',
    description: 'As we secure clients, you receive ongoing projects. Your role and earnings scale with our success.',
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-blue-50 relative overflow-hidden"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-[2px] bg-blue-200 z-0" />

          {/* Steps */}
          {steps.map((step, index) => (
            <ScrollAnimator
              key={index}
              variant="fade-up"
              delay={100 + index * 150}
              duration={700}
            >
              <div className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 mb-8 bg-white rounded-full shadow-lg border-4 border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:border-blue-200 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed px-2 sm:px-4">
                  {step.description}
                </p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
