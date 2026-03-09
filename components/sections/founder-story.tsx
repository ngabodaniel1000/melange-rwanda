import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function FounderStorySection() {
  return (
    <ScrollAnimator>
      <section id="story" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/founder.jpg"
                alt="Founder of Mélange Rwanda"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Bridging Two Worlds
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Mélange Rwanda was founded on the belief that Rwanda's greatest resource is its people. Our founder recognized a critical gap: talented young professionals in Rwanda were struggling to find meaningful career opportunities that matched their ambitions and potential.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                After spending years working across Africa and observing the disparities between education and employment opportunities, our founder decided to create a solution. Mélange Rwanda was born out of a passion to connect Rwanda's brightest young minds with organizations that recognize and value their potential.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Today, we are proud to have created a thriving community of young professionals who are making real impact in their organizations and communities.
              </p>
              <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm font-semibold text-primary mb-2">OUR VISION</p>
                <p className="text-slate-900 font-semibold">
                  To be the leading platform for youth empowerment and professional development in East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
