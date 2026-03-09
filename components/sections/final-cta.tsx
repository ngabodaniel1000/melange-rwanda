import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { SocialShare } from '@/components/social-share';
import { SubscriptionForm } from '@/components/subscription-form';

export function FinalCtaSection() {
  return (
    <ScrollAnimator>
      <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Ready to Join Rwanda's Elite?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards a fulfilling career where your talents are valued, and your impact matters. Apply now to become part of the Mélange Rwanda community.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-700 rounded-full px-8 text-lg"
            >
              <a href="#current-openings">
                View All Openings and Apply
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-slate-500 text-sm font-medium">SHARE</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Share */}
          <div className="mb-12">
            <p className="text-center text-slate-600 mb-6">
              Know someone who would be perfect for Mélange Rwanda? Share the opportunity.
            </p>
            <div className="flex justify-center">
              <SocialShare className="flex-wrap justify-center" />
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-slate-500 text-sm font-medium">STAY UPDATED</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Subscription Form */}
          <div className="max-w-md mx-auto">
            <p className="text-center text-slate-600 mb-6">
              Subscribe to our newsletter to get updates on new opportunities and news from the Mélange Rwanda community.
            </p>
            <SubscriptionForm />
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
