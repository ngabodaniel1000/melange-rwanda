/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = "io87fdb4"
const dataset = "production"

export default defineCliConfig({ api: { projectId, dataset },deployment: {
    appId: 'hrjihxyqqy9z2s220btda9hc'
  }})
