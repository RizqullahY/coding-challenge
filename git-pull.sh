#!/bin/bash

if [ -n $1 ]; then
  git add .
  git stash
  git pull origin master
  git stash pop
else
  git pull origin master
fi

exit 0