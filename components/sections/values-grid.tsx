import { ScrollAnimator } from '@/components/scroll-animator';
import { Users, TrendingUp, Target, Network, BookOpen, Award, Lightbulb, Heart } from 'lucide-react';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueCard[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community First',
    description: 'We believe in the power of community and collective growth. Our network is our greatest asset.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Continuous Growth',
    description: 'Every member is committed to lifelong learning and professional development.',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Purpose-Driven',
    description: 'We focus on making meaningful contributions to Rwanda and the wider African continent.',
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Strong Networks',
    description: 'Access to an extensive network of professionals, mentors, and industry leaders.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Quality Education',
    description: 'We provide access to world-class training and educational resources.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Excellence',
    description: 'We set high standards and celebrate exceptional achievements among our members.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovation',
    description: 'We encourage creative thinking and innovative solutions to real-world challenges.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Empathy',
    description: 'We understand the challenges young professionals face and support one another.',
  },
];

export function ValuesGridSection() {
  return (
    <ScrollAnimator>
      <section id="values" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Why Join Us
            </h2>
            <p className="text-lg text-slate-600">
              Become part of a community dedicated to excellence, growth, and positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
