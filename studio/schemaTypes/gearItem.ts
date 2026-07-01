import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gearItem',
  title: 'Gear',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'ประเภท',
      type: 'string',
      description: 'เช่น Camera, Lenses, Lighting, Support',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'ชื่ออุปกรณ์',
      type: 'string',
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
    select: {title: 'name', subtitle: 'category'},
  },
})
