export default {
    name: 'mission',
    title: 'Our Mission',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image1', title: 'Image 1', type: 'image', options: { hotspot: true } },
        { name: 'image2', title: 'Image 2', type: 'image', options: { hotspot: true } },
        { name: 'image3', title: 'Image 3', type: 'image', options: { hotspot: true } },
    ],
};
