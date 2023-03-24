# typescript-action-in-repository [![example-action](https://github.com/int128/typescript-action-in-repository/actions/workflows/example-action.yaml/badge.svg)](https://github.com/int128/typescript-action-in-repository/actions/workflows/example-action.yaml)

This repository shows how to run an action written in TypeScript on the fly.
It would be useful for repository specific purpose.

It runs an action by `ts-node` in a workflow.
We can still use the actions packages such as `@actions/core` or `@actions/github`.
