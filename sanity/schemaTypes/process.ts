export default {
    name: 'process',
    title: 'How It Works (Process Image Only)',
    type: 'document',
    fields: [
        { name: 'image', title: 'Process Illustration/Anchor', type: 'image', options: { hotspot: true } },
        { name: 'calloutTitle', title: 'Visual Anchor Title (Overlay)', type: 'string' },
        { name: 'calloutText', title: 'Visual Anchor Text (Overlay)', type: 'string' },
    ],
};
