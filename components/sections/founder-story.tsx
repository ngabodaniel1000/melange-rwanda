import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function FounderStorySection() {
  return (
    <ScrollAnimator>
      <section id="story" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image section */}
            <div className="relative order-2 lg:order-1 h-[500px] md:h-[600px] w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-3 scale-105 opacity-50 blur-sm transition-transform hover:rotate-6"></div>
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/founder.jpg"
                  alt="Founder of Mélange Rwanda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              </div>
            </div>

            {/* Content section */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-blue-300 rounded-full text-sm font-semibold mb-8 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                The Founder's Story
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-tight">
                Bridging Two <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Worlds</span>
              </h2>
              
              <div className="space-y-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                <p>
                  Mélange Rwanda was founded on the belief that Rwanda's greatest resource is its people. Our founder recognized a critical gap: talented young professionals in Rwanda were struggling to find meaningful career opportunities that matched their ambitions and potential.
                </p>
                <p>
                  After spending years working across Africa and observing the disparities between education and employment opportunities, our founder decided to create a solution. Mélange Rwanda was born out of a passion to connect Rwanda's brightest young minds with organizations that recognize and value their potential.
                </p>
                <p>
                  Today, we are proud to have created a thriving community of young professionals who are making real impact in their organizations and communities.
                </p>
              </div>

              <div className="mt-10 p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 transform hover:-translate-y-1 transition-transform">
                <p className="text-sm font-bold text-blue-400 mb-3 tracking-widest uppercase">Our Vision</p>
                <p className="text-white font-medium text-lg leading-snug">
                  "To be the leading platform for youth empowerment and professional development in East Africa."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
