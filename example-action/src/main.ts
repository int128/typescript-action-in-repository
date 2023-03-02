import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as github from '@actions/github'

const main = async () => {
  core.info(`Hello world from ref ${github.context.ref}`)

  await exec.exec('git', ['version'])
}

main().catch((e) => core.setFailed(e instanceof Error ? e : String(e)))
