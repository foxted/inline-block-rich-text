import { Tooltip } from '@/blocks/Tooltip'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: [
          BlocksFeature({
            inlineBlocks: [Tooltip],
          }),
        ],
      }),
    },
  ],
}
