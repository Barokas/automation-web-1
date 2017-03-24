#!/bin/sh

# usage: sh grepper.sh log-name expected-pass-count another-search-term
# example: sh grepper.sh set-1 113 "Global Value"

echo "Total Executed: "; grep "passing" proof/log-$1.log | grep -v "undefined" | wc -l
echo "Total Passed: "; grep "$2 passing" proof/log-$1.log | grep -v "undefined" | wc -l
echo "=: "; grep "$3" proof/log-$1.log 
# echo "Total Retreats: "; grep "Retreat" proof/log-$1.log | wc -l
# echo "Total Never Minds: "; grep "never mind" proof/log-$1.log | wc -l
