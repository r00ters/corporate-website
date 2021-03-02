# Rooters s.r.l.s. corporate website

https://www.rooters.it


## Workflow triggers

| Branch | Trigger | Action |
| - | - | - |
| staging | push | Deploy to staging |
| main | push | Deploy to staging |


## Actions secrets

Set these [secrets](/settings/secrets/actions) in order to enable CI/CD workflow on [GitHub Action](/actions)

| Name | Description |
| - | - |
| `AWS_ACCESS_KEY_ID` | Amazon AWS IAM Key |
| `AWS_SECRET_ACCESS_KEY` | Amazon AWS IAM Secret |
| `GH_PAT` | GitHub [Personal access tokens](https://github.com/settings/tokens) |
| `SLACK_WEBHOOK_URL` | Slack [Incoming Webhook](https://api.slack.com/apps) |
