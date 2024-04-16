import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {StructureToolOptions, structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {presentationTool, DocumentLocationResolver} from 'sanity/presentation'
import {Observable, map} from 'rxjs'
import _ from 'lodash'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

const locate: DocumentLocationResolver = (params, context) => {
  const {documentStore} = context

  if (params.type === 'post') {
    // Listen to the query and fetch the draft and published document
    const doc$ = documentStore.listenQuery(`*[_id == $id][0]{slug,title}`, params, {
      perspective: 'previewDrafts',
    }) as Observable<{
      slug: {current: string | null} | null
      title: string | null
    } | null>

    return doc$.pipe(
      map((doc) => {
        if (!doc || !doc.slug?.current) return null

        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/post/${doc.slug.current}`,
            },
            {
              title: 'Posts',
              href: `/`,
            },
          ],
        }
      }),
    )
  }

  return null
}

const structureOptions: StructureToolOptions = {
  structure: (S) =>
    S.list()
      .title('Root')
      .items([
        S.listItem()
          .title('Bio')
          .child(S.document().schemaType('bio').documentId('bio').title('Bio')),
        ...S.documentTypeListItems().filter((listItem) => !['bio'].includes(listItem.getId()!)),
      ]),
}

export default defineConfig({
  name: 'jpalindrome',
  title: 'Jay Reinier',
  projectId,
  dataset,
  plugins: [
    structureTool(structureOptions),
    presentationTool({
      previewUrl: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
      locate,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
