// components/sections/current-openings.tsx
import { ScrollAnimator } from '@/components/scroll-animator';
import { JobTable, Job } from '@/components/job-table';
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

export default async function CurrentOpeningsSection() {
  let jobs: Job[] = [];
  let error: string | null = null;

  try {
    const query = `*[_type == "job"]{ title, department, location, type, link }`;
    jobs = await client.fetch(query);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    error = 'Failed to load jobs';
  }

  return (
    <section
      id="current-openings"
      className="w-full bg-primary/5 relative pb-16 sm:pb-24 lg:pb-32 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-primary" />

      {/* Header image with scroll animation */}
      <ScrollAnimator variant="zoom-out" duration={900}>
        <div className="relative h-[300px] w-full mb-16 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
            alt="Colleagues collaborating"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <ScrollAnimator variant="fade-down" duration={700} delay={200}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-md">
                Current Openings
              </h2>
            </ScrollAnimator>
            <ScrollAnimator variant="fade-up" duration={600} delay={350}>
              <p className="text-lg text-slate-100 max-w-2xl font-medium drop-shadow-md">
            We're assembling an exceptional team of freelancers for exciting projects. Click below for
the full job details.
              </p>
            </ScrollAnimator>
          </div>
        </div>
      </ScrollAnimator>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Job table – zooms in with proper scrolling */}
        <ScrollAnimator variant="zoom-in" duration={800} delay={100}>
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-4 sm:p-6 lg:p-10 mb-8 -mt-24 relative z-10 hover-lift">
            {error ? (
              <p className="text-red-500 text-center py-8">{error}</p>
            ) : (
              <>
                {/* Mobile scroll hint - optional */}
                <div className="text-xs text-muted-foreground text-right mb-2 sm:hidden">
                  ← Swipe to scroll →
                </div>

                {/* Scrollable table container */}
                <div className="w-full overflow-x-auto overflow-y-hidden touch-pan-x overscroll-x-contain pb-2">
                  <div className="min-w-[800px]">
                    <JobTable jobs={jobs} />
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollAnimator>

        {/* CTA – slides up */}
        <ScrollAnimator variant="fade-up" duration={700} delay={200}>
          <div className="text-center mt-8 sm:mt-12 bg-secondary/5 p-6 sm:p-8 rounded-3xl border border-secondary/20 hover-lift">
            <p className="text-slate-700 font-medium mb-4">
              If you have exceptional skills in writing, research, design, or operations that don't fit these exact
descriptions, we still want to hear from you
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-full transition-all shadow-md px-6 sm:px-8 py-4 sm:py-6 hover:scale-105 hover:shadow-primary/30 hover:shadow-xl text-sm sm:text-base"
              size="lg"
            >
              <a href="https://forms.google.com/general-application" target="_blank" rel="noopener noreferrer">
                Submit General Application
              </a>
            </Button>
          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}