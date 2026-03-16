'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SubscriptionFormProps {
  className?: string;
}

export function SubscriptionForm({ className = '' }: SubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Subscribe to our newsletter
        </label>
        <div className="flex gap-2">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-full">
            Subscribe
          </Button>
        </div>
      </div>
      {submitted && (
        <p className="text-sm text-accent">
          Thank you for subscribing!
        </p>
      )}
    </form>
  );
}
