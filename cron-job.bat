@echo off

for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
  set year=%%c
  set month=%%a
  set day=%%b
)

git add .
git commit -m "Automatic commit: %year%-%month%-%day%"
git push origin master

pause