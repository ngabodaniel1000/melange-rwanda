import { ScrollAnimator } from '@/components/scroll-animator';

export function MissionSection() {
  return (
    <ScrollAnimator>
      <section id="mission" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Our Mission
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Mélange Rwanda, we believe that every young person deserves access to quality education and opportunities for growth. We are dedicated to bridging the gap between education and employment, empowering Rwanda's youth to become leaders in their communities and innovators in their fields.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mt-4">
            Through strategic partnerships, mentorship, and comprehensive skill-building programs, we create pathways for youth to thrive in a rapidly changing world.
          </p>
        </div>
      </section>
    </ScrollAnimator>
  );
}
