import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { SocialShare } from '@/components/social-share';
import { SubscriptionForm } from '@/components/subscription-form';
import Image from 'next/image';

export function FinalCtaSection() {
  return (
    <ScrollAnimator>
      <section className="w-full relative py-20 sm:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000"
          alt="People united"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
        {/* Triple Flag Band Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 w-full h-[50%] bg-primary/20"></div>
          <div className="absolute top-[50%] w-full h-[25%] bg-secondary/20"></div>
          <div className="absolute bottom-0 w-full h-[25%] bg-accent/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c2a4d]/60 via-transparent to-[#0c2a4d]/80"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main CTA */}
          <div className="text-center mb-16 bg-white/10 backdrop-blur-xl p-10 sm:p-14 rounded-3xl border border-white/20 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Ready to Join <span className="text-secondary">Rwanda's Elite?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards a fulfilling career where your talents are valued, and your impact matters. Apply now to become part of the Mélange Rwanda community.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-lg border-none shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 text-white font-semibold"
            >
              <a href="#current-openings">
                View All Openings & Apply
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700">
            {/* Social Share */}
            <div>
              <p className="text-left text-slate-300 font-medium mb-4 text-sm uppercase tracking-wider">
                Spread The Word
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Know someone who would be perfect for Mélange Rwanda? Share the opportunity with your network.
              </p>
              <SocialShare className="flex-wrap justify-start" />
            </div>

            {/* Subscription Form */}
            <div>
              <p className="text-left text-slate-300 font-medium mb-4 text-sm uppercase tracking-wider">
                Stay Updated
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Subscribe to our newsletter to get updates on new opportunities and community news.
              </p>
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
