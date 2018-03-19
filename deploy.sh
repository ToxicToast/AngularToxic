#!/bin/bash
function getLastCommit {
  gitLastCommit=$(git show --summary --format="%H")
  echo "Last Commit: $gitLastCommit"
}

function getChangedFiles {
  filesChanged=$(git diff-tree -r $gitLastCommit --no-commit-id --name-only)
  if [ ${#filesChanged[@]} -eq 0 ]; then
    echo "No files to update"
  else
  for f in $filesChanged
	do
		if [ "$f" != ".travis.yml" ] && [ "$f" != "package.json" ]
		then
	 		echo "Uploading $f"
	 		curl --ftp-create-dirs -T $f -u $FTP_USER:$FTP_PASS "ftp://ftp.strato.de/$f"
		fi
	done
fi
}

function getCredentials {
  echo "FTP USER: $FTP_USER"
  echo "ON: ftp.strato.de"
}

getLastCommit
getChangedFiles
getCredentials

read
