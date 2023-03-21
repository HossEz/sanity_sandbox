import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '2vxjr12v',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
  })