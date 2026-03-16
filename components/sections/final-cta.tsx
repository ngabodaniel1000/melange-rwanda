import { ScrollAnimator } from '@/components/scroll-animator';
import { Button } from '@/components/ui/button';
import { SocialShare } from '@/components/social-share';
import { SubscriptionForm } from '@/components/subscription-form';
import Image from 'next/image';

export function FinalCtaSection() {
  return (
    <section className="w-full relative py-20 sm:py-32 overflow-hidden bg-[#0c2a4d]">

      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000"
        alt="People united"
        fill
        className="object-cover opacity-20 mix-blend-overlay"
      />

      {/* Triple flag band overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 w-full h-[45%] bg-gradient-to-b from-primary/25 to-transparent" />
        <div className="absolute top-[40%] w-full h-[25%] bg-secondary/10" />
        <div className="absolute bottom-0 w-full h-[35%] bg-gradient-to-t from-accent/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c2a4d]/70 via-transparent to-[#0c2a4d]/80" />
      </div>

      {/* Floating animated orbs */}
      <div className="absolute top-16 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main CTA card – zooms in */}
        <ScrollAnimator variant="zoom-in" duration={800}>
          <div className="text-center mb-16 bg-white/10 backdrop-blur-xl p-10 sm:p-14 rounded-3xl border border-white/20 shadow-2xl hover-lift">

            {/* Animated Rwanda badge */}
            <ScrollAnimator variant="fade-down" delay={100} duration={600}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 font-medium mb-8 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Join Rwanda&rsquo;s Elite Talent Network
              </div>
            </ScrollAnimator>

            <ScrollAnimator variant="fade-up" delay={200} duration={700}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
                Ready to Join{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-text">
                  Rwanda&rsquo;s Elite?
                </span>
              </h2>
            </ScrollAnimator>

            <ScrollAnimator variant="fade-up" delay={300} duration={600}>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards a fulfilling career where your talents are valued, and your
                impact matters. Apply now to become part of the Mélange Rwanda community.
              </p>
            </ScrollAnimator>

            <ScrollAnimator variant="zoom-in" delay={400} duration={600}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full px-10 py-6 text-lg border-none shadow-xl shadow-primary/30 transition-all hover:scale-110 hover:shadow-primary/50 text-white font-semibold"
              >
                <a href="#current-openings">
                  View All Openings &amp; Apply
                </a>
              </Button>
            </ScrollAnimator>
          </div>
        </ScrollAnimator>

        {/* Social share + subscription – slides up from bottom */}
        <ScrollAnimator variant="fade-up" delay={150} duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700">

            {/* Social Share */}
            <div className="space-y-3">
              <p className="text-slate-300 font-medium text-sm uppercase tracking-wider">
                Spread The Word
              </p>
              <p className="text-slate-400 text-sm">
                Know someone who would be perfect for Mélange Rwanda? Share the opportunity with your network.
              </p>
              <SocialShare className="flex-wrap justify-start" />
            </div>

            {/* Subscription Form */}
            <div className="space-y-3">
              <p className="text-slate-300 font-medium text-sm uppercase tracking-wider">
                Stay Updated
              </p>
              <p className="text-slate-400 text-sm">
                Subscribe to our newsletter to get updates on new opportunities and community news.
              </p>
              <SubscriptionForm />
            </div>

          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}
