import { ScrollAnimator } from '@/components/scroll-animator';

export function MelangeDescriptionSection() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-accent/5 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-2 h-full bg-accent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 transform translate-y-1/4 translate-x-1/4" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollAnimator variant="fade-down" duration={700}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What is Mélange?
            </h2>
          </ScrollAnimator>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left Column */}
          <ScrollAnimator variant="fade-right" duration={800} delay={100}>
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100 hover-lift h-full flex flex-col justify-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                A{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent">
                  Mélange
                </span>
                , Not a Marketplace
              </h3>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                We're not a typical bidding platform; Mélange Rwanda is a curated freelance team that brings Rwandan professionals together with North American standards to create something new.
              </p>
            </div>
          </ScrollAnimator>

          {/* Right Column */}
          <ScrollAnimator variant="fade-left" duration={800} delay={200}>
            <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-100 hover-lift h-full flex flex-col justify-center relative overflow-hidden">
              {/* Optional subtle decorative overlay */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 z-0" />
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
                  Why "Mélange"?
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  'Mélange' means a harmonious mixture of diverse elements—Rwandan talent meets global opportunities and local excellence drives our success.
                </p>
              </div>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}