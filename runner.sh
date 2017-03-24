#!/bin/sh

# usage: sh runner.sh (local|browserstack) loopCount feature logName
# example: sh runner.sh browserstack 100 full-feature set-1

mkdir -p proof

for i in `seq 1 $2`;
       do
		   echo "Start Test: #" + $i >> proof/log-$4.log
		   platform=$1 npm run $3 >> proof/log-$4.log
		   echo "End Test: #" + $i >> proof/log-$4.log
       done  
