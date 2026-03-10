// sanity/schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import job from './job'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job],
}