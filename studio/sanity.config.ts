import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// ============================================================
// ใส่ Project ID ของคุณตรงนี้ (ดูได้จาก sanity.io/manage)
// ============================================================
const projectId = 'bd946qlz'
const dataset = 'production'
// ============================================================

const singletonTypes = new Set(['siteSettings', 'bio', 'homePage'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'default',
  title: 'KPDOP Portfolio',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id('root')
          .title('เนื้อหาเว็บไซต์')
          .items([
            S.listItem()
              .title('Site Settings (Hero / Contact / Footer)')
              .id('siteSettings')
              .child(
                S.document().schemaType('siteSettings').documentId('siteSettings'),
              ),
            S.listItem()
              .title('Bio')
              .id('bio')
              .child(S.document().schemaType('bio').documentId('bio')),
            S.listItem()
              .title('Home Page (Section Order)')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.divider(),
            S.documentTypeListItem('video').title('Videos (ทุกหมวด)'),
            S.documentTypeListItem('gearItem').title('Gear'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
