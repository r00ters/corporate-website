# Rooters s.r.l.s. corporate website

https://www.rooters.it

## Local development

Run `gatsby develop` in the terminal to start the dev site on http://localhost:8000.

## CI/CD setup

### Workflow triggers

| Branch | Trigger | Action |
| - | - | - |
| staging | push | Deploy to staging |
| main | push | Deploy to staging |


### Actions secrets

Set these [secrets](/settings/secrets/actions) in order to enable CI/CD workflow on [GitHub Action](/actions)

| Name | Description |
| - | - |
| `AWS_ACCESS_KEY_ID` | Amazon AWS IAM Key |
| `AWS_SECRET_ACCESS_KEY` | Amazon AWS IAM Secret |
| `GH_PAT` | GitHub [Personal access tokens](https://github.com/settings/tokens) |
| `SLACK_WEBHOOK_URL` | Slack [Incoming Webhook](https://api.slack.com/apps) |

## Credits & Open Source Licenses

- Frontend Framework: [Gatsby](https://github.com/gatsbyjs/gatsby) - [MIT License](https://github.com/gatsbyjs/gatsby/blob/master/LICENSE)
- Icons: [FontAwesome](https://github.com/FortAwesome/Font-Awesome) - [Creative Commons Attribution 4.0](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt)
- HTML5 Theme: [Gatsby Paradigm Shift](https://github.com/codebushi/gatsby-starter-paradigm-shift) Original designed by [HTML5 UP](https://html5up.net/) - [Creative Commons Attribution 3.0](https://html5up.net/license)
- Main Picture: [Jaanus Jagomägi](https://unsplash.com/@jaanus) - [Unsplash License](https://unsplash.com/license)
