import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Tooltip: Block = {
  slug: 'tooltip',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
    },
  ],
}
