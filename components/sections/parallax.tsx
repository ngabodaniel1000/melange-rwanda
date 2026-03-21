'use client';

export function ParallaxSection() {
    return (
        <section
            id="areas-of-impact"
            className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
            style={{ clipPath: 'inset(0 0 0 0)' }}
        >
            {/* FIXED Background Container */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <img
                    src="/1.jpg"
                    alt="Areas of Impact Background"
                    className="object-cover w-full h-full"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            {/* Empty section - other sections will follow and cover this as they scroll */}
        </section>
    );
}
