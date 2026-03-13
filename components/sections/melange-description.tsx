import { ScrollAnimator } from '@/components/scroll-animator';

export function MelangeDescriptionSection() {
  return (
    <ScrollAnimator>
      <section id="about" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px] border border-slate-100 group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/a.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <p className="text-white font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Innovation in Action
                  </p>
                  <p className="text-slate-200 text-sm">
                    Connecting traditional education with modern organizational needs through practical exposure and dedicated mentorship.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-full font-semibold text-sm mb-6 shadow-sm">
                About Our Platform
              </div>
              <h3 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">
                A <span className="text-blue-600">Mélange</span>, Not a Marketplace
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We are not simply a recruitment platform or a job board. Mélange Rwanda is a carefully curated ecosystem designed to nurture talent and foster meaningful relationships between exceptional organizations and Rwanda's brightest young professionals.
              </p>

              <div className="grid gap-4 mb-8 text-slate-600">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600">✓</div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Curated talent and opportunities</strong>
                    <span className="text-sm">Every member is selected for their potential, drive, and commitment to making a positive impact. Building quality over quantity.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-1 bg-blue-100 p-2 rounded-full text-blue-600">✓</div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Mentorship & Continuous Learning</strong>
                    <span className="text-sm">We provide the bridge between traditional education and the skills needed in modern organizations.</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <h4 className="text-xl font-bold mb-4">Our Core Values</h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span> Excellence through merit and dedication</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span> Community-first approach</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span> Sustainable impact and growth</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/80 rounded-full"></span> Integrity and transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
