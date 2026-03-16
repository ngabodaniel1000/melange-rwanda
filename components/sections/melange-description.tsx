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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Video column – zooms in */}
          <ScrollAnimator variant="zoom-in" duration={900}>
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px] border border-slate-100 group hover-lift">
              <video
                autoPlay
                loop
                playsInline
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/bridge2rwanda.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent z-10 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-scale-in">
                  <p className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Innovation in Action
                  </p>
                  <p className="text-slate-200 text-sm">
                    Connecting traditional education with modern organizational needs through
                    practical exposure and dedicated mentorship.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimator>

          {/* Text column – slides from left */}
          <ScrollAnimator variant="fade-left" duration={800} delay={100}>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-full font-semibold text-sm shadow-sm border border-secondary/20 animate-glow">
                About Our Platform
              </div>

              <h3 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                A{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-text">
                  Mélange
                </span>
                , Not a Marketplace
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">
                We are not simply a recruitment platform or a job board. Mélange Rwanda is a carefully
                curated ecosystem designed to nurture talent and foster meaningful relationships between
                exceptional organizations and Rwanda&rsquo;s brightest young professionals.
              </p>

              <div className="grid gap-4 text-slate-600">
                {/* Feature card 1 */}
                <ScrollAnimator variant="fade-right" delay={200} duration={600}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 hover-lift transition-all">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">✓</div>
                    <div>
                      <strong className="text-slate-900 block mb-1">Curated talent and opportunities</strong>
                      <span className="text-sm">
                        Every member is selected for their potential, drive, and commitment to making a
                        positive impact. Building quality over quantity.
                      </span>
                    </div>
                  </div>
                </ScrollAnimator>

                {/* Feature card 2 */}
                <ScrollAnimator variant="fade-right" delay={350} duration={600}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-accent/20 hover-lift transition-all">
                    <div className="mt-1 bg-accent/10 p-2 rounded-full text-accent">✓</div>
                    <div>
                      <strong className="text-slate-900 block mb-1">Mentorship &amp; Continuous Learning</strong>
                      <span className="text-sm">
                        We provide the bridge between traditional education and the skills needed in
                        modern organizations.
                      </span>
                    </div>
                  </div>
                </ScrollAnimator>
              </div>

              {/* Core Values card */}
              <ScrollAnimator variant="zoom-in" delay={450} duration={700}>
                <div className="bg-gradient-to-br from-primary via-primary to-accent p-8 rounded-3xl text-white shadow-xl relative overflow-hidden hover-lift">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                  <h4 className="text-xl font-bold mb-4">Our Core Values</h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {[
                      'Excellence through merit and dedication',
                      'Community-first approach',
                      'Sustainable impact and growth',
                      'Integrity and transparency',
                    ].map((val, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 animate-slide-up"
                        style={{ animationDelay: `${500 + i * 80}ms` }}
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimator>
            </div>
          </ScrollAnimator>

        </div>
      </div>
    </section>
  );
}
