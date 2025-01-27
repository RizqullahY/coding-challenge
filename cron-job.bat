@echo off

:: Get time now
for /f "tokens=1-2 delims=:" %%a in ('time /T') do set time=%%a:%%b

:: Show time on screen
echo time now : %time%

:: Add to message commit
git add .
git commit -m "Automatic commit: $(date /t) %time%"
git push origin master

:: Close the cmd
echo Done .
pause
exit