import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'ชื่อที่แสดงในส่วน Bio',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'ตำแหน่ง',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'ย่อหน้าแนะนำตัว',
      type: 'array',
      of: [{type: 'text', rows: 4}],
      description: 'เพิ่ม/ลบ/ลากสลับลำดับย่อหน้าได้',
    }),
    defineField({
      name: 'quote',
      title: 'Quote (แสดงตัวเอียงท้าย Bio)',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Bio'}),
  },
})
