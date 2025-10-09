# Secrets Observatory Blog - Local Server Starter
# This script starts a local web server for testing the blog

Write-Host "🚀 Starting Secrets Observatory Blog Server..." -ForegroundColor Green
Write-Host ""
Write-Host "This will start a local web server so you can test the blog properly."
Write-Host "The blog will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server when you're done." -ForegroundColor Yellow
Write-Host ""

# Try Python first
try {
    $pythonVersion = python --version 2>$null
    if ($pythonVersion) {
        Write-Host "✓ Found Python: $pythonVersion" -ForegroundColor Green
        Write-Host "Starting Python HTTP server..." -ForegroundColor Blue
        Write-Host ""
        python -m http.server 8000
        exit
    }
} catch {
    # Python not found, continue
}

# Try Python3
try {
    $python3Version = python3 --version 2>$null
    if ($python3Version) {
        Write-Host "✓ Found Python3: $python3Version" -ForegroundColor Green
        Write-Host "Starting Python3 HTTP server..." -ForegroundColor Blue
        Write-Host ""
        python3 -m http.server 8000
        exit
    }
} catch {
    # Python3 not found, continue
}

# Try Node.js
try {
    $nodeVersion = node --version 2>$null
    if ($nodeVersion) {
        Write-Host "✓ Found Node.js: $nodeVersion" -ForegroundColor Green
        Write-Host "Checking for http-server..." -ForegroundColor Blue
        
        # Try to use npx http-server
        try {
            npx http-server --version 2>$null | Out-Null
            Write-Host "Starting Node.js http-server..." -ForegroundColor Blue
            Write-Host ""
            npx http-server -p 8000
            exit
        } catch {
            Write-Host "http-server not available, trying serve..." -ForegroundColor Yellow
            try {
                npx serve --version 2>$null | Out-Null
                Write-Host "Starting serve..." -ForegroundColor Blue
                Write-Host ""
                npx serve -l 8000
                exit
            } catch {
                Write-Host "serve not available" -ForegroundColor Yellow
            }
        }
    }
} catch {
    # Node.js not found, continue
}

# If we get here, nothing worked
Write-Host "❌ Could not find Python or Node.js to start a local server." -ForegroundColor Red
Write-Host ""
Write-Host "📥 Please install one of the following:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. 🐍 Python (recommended):" -ForegroundColor Cyan
Write-Host "   - Download from: https://www.python.org/downloads/"
Write-Host "   - Make sure to check 'Add Python to PATH' during installation"
Write-Host ""
Write-Host "2. 📦 Node.js:" -ForegroundColor Cyan
Write-Host "   - Download from: https://nodejs.org/"
Write-Host ""
Write-Host "🔄 After installation, run this script again." -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Alternatively, you can:" -ForegroundColor Blue
Write-Host "   - Use any other local web server"
Write-Host "   - Deploy to GitHub Pages or Netlify"
Write-Host "   - Use VS Code with Live Server extension"
Write-Host ""

Read-Host "Press Enter to exit"