import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'ชื่อผลงาน',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'vimeoId',
      title: 'Vimeo Video ID',
      type: 'string',
      description: 'ตัวเลขจากลิงก์ เช่น vimeo.com/1066412829 → ใส่ 1066412829',
      validation: (rule) => rule.required().regex(/^\d+$/, {name: 'ตัวเลขเท่านั้น'}),
    }),
    defineField({
      name: 'category',
      title: 'หมวด',
      type: 'string',
      options: {
        list: [
          {title: 'Narrative', value: 'narrative'},
          {title: 'Commercial', value: 'commercial'},
          {title: 'Internet Content', value: 'internet'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'ลำดับการแสดง (เลขน้อยขึ้นก่อน)',
      type: 'number',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'ลำดับการแสดง',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
  },
})
