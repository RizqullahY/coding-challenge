#!/bin/bash

date_now=$(date +"%Y-%m-%d %H:%M")

git add .
git commit -m "Automatic commit: $date_now"
git push origin master

exit 0
