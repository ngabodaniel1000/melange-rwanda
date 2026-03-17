import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { SocialShare } from '@/components/social-share';
import { SubscriptionForm } from '@/components/subscription-form';

export function FinalCtaSection() {
  return (
    <section className="w-full relative py-20 sm:py-32 overflow-hidden bg-white mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <ScrollAnimator variant="fade-down" delay={100} duration={600}>
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm shadow-sm border border-primary/20 animate-glow mb-8">
            SECTION 8
          </div>
        </ScrollAnimator>

        {/* Main CTA card */}
        <ScrollAnimator variant="zoom-in" duration={800}>
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight uppercase">
              ARE YOU READY TO ELEVATE YOUR CAREER?
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Don't miss this chance to shape the future of Rwanda's global professionals. Apply today!
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-8 text-sm sm:text-lg uppercase tracking-wider font-bold border-none shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40 mb-16"
            >
              <a href="#current-openings">
                VIEW ALL OPENINGS AND APPLY
              </a>
            </Button>
          </div>
        </ScrollAnimator>

        {/* Social share + subscription */}
        <ScrollAnimator variant="fade-up" delay={150} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 pt-12 border-t border-slate-200">

            {/* Social Share */}
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                Know someone who would be a perfect fit? Share this page.
              </p>
              <SocialShare className="justify-center md:justify-start flex-wrap gap-4" />
            </div>

            {/* Subscription Form */}
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg text-slate-800 font-semibold leading-relaxed">
                Or join our mailing list for future openings:
              </p>
              <SubscriptionForm />
            </div>
          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}
