'use strict'

const _ = require('lodash')

const env = process.env

module.exports = {
  repoSlug: `${env.CIRCLE_PROJECT_USERNAME}/${env.CIRCLE_PROJECT_REPONAME}`,
  branchName: env.CIRCLE_BRANCH,
  firstPush: true,
  correctBuild: true,
  uploadBuild: env.CIRCLE_NODE_INDEX === `${env.BUILD_LEADER_ID || 0}`
}
