'use client';

import { Mail, Linkedin, MessageCircle, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialShareProps {
  className?: string;
  title?: string;
  description?: string;
  url?: string;
}

export function SocialShare({ 
  className = '', 
  title = 'Check out Mélange Rwanda!',
  description = 'Join us in empowering Rwanda\'s youth through education and opportunity.',
  url 
}: SocialShareProps) {
  
  const siteUrl = process.env.NEXT_PUBLIC_SITEURL || 'https://melangerwanda.netlify.app';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;
  const shareUrl = url || currentUrl;

  const handleWhatsApp = () => {
    const text = `${title}\n\n${description}\n\n${shareUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmail = () => {
    const subject = title;
    const body = `${description}\n\n${shareUrl}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedIn = () => {
    // Using LinkedIn's share API that supports custom messages
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      prompt('Copy this link:', shareUrl);
    });
  };

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Button
        onClick={handleWhatsApp}
        variant="outline"
        size="sm"
        className="rounded-full inline-flex items-center"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 mr-1" />
        <span>WhatsApp</span>
      </Button>
      
      <Button
        onClick={handleEmail}
        variant="outline"
        size="sm"
        className="rounded-full inline-flex items-center"
        title="Share via Email"
      >
        <Mail className="w-4 h-4 mr-1" />
        <span>Email</span>
      </Button>
      
      <Button
        onClick={handleLinkedIn}
        variant="outline"
        size="sm"
        className="rounded-full inline-flex items-center"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4 mr-1" />
        <span>LinkedIn</span>
      </Button>

      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="sm"
        className="rounded-full inline-flex items-center"
        title="Copy link to clipboard"
      >
        <Copy className="w-4 h-4 mr-1" />
        <span>Copy Link</span>
      </Button>
    </div>
  );
}