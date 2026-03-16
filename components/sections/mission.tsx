import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function MissionSection() {
  return (
    <ScrollAnimator>
      <section id="mission" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                alt="Our mission - team collaboration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text side */}
            <div className="lg:pl-8">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full font-semibold text-sm mb-6 shadow-sm border border-secondary/20">
                Our Purpose
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
                Bridging the Gap to <span className="text-primary">Greatness</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
                At Mélange Rwanda, we believe that every young person deserves access to quality education and opportunities for growth. We are dedicated to bridging the gap between education and employment, empowering Rwanda's youth to become leaders in their communities and innovators in their fields.
              </p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed border-l-4 border-accent pl-6 italic bg-white/50 p-4 rounded-r-2xl shadow-sm">
                Through strategic partnerships, mentorship, and comprehensive skill-building programs, we create pathways for youth to thrive in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
