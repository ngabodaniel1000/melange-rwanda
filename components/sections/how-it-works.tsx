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
    icon: <FileText className="w-8 h-8" />,
    number: '01',
    title: 'Apply',
    description: 'Submit your application with your CV, cover letter, and a brief overview of your skills and career goals.',
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    number: '02',
    title: 'Trial Period',
    description: 'Complete a paid project to showcase your skills and personal abilities. This is compensated work.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: '03',
    title: 'Grow',
    description: 'As we secure clients, you receive ongoing projects. Your role and earnings scale with our success.',
  },
];

export function HowItWorksSection() {
  return (
    <ScrollAnimator>
      <section id="how-it-works" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              Our simple but powerful three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="relative bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all">
                  {/* Number badge */}
                  <div className="absolute -top-6 left-6 w-12 h-12 bg-gray-100 text-blue-500 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>

                  <div className="mt-8 mb-4 text-blue-500">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">Ready to start your journey?</span> Each member of our community is carefully selected for their potential and commitment to excellence. We're looking for individuals who are passionate about growth, community, and making a positive impact.
            </p>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
