import { type SchemaTypeDefinition } from 'sanity'
import job from './job'
import mission from './mission'
import about from './about'
import values from './values'
import story from './story'
import process from './process'
import hero from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, mission, about, values, story, process, hero],
}