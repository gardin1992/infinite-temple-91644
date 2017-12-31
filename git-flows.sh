#!/usr/bin/env bash

git -c diff.mnemonicprefix=false -c core.quotepath=false -c credential.helper=sourcetree add -f -- README.md

