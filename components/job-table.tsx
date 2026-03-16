// components/job-table.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  link: string;
}

interface JobTableProps {
  jobs: Job[];
}

const typeColors = [
  'bg-primary/10 text-primary',
  'bg-secondary/20 text-secondary-foreground',
  'bg-accent/10 text-accent',
];

export function JobTable({ jobs }: JobTableProps) {
  if (!jobs?.length) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p className="text-2xl mb-2">🇷🇼</p>
        <p className="font-medium">No openings at the moment.</p>
        <p className="text-sm mt-1">Check back soon — we&rsquo;re growing!</p>
      </div>
    );
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b-2 border-primary/10 bg-muted/30">
          <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
            Position
          </th>
          <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
            Department
          </th>
          <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
            Location
          </th>
          <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-left whitespace-nowrap">
            Type
          </th>
          <th className="py-4 px-3 sm:px-4 font-bold text-foreground tracking-wide text-center whitespace-nowrap">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr
            key={index}
            className="border-b border-border/60 hover:bg-primary/5 transition-all duration-200 animate-slide-up group"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <td className="py-4 px-3 sm:px-4 font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
              {job.title}
            </td>
            <td className="py-4 px-3 sm:px-4 text-muted-foreground whitespace-nowrap">
              {job.department}
            </td>
            <td className="py-4 px-3 sm:px-4 text-muted-foreground whitespace-nowrap">
              {job.location}
            </td>
            <td className="py-4 px-3 sm:px-4 whitespace-nowrap">
              <span className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-semibold rounded-full ${typeColors[index % 3]}`}>
                {job.type}
              </span>
            </td>
            <td className="py-4 px-3 sm:px-4 text-center whitespace-nowrap">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90 text-white hover:scale-105 transition-transform shadow-sm hover:shadow-primary/30 hover:shadow-md text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
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
  );
}