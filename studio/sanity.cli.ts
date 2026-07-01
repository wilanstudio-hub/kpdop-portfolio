import {defineCliConfig} from 'sanity/cli'

// ใส่ Project ID เดียวกับใน sanity.config.ts
export default defineCliConfig({
  api: {
    projectId: 'bd946qlz',
    dataset: 'production',
  },
  deployment: {
    appId: 'g55tschqoxpk4b5odi1t7wny',
  },
})
