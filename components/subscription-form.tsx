'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface SubscriptionFormProps {
  className?: string;
  buttonText?: string;
  emailPlaceholder?: string;
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  successMessage?: string;
  showNameFields?: boolean; // Option to show/hide name fields
}

export function SubscriptionForm({ 
  className = '',
  buttonText = 'Subscribe',
  emailPlaceholder = 'Email address',
  firstNamePlaceholder = 'First name',
  lastNamePlaceholder = 'Last name',
  successMessage = 'Thanks for subscribing! Check your inbox.',
  showNameFields = true // Set to false if you only want email
}: SubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          firstName,
          lastName 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setMessage(data.message || successMessage);
      setEmail('');
      setFirstName('');
      setLastName('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again.');
      console.error('Subscription error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full space-y-4 ${className}`}>
      {showNameFields && (
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="text"
            placeholder={firstNamePlaceholder}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 rounded-full px-4 py-2 border-2 focus:border-primary transition-colors"
            aria-label="First name"
          />
          <Input
            type="text"
            placeholder={lastNamePlaceholder}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 rounded-full px-4 py-2 border-2 focus:border-primary transition-colors"
            aria-label="Last name"
          />
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 min-w-[200px] rounded-full px-4 py-2 border-2 focus:border-primary transition-colors"
          aria-label="Email address"
        />
        <Button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className="bg-primary hover:bg-primary/90 rounded-full px-6 min-w-[120px] transition-all"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </div>
      
      {message && (
        <div 
          className={`flex items-center gap-2 text-sm px-4 py-2 rounded-full ${
            status === 'success' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
              : status === 'error'
              ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              : ''
          }`}
        >
          {status === 'success' && <CheckCircle className="w-4 h-4 shrink-0" />}
          {status === 'error' && <AlertCircle className="w-4 h-4 shrink-0" />}
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}