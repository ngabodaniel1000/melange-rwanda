import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'parallax',
    title: 'Parallax Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title (Internal use)',
            type: 'string',
            description: 'Used for identification in the Studio'
        }),
        defineField({
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            initialValue: 'Areas of Impact Background',
        }),
        defineField({
            name: 'overlayOpacity',
            title: 'Overlay Opacity (0-100)',
            type: 'number',
            initialValue: 10,
            validation: (Rule) => Rule.min(0).max(100),
        }),
    ],
})
