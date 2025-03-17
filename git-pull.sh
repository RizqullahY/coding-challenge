#!/bin/bash

if [ "$1" == "-a" ]; then
  git add .
  git stash
  git pull origin master
  git stash pop
else
  git pull origin master
fi

exit 0