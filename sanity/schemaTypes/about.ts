export default {
    name: 'about',
    title: 'What is Mélange? (About Section)',
    type: 'document',
    fields: [
        { name: 'title', title: 'Section Title', type: 'string' },
        { name: 'image', title: 'Section Visual Anchor', type: 'image', options: { hotspot: true } },
        {
            name: 'card1Title',
            title: 'First Card Title',
            type: 'string',
            description: 'Use the word "Mélange" to apply a custom gradient style automatically.'
        },
        { name: 'card1Description', title: 'First Card Description', type: 'text' },
        { name: 'card2Title', title: 'Second Card Title', type: 'string' },
        { name: 'card2Description', title: 'Second Card Description', type: 'text' },
    ],
};
