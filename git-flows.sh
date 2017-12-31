#!/usr/bin/env bash

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree add -f -- README.md

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree commit -q -F /var/folders/1k/dzz0q0wn175cj9r67mtdp9l00000gn/T/SourceTreeTemp.ALRymv

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree push -v --tags origin refs/heads/develop:refs/heads/develop

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree stash save teste 