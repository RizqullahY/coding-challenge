@echo off

:: Get time now
for /f "tokens=1-2 delims=:" %%a in ('time /T') do set time=%%a:%%b

:: Get date
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
  set year=%%c
  set month=%%a
  set day=%%b
)

:: Add to message commit
git add .
git commit -m "Automatic commit: %year%-%month%-%day% %time%"
git push origin master

:: Close the cmd
exit