#!/bin/bash
gitLastCommit=$(git show --summary)
if [[ $gitLastCommit ]]
then
	lastCommit=$(git log --format="%H" -n 1)
else
	arr=($gitLastCommit)
	lastCommit=${arr[4]}
fi
echo $lastCommit
