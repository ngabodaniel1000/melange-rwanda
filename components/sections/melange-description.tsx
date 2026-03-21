import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function MelangeDescriptionSection({ data }: { data?: any }) {
  const title = data?.title || 'What is Mélange?';
  const card1Title = data?.card1Title || 'A Mélange, Not a Marketplace';
  const card1Description = data?.card1Description || "We're not a typical bidding platform; Mélange Rwanda is a curated freelance team that brings Rwandan professionals together with North American standards to create something new.";
  const card2Title = data?.card2Title || 'Why "Mélange"?';
  const card2Description = data?.card2Description || "'Mélange' means a harmonious mixture of diverse elements—Rwandan talent meets global opportunities and local excellence drives our success.";
  const imageUrl = data?.image ? urlFor(data.image).url() : '/2.jpg';

  return (
    <section
      id="about"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 transform translate-y-1/4 translate-x-1/4" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <ScrollAnimator variant="fade-down" duration={700}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
              {title}
            </h2>
          </ScrollAnimator>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* Visual Anchor Column - Circular Image */}
          <div className="lg:col-span-2 flex justify-center">
            <ScrollAnimator variant="fade-right" duration={800}>
              <div className="group relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl hover-lift border-4 border-white ring-4 ring-primary/20">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>
            </ScrollAnimator>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-3 space-y-8">
            {/* Top Card */}
            <ScrollAnimator variant="fade-left" duration={800} delay={100}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 hover-lift relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
                  {card1Title.includes('Mélange') ? (
                    <>
                      A{' '}
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent">
                        Mélange
                      </span>
                      , Not a Marketplace
                    </>
                  ) : card1Title}
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  {card1Description}
                </p>
              </div>
            </ScrollAnimator>

            {/* Bottom Card */}
            <ScrollAnimator variant="fade-left" duration={800} delay={250}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-100 hover-lift relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-tr-full transform -translate-x-8 translate-y-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5">
                  {card2Title}
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  {card2Description}
                </p>
              </div>
            </ScrollAnimator>
          </div>

        </div>
      </div>
    </section>
  );
}