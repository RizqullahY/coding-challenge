@echo off

git add .
git commit -m "Automatic commit: $(date /t)"
git push origin main

pause