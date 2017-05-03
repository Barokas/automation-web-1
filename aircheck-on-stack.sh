#!/bin/sh

platform="browserstack"
feature="full-feature"

## Prepare the Automation Codebase ##
git clone https://github.com/airtasker/automation-web.git
cd automation-web

## Install Test Framework Packages
npm install

## Run "Critical" Airchecks
platform=$platform feature=$feature npm run $feature > aircheck.log 2>&1 

check_status=$?

if [ $check_status -eq "0" ]; then
	echo "Check Passed: $feature" && exit 0
else
	echo "Check Failed: $feature" && exit 1
fi
