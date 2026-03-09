'use client';

import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  className?: string;
}

export function SocialShare({ className = '' }: SocialShareProps) {
  const handleWhatsApp = () => {
    const text = 'Check out Mélange Rwanda! Join us in empowering Rwanda\'s youth through education and opportunity.';
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const subject = 'Check out Mélange Rwanda';
    const body = 'I found this amazing non-profit organization - Mélange Rwanda - dedicated to empowering youth through education. Check it out!';
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  };

  const handleLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      <Button
        onClick={handleWhatsApp}
        variant="outline"
        size="sm"
        className="rounded-full"
        title="Share on WhatsApp"
      >
        <span>WhatsApp</span>
      </Button>
      <Button
        onClick={handleEmail}
        variant="outline"
        size="sm"
        className="rounded-full"
        title="Share via Email"
      >
        <Mail className="w-4 h-4 mr-1" />
        <span>Email</span>
      </Button>
      <Button
        onClick={handleLinkedIn}
        variant="outline"
        size="sm"
        className="rounded-full"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 mr-1" />
        <span>LinkedIn</span>
      </Button>
    </div>
  );
}
