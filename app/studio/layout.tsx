import { Metadata, Viewport } from 'next'
import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio'

export const metadata: Metadata = studioMetadata as Metadata
export const viewport: Viewport = studioViewport as Viewport

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
