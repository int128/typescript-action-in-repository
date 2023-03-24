import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as github from '@actions/github'

type Inputs = {
  token: string
}

const run = async (inputs: Inputs) => {
  core.info(`Hello world from ref ${github.context.ref}`)

  const gitVersion = await exec.getExecOutput('git', ['version'])

  if (github.context.issue.number) {
    core.info(`Posting a comment`)
    const octokit = github.getOctokit(inputs.token)
    const { data: comment } = await octokit.rest.issues.createComment({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: github.context.issue.number,
      body: gitVersion.stdout,
    })
    core.info(`Posted as ${comment.html_url}`)
  }
}

const main = async () =>
  await run({
    token: core.getInput('token', { required: true }),
  })

main().catch((e) => core.setFailed(e instanceof Error ? e : String(e)))
