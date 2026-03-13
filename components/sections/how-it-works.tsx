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

export function HowItWorksSection() {
  return (
    <ScrollAnimator>
      <section id="how-it-works" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Your Journey <span className="text-blue-600">With Us</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our simple but powerful three-step process to unlocking your full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Steps Side */}
            <div className="space-y-8 relative before:absolute before:inset-0 before:w-1 before:bg-blue-100 before:left-8 before:top-2 before:bottom-2">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6 group">
                  <div className="relative z-10 w-16 h-16 bg-white border-4 border-blue-50 rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-blue-400 font-bold text-lg">{step.number}.</span>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Side */}
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                alt="Collaborative work environment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white text-center">
                  <p className="font-semibold text-lg mb-2">Ready to start your journey?</p>
                  <p className="text-sm opacity-90 max-w-sm mx-auto">
                    We're looking for individuals who are passionate about growth, community, and making a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </ScrollAnimator>
  );
}
