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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur shadow-sm py-4 border-b border-primary/10"
        >
         
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => scrollToSection(e, '#home')}
                            className="text-2xl lg:text-3xl font-bold font-montserrat text-primary tracking-wide"
                        >
                            Mélange
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <Button
                            className="rounded-full px-8 py-5 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all hover:scale-105"
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
                            className="p-2 -mr-2 rounded-md text-black hover:text-black/80 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="h-7 w-7" aria-hidden="true" />
                            ) : (
                                <Menu className="h-7 w-7" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#d9dadd]/95 backdrop-blur-md border-b border-black/10 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block px-3 py-4 text-base font-medium text-black/80 hover:text-black hover:bg-black/5 rounded-md transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 px-3">
                            <Button
                                className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
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
