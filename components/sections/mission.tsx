import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function MissionSection({ data }: { data?: any }) {
  const title = data?.title || 'Our mission';
  const description = data?.description || 'Our mission is to create sustainable, impactful opportunities for exceptional Rwandan talent, delivering world-class value to our North American clients. We believe lasting impact is achieved through meaningful work, integrating local expertise with global opportunities.';
  const imageUrl = data?.image ? urlFor(data.image).url() : '/5.png';

  return (
    <section
      id="mission"
      className="w-full py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
      <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* Text side – appears first on mobile (order-1), second on desktop (order-2) */}
          <ScrollAnimator variant="fade-left" duration={800} delay={150} className="order-1 lg:order-1">
            <div className="px-4 sm:px-6 lg:px-0 lg:pr-8 py-8 lg:py-0 space-y-5 md:space-y-6">
              <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
                {title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          </ScrollAnimator>

          {/* Image side – appears second on mobile (order-2), first on desktop (order-1) */}
          <ScrollAnimator variant="fade-right" duration={800} className="order-1 lg:order-1">
            <div className="relative h-[450px] sm:h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group hover-lift">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply lg:group-hover:bg-transparent transition-all duration-500 z-10" />
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}