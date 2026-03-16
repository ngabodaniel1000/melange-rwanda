'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-x'
  | 'flip-y'
  | 'slide-up'
  | 'none';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number; // 0-1
  once?: boolean;
}

const variantStyles: Record<AnimationVariant, { initial: string; animated: string }> = {
  'fade-up': {
    initial: 'opacity-0 translate-y-12',
    animated: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    initial: 'opacity-0 -translate-y-12',
    animated: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    initial: 'opacity-0 -translate-x-12',
    animated: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    initial: 'opacity-0 translate-x-12',
    animated: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    initial: 'opacity-0 scale-90',
    animated: 'opacity-100 scale-100',
  },
  'zoom-out': {
    initial: 'opacity-0 scale-110',
    animated: 'opacity-100 scale-100',
  },
  'flip-x': {
    initial: 'opacity-0 rotate-x-90',
    animated: 'opacity-100 rotate-x-0',
  },
  'flip-y': {
    initial: 'opacity-0 rotate-y-90',
    animated: 'opacity-100 rotate-y-0',
  },
  'slide-up': {
    initial: 'opacity-0 translate-y-16',
    animated: 'opacity-100 translate-y-0',
  },
  none: {
    initial: '',
    animated: '',
  },
};

export function ScrollAnimator({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  once = true,
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px' } // Removed negative rootMargin
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, once]);

  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ${className} ${
        isVisible ? styles.animated : styles.initial
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDuration: `${duration}ms`,
        willChange: 'transform, opacity', // Optimize performance
      }}
    >
      {children}
    </div>
  );
}