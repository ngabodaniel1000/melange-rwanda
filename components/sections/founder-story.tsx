import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function FounderStorySection() {
  return (
    <section
      id="story"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-2 h-full bg-accent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Column – left */}
          <ScrollAnimator variant="fade-right" duration={900}>
            <div className="relative h-[500px] md:h-[600px] w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform -rotate-3 scale-105 opacity-50 blur-sm transition-transform hover:-rotate-6" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover-lift">
                <Image
                  src="/founder.jpg"
                  alt="Founder of Mélange Rwanda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                  <p className="text-white font-semibold text-lg tracking-wide drop-shadow-md">
                    Eloi XXXXX, Founder
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Text Column – right */}
          <ScrollAnimator variant="fade-left" duration={800} delay={150}>
            <div className="space-y-8">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
               Our Founder
              </h2>

              <div className="space-y-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                <ScrollAnimator variant="fade-up" delay={200} duration={600}>
                  <p>
                    As the founder, I split my time between Canada and Rwanda to harness the immense potential of Rwandan talent. My background in HR Management and Culinary Arts, combined with deep experience in the Canadian funding ecosystem, drives our mission at Mélange Rwanda.
                  </p>
                </ScrollAnimator>

                <ScrollAnimator variant="fade-up" delay={320} duration={600}>
                  <p>
                    When you join this team, you're not working for a distant company. You're partnering with me as we build something lasting together.
                  </p>
                </ScrollAnimator>
              </div>

              <ScrollAnimator variant="zoom-in" delay={450} duration={700}>
                <div className="mt-8 p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-md hover-lift">
                  <p className="text-sm text-primary font-bold mb-3 tracking-widest uppercase">Sustainable Scaling</p>
                  <p className="text-slate-800 font-semibold text-lg sm:text-xl leading-snug">
                    Growth is funded by revenue. We build a business that lasts—together.
                  </p>
                </div>
              </ScrollAnimator>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}
