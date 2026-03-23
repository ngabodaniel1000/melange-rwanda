'use client';

import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url';

interface ParallaxSectionProps {
    data?: {
        backgroundImage?: SanityImageSource;
        altText?: string;
    }
}


export function ParallaxSection({ data }: ParallaxSectionProps) {
    const imageUrl = data?.backgroundImage ? urlFor(data.backgroundImage).url() : "/1.jpg";

    return (
        <section
            id="areas-of-impact"
            className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
            style={{ clipPath: 'inset(0 0 0 0)' }}
        >
            {/* FIXED Background Container */}
            <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                <img
                    src={imageUrl}
                    alt={data?.altText || "Areas of Impact Background"}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Empty section - other sections will follow and cover this as they scroll */}
        </section>
    );
}

