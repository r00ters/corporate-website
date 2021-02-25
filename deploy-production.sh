#! /usr/bin/env bash
BRANCH_CURRENT=$(git rev-parse --abbrev-ref HEAD)
BRANCH_STAGING='staging'
BRANCH_PRODUCTION='main'

echo Merge ${BRANCH_STAGING} into ${BRANCH_PRODUCTION}
read -p "Press enter to continue"

git checkout ${BRANCH_PRODUCTION}
git pull
git merge ${BRANCH_STAGING}
git push
git checkout ${BRANCH_CURRENT}
echo Returning on branch ${BRANCH_CURRENT}:
git branch