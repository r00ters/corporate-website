#! /usr/bin/env bash
BRANCH_CURRENT=$(git rev-parse --abbrev-ref HEAD)
BRANCH_STAGING='staging'
BRANCH_PRODUCTION='main'

echo Merge ${BRANCH_CURRENT} into ${BRANCH_STAGING}
read -p "Press enter to continue"

git checkout ${BRANCH_STAGING}
git pull
git merge ${BRANCH_CURRENT}
git push
git checkout ${BRANCH_CURRENT}
echo Returning on branch ${BRANCH_CURRENT}:
git branch