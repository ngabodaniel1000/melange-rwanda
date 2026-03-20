export default {
    name: 'values',
    title: 'Our Values Grid',
    type: 'document',
    fields: [
        { name: 'title', title: 'Main Title', type: 'string' },
        {
            name: 'cards',
            title: 'Value Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon Name',
                            type: 'string',
                            description: 'Use a Lucide Icon name (e.g., Calendar, TrendingUp, Handshake, Gem, BookOpen, ShieldCheck, Unplug, Leaf)'
                        },
                        { name: 'title', title: 'Card Title', type: 'string' },
                        { name: 'description', title: 'Card Description', type: 'text' },
                    ]
                }
            ]
        }
    ],
};
