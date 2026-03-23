import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'parallax',
    title: 'Parallax Section',
    type: 'document',
    fields: [
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
            initialValue: 'Parallax Background',
        }),
    ],
})
