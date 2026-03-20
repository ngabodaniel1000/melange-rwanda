export default {
    name: 'mission',
    title: 'Our Mission',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Background Image', type: 'image', options: { hotspot: true } },
    ],
};
