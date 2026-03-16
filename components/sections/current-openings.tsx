// components/sections/currentopening.tsx
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
    <ScrollAnimator>
      <section id="current-openings" className="w-full bg-primary/5 relative pb-16 sm:pb-24 lg:pb-32">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
        {/* Header with image */}
        <div className="relative h-[300px] w-full mb-16 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000"
            alt="Colleagues collaborating"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-md">
              Current Openings
            </h2>
            <p className="text-lg text-slate-100 max-w-2xl font-medium drop-shadow-md">
              Join our growing team and make an impact in Rwanda's education and empowerment sector.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10 mb-8 -mt-24 relative z-10">
            {error ? (
              <p className="text-red-500 text-center py-8">{error}</p>
            ) : (
              <JobTable jobs={jobs} />
            )}
          </div>

          <div className="text-center mt-12 bg-secondary/5 p-8 rounded-3xl border border-secondary/20">
            <p className="text-slate-700 font-medium mb-4">
              Don't see a position that matches your skills?
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full transition-all shadow-md px-8 py-6" size="lg">
              <a href="https://forms.google.com/general-application" target="_blank" rel="noopener noreferrer">
                Submit General Application
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}