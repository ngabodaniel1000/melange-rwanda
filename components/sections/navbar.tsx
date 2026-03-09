"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        // Check if the section exists
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If no element by ID, scroll to top if href is #home, or just rely on default anchor behavior
            if (href === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-md shadow-sm py-3 border-border border-b'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => scrollToSection(e, '#home')}
                            className={cn(
                                'text-2xl font-bold font-montserrat transition-colors',
                                isScrolled ? 'text-foreground' : 'text-slate-900'
                            )}
                        >
                            Mélange
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-slate-600 hover:text-slate-900'
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <Button
                            className={cn(
                                'rounded-full px-6 transition-all',
                                isScrolled ? 'bg-blue-500 hover:bg-blue-700' : 'text-primary-foreground bg-blue-500 hover:bg-blue-700 shadow-sm'
                            )}
                            onClick={() => {
                                document.getElementById('current-openings')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Apply Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className={cn(
                                'p-2 -mr-2 rounded-md transition-colors',
                                isScrolled ? 'text-foreground' : 'text-slate-900'
                            )}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block px-3 py-4 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 px-3">
                            <Button
                                className="w-full rounded-full"
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
            )}
        </header>
    );
}
