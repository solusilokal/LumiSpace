@echo off
cd /d "%~dp0"
echo ====================================================
echo  Menjalankan LumiSpace Decor Preview Server...
echo ====================================================
call npm.cmd run dev
pause
