import {defineField, defineType} from 'sanity'

export const sectionBio = defineType({
  name: 'section_bio',
  title: 'Bio Section',
  type: 'object',
  fields: [],
  preview: {prepare: () => ({title: 'Bio'})},
})

export const sectionVideo = defineType({
  name: 'section_video',
  title: 'Video Section',
  type: 'object',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Narrative', value: 'narrative'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Internet Content', value: 'internet'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {subtitle: 'category'},
    prepare: ({subtitle}) => ({title: 'Videos', subtitle}),
  },
})

export const sectionGear = defineType({
  name: 'section_gear',
  title: 'Gear Section',
  type: 'object',
  fields: [],
  preview: {prepare: () => ({title: 'Gear'})},
})

export const sectionContact = defineType({
  name: 'section_contact',
  title: 'Contact Section',
  type: 'object',
  fields: [],
  preview: {prepare: () => ({title: 'Contact'})},
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      title: 'Page Sections — drag to reorder',
      type: 'array',
      of: [
        {type: 'section_bio'},
        {type: 'section_video'},
        {type: 'section_gear'},
        {type: 'section_contact'},
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {prepare: () => ({title: 'Home Page'})},
})
