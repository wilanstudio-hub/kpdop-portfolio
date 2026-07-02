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
      description: 'ตัวเลขจากลิงก์ เช่น vimeo.com/1066412829 → ใส่ 1066412829 (ใส่อย่างน้อยหนึ่งแหล่ง: Vimeo / YouTube / ไฟล์วิดีโอ)',
      validation: (rule) =>
        rule.custom((value, context) => {
          const doc = context.document as any
          if (!value && !doc?.youtubeId && !doc?.videoFile?.asset) {
            return 'ต้องมีอย่างน้อยหนึ่งแหล่งวิดีโอ: Vimeo ID, YouTube ID/Link หรือ Upload Video File'
          }
          if (value && !/^\d+$/.test(value)) {
            return 'Vimeo ID ต้องเป็นตัวเลขเท่านั้น'
          }
          return true
        }),
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
      name: 'youtubeId',
      title: 'YouTube Video ID / Link',
      type: 'string',
      description: 'ใส่ Video ID หรือ URL เช่น dQw4w9WgXcQ หรือ https://youtu.be/dQw4w9WgXcQ',
    }),
    defineField({
      name: 'videoFile',
      title: 'Upload Video File',
      type: 'file',
      options: {accept: 'video/*'},
    }),
    defineField({
      name: 'isHighlight',
      title: 'เป็นวิดีโอไฮไลท์ของหมวดหมู่',
      type: 'boolean',
      description: 'เลือกวิดีโอนี้เป็น Featured Video ของหมวด (มีได้หนึ่งวิดีโอต่อหมวด)',
      initialValue: false,
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
