import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function MissionSection() {
  return (
    <section
      id="mission"
      className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
      <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* Image side – full width on mobile, slides from left */}
          <ScrollAnimator variant="fade-right" duration={800}>
            <div className="relative  h-[450px] sm:h-[450px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group hover-lift">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply lg:group-hover:bg-transparent transition-all duration-500 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                alt="Our mission - team collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollAnimator>

          {/* Text side – with padding on mobile */}
          <ScrollAnimator variant="fade-left" duration={800} delay={150}>
            <div className="px-4 sm:px-6 lg:px-0 lg:pr-8 py-8 lg:py-0 space-y-5 md:space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full font-semibold text-xs sm:text-sm shadow-sm border border-secondary/20 animate-glow">
                Our Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Bridging the Gap to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-text">
                  Greatness
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                At Mélange Rwanda, we believe that every young person deserves access to quality education
                and opportunities for growth. We are dedicated to bridging the gap between education and
                employment, empowering Rwanda&rsquo;s youth to become leaders in their communities and
                innovators in their fields.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed border-l-4 border-accent pl-4 sm:pl-6 italic bg-white/50 p-4 sm:p-5 rounded-r-xl shadow-sm">
                Through strategic partnerships, mentorship, and comprehensive skill-building programs, we
                create pathways for youth to thrive in a rapidly changing world.
              </p>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}