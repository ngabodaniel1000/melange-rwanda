"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ScrollAnimator } from '@/components/scroll-animator';

const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'About', href: '#about' },
    { name: 'Openings', href: '#current-openings' },
    { name: 'Values', href: '#values' },
    { name: 'Story', href: '#story' },
    { name: 'Process', href: '#how-it-works' },
];

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Shrink navbar on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-primary/10 transition-all duration-300 ${scrolled ? 'py-3 shadow-md' : 'py-4 shadow-sm'
                }`}
        >
            {/* 3-colour flag accent bar at very top */}
            <div className="absolute top-0 left-0 w-full h-[3px] flex">
                <div className="flex-1 bg-primary" />
                <div className="w-[12%] bg-secondary" />
                <div className="flex-1 bg-accent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <ScrollAnimator variant="fade" duration={600} threshold={0} once={true}>
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, '#home')}
                                className={`font-bold font-montserrat text-primary tracking-wide transition-all duration-300 ${scrolled ? 'text-md' : 'text-xl lg:text-2xl'
                                    }`}
                            >
                                <span className="text-secondary drop-shadow-sm">M</span>élange <span className="text-accent drop-shadow-sm">R</span>wanda
                            </a>
                        </ScrollAnimator>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        {NAV_LINKS.map((link, i) => (
                            <ScrollAnimator key={link.name} variant="fade-down" delay={i * 50} duration={500} threshold={0} once={true}>
                                <a
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors group"
                                >
                                    {link.name}
                                    {/* Animated underline */}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                                </a>
                            </ScrollAnimator>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <ScrollAnimator variant="fade" delay={400} duration={600} threshold={0} once={true}>
                            <Button
                                className={`rounded-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-primary/30 hover:shadow-xl ${scrolled ? 'px-6 py-4 text-sm' : 'px-8 py-5 text-base'
                                    }`}
                                onClick={() => {
                                    document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Apply Now
                            </Button>
                        </ScrollAnimator>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="p-2 -mr-2 rounded-md text-foreground/80 hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-7 w-7 animate-scale-in" aria-hidden="true" />
                            ) : (
                                <Menu className="h-7 w-7" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu – slides down */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-primary/10 shadow-xl z-50">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex items-center justify-between px-3 py-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all animate-slide-up"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                {link.name}
                                <span className="text-primary/30 text-xs">→</span>
                            </a>
                        ))}
                        <div className="pt-4 px-3">
                            <Button
                                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:scale-[1.02] transition-transform"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
