import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as github from '@actions/github'

const main = async () => {
  core.info(`Hello world from ref ${github.context.ref}`)

  const gitVersion = await exec.getExecOutput('git', ['version'])

  core.info(`Posting a comment`)
  const octokit = github.getOctokit(process.env.GITHUB_TOKEN ?? '')
  const { data: comment } = await octokit.rest.issues.createComment({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    issue_number: github.context.issue.number,
    body: gitVersion.stdout,
  })
  core.info(`Posted as ${comment.html_url}`)
}

main().catch((e) => core.setFailed(e instanceof Error ? e : String(e)))
