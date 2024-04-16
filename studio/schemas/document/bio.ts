import {defineType} from 'sanity'

const bio = defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    {
      name: 'bio',
      type: 'description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'headshot',
      type: 'image',
      validation: (rule) => rule.required(),
    },
    {
      name: 'cv',
      type: 'file',
      options: {accept: 'application/pdf'},
    },
    {
      name: 'resume',
      type: 'file',
      options: {accept: 'application/pdf'},
    },
  ],
  preview: {
    select: {
      title: 'Bio',
    },
  },
})

export default bio
