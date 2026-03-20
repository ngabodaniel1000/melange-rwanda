export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
        { name: 'title', title: 'Main Headline', type: 'string' },
        { name: 'subtitle', title: 'Sub-headline (Description)', type: 'text' },
        { name: 'videoFile', title: 'Background Video Upload', type: 'file', options: { accept: 'video/*' } },
        { name: 'buttonText', title: 'Call to Action Button Text', type: 'string', initialValue: 'Apply Now' },
    ],
};
