export default {
    name: 'story',
    title: 'Founder Story Section',
    type: 'document',
    fields: [
        { name: 'title', title: 'Main Title', type: 'string' },
        { name: 'name', title: 'Founders Name (Bottom of Image)', type: 'string' },
        { name: 'description1', title: 'Story Part 1 (Top Paragraph)', type: 'text' },
        { name: 'description2', title: 'Story Part 2 (Bottom Paragraph)', type: 'text' },
        { name: 'calloutTitle', title: 'Highlighted Callout Label', type: 'string', initialValue: 'Sustainable Scaling' },
        { name: 'calloutText', title: 'Main Callout Quote/Text', type: 'text' },
        { name: 'image', title: 'Founder Image', type: 'image', options: { hotspot: true } },
    ],
};
