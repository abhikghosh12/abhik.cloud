@echo off
cd /d "C:\git\abhik.cloud"
echo Running TypeScript check...
npx tsc --noEmit
echo TypeScript check completed with exit code: %ERRORLEVEL%

echo Running Vite build...
npx vite build
echo Vite build completed with exit code: %ERRORLEVEL%
