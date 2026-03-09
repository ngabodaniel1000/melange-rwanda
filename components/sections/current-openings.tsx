import { ScrollAnimator } from '@/components/scroll-animator';
import { JobTable } from '@/components/job-table';
import { Button } from '@/components/ui/button';

export function CurrentOpeningsSection() {
  return (
    <ScrollAnimator>
      <section id="current-openings" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Current Openings
            </h2>
            <p className="text-lg text-slate-600">
              Join our growing team and make an impact in Rwanda's education and empowerment sector.
            </p>
          </div>

          <div className="mb-8">
            <JobTable />
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Don't see a position that matches your skills? Apply for our general program.
            </p>
            <Button
              asChild
              className="bg-blue-500  hover:bg-primary/90 rounded-full"
              size="lg"
            >
              <a href="https://forms.google.com/general-application" target="_blank" rel="noopener noreferrer">
                General Application
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ScrollAnimator>
  );
}
