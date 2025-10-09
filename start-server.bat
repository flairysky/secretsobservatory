@echo off
echo Starting Secrets Observatory Blog Server...
echo.
echo This will start a local web server so you can test the blog properly.
echo The blog will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.

REM Try Python first (most common)
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python to serve the blog...
    echo.
    python -m http.server 8000
    goto :end
)

REM Try Python3 if python command not found
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python3 to serve the blog...
    echo.
    python3 -m http.server 8000
    goto :end
)

REM Try Node.js with http-server if available
where node >nul 2>&1
if %errorlevel% == 0 (
    echo Checking for http-server...
    npx http-server --version >nul 2>&1
    if %errorlevel% == 0 (
        echo Using Node.js http-server...
        echo.
        npx http-server -p 8000
        goto :end
    )
)

REM If nothing works, show instructions
echo ERROR: Could not find Python or Node.js to start a local server.
echo.
echo Please install one of the following:
echo.
echo 1. Python (recommended):
echo    - Download from: https://www.python.org/downloads/
echo    - Make sure to check "Add Python to PATH" during installation
echo.
echo 2. Node.js:
echo    - Download from: https://nodejs.org/
echo.
echo After installation, run this file again.
echo.
echo Alternatively, you can:
echo - Use any other local web server
echo - Deploy to GitHub Pages or Netlify
echo - Use VS Code with Live Server extension
echo.
pause

:end