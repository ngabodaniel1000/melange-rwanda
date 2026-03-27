import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function MissionSection({ data }: { data?: any }) {
  const title = data?.title || 'Our mission';
  const description = data?.description || 'Our mission is to create sustainable, impactful opportunities for exceptional Rwandan talent, delivering world-class value to our North American clients. We believe lasting impact is achieved through meaningful work, integrating local expertise with global opportunities.';
  const imageUrl1 = data?.image1 ? urlFor(data.image1).url() : '/10.png';
  const imageUrl2 = data?.image2 ? urlFor(data.image2).url() : '/6.png';
  const imageUrl3 = data?.image3 ? urlFor(data.image3).url() : '/722.jpg';

  return (
    <section
      id="mission"
      className="w-full py-12 sm:py-16 lg:py-24 px-0 bg-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2" />
  
      <div className="w-full mx-auto">
        {/* Text section - centered above images */}
        <ScrollAnimator variant="fade-up" duration={800} delay={150} className="mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-5 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              {title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </ScrollAnimator>

        {/* Three parallelogram images - full width, no margins */}
        <ScrollAnimator variant="fade-up" duration={800} delay={300}>
          <div className="flex w-full">
            {/* First parallelogram - left */}
            <div className="relative flex-1 h-[130px] sm:h-[170px] md:h-[210px] lg:h-[250px] transform -skew-x-6 overflow-hidden">
              <div className="relative w-full h-full skew-x-6">
                <Image
                  src={imageUrl1}
                  alt={`${title} 1`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second parallelogram - center */}
            <div className="relative flex-1 h-[130px] sm:h-[170px] md:h-[210px] lg:h-[250px] transform -skew-x-6 overflow-hidden">
              <div className="relative w-full h-full skew-x-6">
                <Image
                  src={imageUrl2}
                  alt={`${title} 2`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Third parallelogram - right */}
            <div className="relative flex-1 h-[130px] sm:h-[170px] md:h-[210px] lg:h-[250px] transform -skew-x-6 overflow-hidden">
              <div className="relative w-full h-full skew-x-6">
                <Image
                  src={imageUrl3}
                  alt={`${title} 3`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}