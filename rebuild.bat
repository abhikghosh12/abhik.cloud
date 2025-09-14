@echo off
echo Starting professional website rebuild...
echo.

echo 1. Cleaning previous build...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo 2. Installing dependencies...
npm install

echo 3. Building professional website...
npm run build

echo 4. Build complete!
echo.
echo Your professional website has been rebuilt successfully.
echo The static files are in the 'out' directory.
echo.
pause