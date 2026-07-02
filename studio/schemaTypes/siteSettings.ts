import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero (หน้าแรก)', default: true},
    {name: 'contact', title: 'Contact'},
    {name: 'footer', title: 'Footer'},
    {name: 'appearance', title: 'Appearance'},
  ],
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo Text (มุมซ้ายบน)',
      type: 'string',
      group: 'hero',
      initialValue: 'K P D O P',
    }),
    defineField({
      name: 'heroFirstName',
      title: 'ชื่อ (บรรทัดแรกของ Hero)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroLastName',
      title: 'นามสกุล (บรรทัดสองของ Hero)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'ข้อความเล็กเหนือชื่อ',
      type: 'string',
      group: 'hero',
      description: 'เช่น CINEMATOGRAPHER / BANGKOK',
    }),
    defineField({
      name: 'heroRole',
      title: 'ตำแหน่ง (ใต้ชื่อ)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroVideoId',
      title: 'Vimeo Video ID ของวิดีโอพื้นหลัง Hero',
      type: 'string',
      group: 'hero',
      description: 'ตัวเลขจากลิงก์ เช่น vimeo.com/725146289 → ใส่ 725146289',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'contactTitle',
      title: 'หัวข้อใหญ่ในส่วน Contact',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'อีเมล',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phone',
      title: 'เบอร์โทร (เว้นว่างได้ถ้าไม่อยากแสดง)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'vimeoUrl',
      title: 'ลิงก์โปรไฟล์ Vimeo',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'ลิงก์ Instagram (เว้นว่างได้)',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'copyright',
      title: 'ข้อความ Copyright ท้ายเว็บ',
      type: 'string',
      group: 'footer',
    }),
    defineField({
      name: 'colorMode',
      title: 'Color Mode',
      type: 'string',
      group: 'appearance',
      initialValue: 'dark',
      options: {
        list: [
          {title: 'Dark', value: 'dark'},
          {title: 'Light', value: 'light'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      group: 'appearance',
      initialValue: 'white',
      description: 'สีที่ใช้กับ hover underline และ interactive elements',
      options: {
        list: [
          {title: 'White / Black (default)', value: 'white'},
          {title: 'Gold', value: 'gold'},
          {title: 'Cyan', value: 'cyan'},
          {title: 'Rose', value: 'rose'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'videoGridLayout',
      title: 'Video Grid Layout',
      type: 'string',
      group: 'appearance',
      initialValue: 'grid',
      options: {
        list: [
          {title: 'Auto Grid (responsive)', value: 'grid'},
          {title: '2 Columns', value: 'large'},
          {title: 'Single Column', value: 'single'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
