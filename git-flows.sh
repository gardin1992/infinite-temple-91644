#!/usr/bin/env bash

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree add -f -- README.md

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree commit -q -F /var/folders/1k/dzz0q0wn175cj9r67mtdp9l00000gn/T/SourceTreeTemp.ALRymv

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree push -v --tags origin refs/heads/develop:refs/heads/develop

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree stash save teste

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree fetch origin


git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree pull origin develop
From https://github.com/gardin1992/infinite-temple-91644
 * branch            develop    -> FETCH_HEAD
Already up-to-date.


git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree submodule update --init

git hotfix start move
Branches 'master' and 'origin/master' have diverged.
And local branch 'master' is ahead of 'origin/master'.
Switched to a new branch 'hotfix/move'

Summary of actions:
- A new branch 'hotfix/move' was created, based on 'master'
- You are now on branch 'hotfix/move'

Follow-up actions:
- Bump the version number now!
- Start committing your hot fixes
- When done, run:

     git flow hotfix finish 'move'

git hotfix finish -n move

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree fetch origin


git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree pull origin develop
From https://github.com/gardin1992/infinite-temple-91644
 * branch            develop    -> FETCH_HEAD
Already up-to-date.


git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree submodule update --init