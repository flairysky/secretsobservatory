# PowerShell script to generate feed.xml from posts.json
# Run this whenever you add a new post to keep the RSS feed updated
# Usage: .\generate-feed.ps1

Write-Host "🔄 Generating feed.xml from posts.json..." -ForegroundColor Cyan

# Read posts.json
$postsJson = Get-Content "posts.json" -Raw | ConvertFrom-Json
$site = $postsJson.site
$posts = $postsJson.posts

# Get most recent date
$mostRecentDate = if ($posts.Count -gt 0) { $posts[0].date } else { Get-Date -Format "yyyy-MM-dd" }

# Function to escape XML special characters
function Escape-Xml {
    param([string]$text)
    return $text -replace '&', '&amp;' -replace '<', '&lt;' -replace '>', '&gt;' -replace "'", '&apos;' -replace '"', '&quot;'
}

# Start building XML
$xml = @"
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>$($site.title)</title>
  <subtitle>$(Escape-Xml $site.tagline)</subtitle>
  <link href="$($site.baseUrl)/feed.xml" rel="self"/>
  <link href="$($site.baseUrl)/"/>
  <id>$($site.baseUrl)/</id>
  <author>
    <name>$($site.author)</name>
  </author>
  <updated>${mostRecentDate}T00:00:00Z</updated>

"@

# Add each post as an entry
foreach ($post in $posts) {
    $xml += @"

  <entry>
    <title>$(Escape-Xml $post.title)</title>
    <link href="$($site.baseUrl)/post.html?slug=$($post.slug)"/>
    <id>$($post.slug)</id>
    <published>$($post.date)T00:00:00Z</published>
    <updated>$($post.date)T00:00:00Z</updated>
    <summary>$(Escape-Xml $post.excerpt)</summary>
"@
    
    # Add categories
    foreach ($category in $post.categories) {
        $xml += "`n    <category term=`"$(Escape-Xml $category)`"/>"
    }
    
    $xml += "`n  </entry>`n"
}

# Close feed
$xml += "`n</feed>"

# Write to file
$xml | Out-File -FilePath "feed.xml" -Encoding UTF8 -NoNewline

Write-Host "✅ feed.xml generated successfully!" -ForegroundColor Green
Write-Host "📝 $($posts.Count) posts included" -ForegroundColor Yellow
Write-Host "🔗 Feed URL: $($site.baseUrl)/feed.xml" -ForegroundColor Cyan
