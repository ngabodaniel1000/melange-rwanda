import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function FounderStorySection() {
  return (
    <section
      id="story"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 text-black relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 left-0 w-2 h-full bg-accent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image – zooms in */}
          <ScrollAnimator variant="zoom-in" duration={900}>
            <div className="relative order-2 lg:order-1 h-[500px] md:h-[600px] w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-primary/50 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-sm transition-transform hover:rotate-6" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover-lift">
                <Image
                  src="/founder.jpg"
                  alt="Founder of Mélange Rwanda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              </div>
            </div>
          </ScrollAnimator>

          {/* Content – slides from right */}
          <ScrollAnimator variant="fade-left" duration={800} delay={150}>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a2540] text-white rounded-full text-sm font-semibold border border-white/10 backdrop-blur-md animate-glow">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                The Founder&rsquo;s Story
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2540] tracking-tight leading-tight">
                Bridging Two{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-text">
                  Worlds
                </span>
              </h2>

              <div className="space-y-5 text-lg sm:text-xl text-slate-700 leading-relaxed font-light">
                {[
                  "Mélange Rwanda was founded on the belief that Rwanda's greatest resource is its people. Our founder recognized a critical gap: talented young professionals in Rwanda were struggling to find meaningful career opportunities that matched their ambitions and potential.",
                  "After spending years working across Africa and observing the disparities between education and employment opportunities, our founder decided to create a solution. Mélange Rwanda was born out of a passion to connect Rwanda's brightest young minds with organizations that recognize and value their potential.",
                  "Today, we are proud to have created a thriving community of young professionals who are making real impact in their organizations and communities.",
                ].map((text, i) => (
                  <ScrollAnimator key={i} variant="fade-right" delay={200 + i * 120} duration={600}>
                    <p>{text}</p>
                  </ScrollAnimator>
                ))}
              </div>

              <ScrollAnimator variant="zoom-in" delay={600} duration={700}>
                <div className="mt-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover-lift">
                  <p className="text-sm text-accent font-bold mb-3 tracking-widest uppercase">Our Vision</p>
                  <p className="text-slate-800 font-medium text-lg leading-snug">
                    &ldquo;To be the leading platform for youth empowerment and professional development in
                    East Africa.&rdquo;
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
