import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  link: string;
}

interface JobTableProps {
  jobs?: Job[];
}

const defaultJobs: Job[] = [
  {
    title: 'Program Coordinator',
    department: 'Education',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    link: 'https://forms.google.com/example1',
  },
  {
    title: 'Community Engagement Officer',
    department: 'Outreach',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    link: 'https://forms.google.com/example2',
  },
  {
    title: 'Data & Analytics Specialist',
    department: 'Operations',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    link: 'https://forms.google.com/example3',
  },
  {
    title: 'Youth Mentor',
    department: 'Education',
    location: 'Kigali, Rwanda',
    type: 'Part-time',
    link: 'https://forms.google.com/example4',
  },
];

export function JobTable({ jobs = defaultJobs }: JobTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-semibold text-foreground">Position</th>
            <th className="text-left py-4 px-4 font-semibold text-foreground">Department</th>
            <th className="text-left py-4 px-4 font-semibold text-foreground">Location</th>
            <th className="text-left py-4 px-4 font-semibold text-foreground">Type</th>
            <th className="text-center py-4 px-4 font-semibold text-foreground">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="py-4 px-4 font-medium">{job.title}</td>
              <td className="py-4 px-4 text-muted-foreground">{job.department}</td>
              <td className="py-4 px-4 text-muted-foreground">{job.location}</td>
              <td className="py-4 px-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {job.type}
                </span>
              </td>
              <td className="py-4 px-4 text-blue-500 text-center">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    View <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
