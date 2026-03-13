import { ScrollAnimator } from '@/components/scroll-animator';
import { Users, TrendingUp, Target, Network, BookOpen, Award, Lightbulb, Heart } from 'lucide-react';
import Image from 'next/image';

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
      <section id="values" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-blue-50 to-transparent absolute z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block px-4 py-2 bg-white text-blue-600 rounded-full font-semibold text-sm mb-6 shadow-sm border border-blue-100">
                Our Values
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Join Us</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                Become part of a community dedicated to excellence, growth, and positive impact. Here is what we stand for and what you can expect feeling every day.
              </p>
            </div>
            
            <div className="relative h-64 lg:h-80 w-full rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000"
                alt="Community values"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors"></div>
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollAnimator>
  );
}
