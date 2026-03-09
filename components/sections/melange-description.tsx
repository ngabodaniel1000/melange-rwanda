import { ScrollAnimator } from '@/components/scroll-animator';

export function MelangeDescriptionSection() {
  return (
    <ScrollAnimator>
      <section id="about" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                A Mélange, Not a Marketplace
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are not simply a recruitment platform or a job board. Mélange Rwanda is a carefully curated ecosystem designed to nurture talent and foster meaningful relationships between exceptional organizations and Rwanda's brightest young professionals.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Every member of our community has been selected for their potential, drive, and commitment to making a positive impact. We believe in building quality over quantity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-600">Curated talent and opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-600">Mentorship and continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-slate-600">Community and networking</span>
                </li>
              </ul>
            </div>

            {/* Right column */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">
                Why Mélange?
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The word "Mélange" means a mixture or blend. We chose this name because we believe in bringing together diverse talents, perspectives, and experiences to create something extraordinary.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Rwanda is experiencing rapid growth and transformation. We are building the bridge between traditional education and the skills needed in modern, innovative organizations. We are creating a community where young professionals can grow, contribute, and lead.
              </p>
              <div className="bg-white p-6 rounded-lg border border-slate-200 mt-6">
                <p className="text-primary font-semibold mb-2">Our Values</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Excellence through merit and dedication</li>
                  <li>• Community-first approach</li>
                  <li>• Sustainable impact and growth</li>
                  <li>• Integrity and transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
