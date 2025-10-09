#!/bin/bash

# Secrets Observatory Blog - Deployment Script
# This script helps you prepare the blog for deployment

echo "🚀 Preparing Secrets Observatory Blog for deployment..."

# Function to update domain in files
update_domain() {
    local domain=$1
    echo "📝 Updating domain to: $domain"
    
    # Update sitemap.xml
    sed -i.bak "s|https://yoursite.com|https://$domain|g" sitemap.xml
    
    # Update robots.txt
    sed -i.bak "s|https://yoursite.com|https://$domain|g" robots.txt
    
    # Update feed.xml
    sed -i.bak "s|href=\"\"|href=\"https://$domain\"|g" feed.xml
    sed -i.bak "s|<id></id>|<id>https://$domain</id>|g" feed.xml
    
    # Update posts.json
    sed -i.bak "s|\"baseUrl\": \"\"|\"baseUrl\": \"https://$domain\"|g" posts.json
    
    echo "✅ Domain updated in all files"
    echo "🗑️  Cleaning up backup files..."
    rm -f *.bak
}

# Function to validate required files
validate_files() {
    echo "🔍 Validating required files..."
    
    local required_files=(
        "index.html"
        "post.html" 
        "about.html"
        "archive.html"
        "feedback.html"
        "posts.json"
        "site.js"
        "assets/css/styles.css"
        "feed.xml"
        "sitemap.xml"
        "robots.txt"
    )
    
    local missing_files=()
    
    for file in "${required_files[@]}"; do
        if [[ ! -f "$file" ]]; then
            missing_files+=("$file")
        fi
    done
    
    if [[ ${#missing_files[@]} -eq 0 ]]; then
        echo "✅ All required files are present"
        return 0
    else
        echo "❌ Missing required files:"
        printf '%s\n' "${missing_files[@]}"
        return 1
    fi
}

# Function to check posts
validate_posts() {
    echo "📚 Validating posts..."
    
    # Check if posts directory exists
    if [[ ! -d "posts" ]]; then
        echo "❌ Posts directory not found"
        return 1
    fi
    
    # Count markdown files
    local md_count=$(find posts -name "*.md" | wc -l)
    echo "📄 Found $md_count markdown files in posts directory"
    
    # Validate posts.json structure
    if command -v jq >/dev/null 2>&1; then
        if jq empty posts.json 2>/dev/null; then
            echo "✅ posts.json is valid JSON"
            local json_posts=$(jq '.posts | length' posts.json)
            echo "📊 posts.json contains $json_posts post entries"
        else
            echo "❌ posts.json contains invalid JSON"
            return 1
        fi
    else
        echo "⚠️  jq not available, skipping JSON validation"
    fi
    
    return 0
}

# Function to optimize for production
optimize() {
    echo "⚡ Optimizing for production..."
    
    # Remove any .DS_Store files (macOS)
    find . -name ".DS_Store" -delete 2>/dev/null
    
    # Remove backup files
    find . -name "*.bak" -delete 2>/dev/null
    
    # Check for large images
    if command -v find >/dev/null 2>&1; then
        local large_images=$(find assets/covers -name "*.jpg" -o -name "*.png" -o -name "*.gif" | xargs ls -l 2>/dev/null | awk '$5 > 1048576 {print $9, $5}')
        if [[ -n "$large_images" ]]; then
            echo "⚠️  Large images found (>1MB):"
            echo "$large_images"
            echo "💡 Consider optimizing these images for better performance"
        fi
    fi
    
    echo "✅ Optimization complete"
}

# Function to create GitHub Pages CNAME file
create_cname() {
    local domain=$1
    echo "$domain" > CNAME
    echo "📄 Created CNAME file for GitHub Pages"
}

# Main script logic
main() {
    echo "=================================================="
    echo "   Secrets Observatory Blog - Deployment Setup"
    echo "=================================================="
    echo
    
    # Validate files first
    if ! validate_files; then
        echo "❌ File validation failed. Please ensure all required files are present."
        exit 1
    fi
    
    # Validate posts
    if ! validate_posts; then
        echo "❌ Post validation failed. Please check your posts directory and posts.json."
        exit 1
    fi
    
    # Ask for domain
    echo
    read -p "🌐 Enter your domain (e.g., myblog.com) or press Enter to skip: " domain
    
    if [[ -n "$domain" ]]; then
        # Remove protocol if provided
        domain=$(echo "$domain" | sed 's|^https\?://||')
        update_domain "$domain"
        
        # Ask about GitHub Pages
        echo
        read -p "📱 Create CNAME file for GitHub Pages? (y/n): " create_cname_file
        if [[ "$create_cname_file" =~ ^[Yy]$ ]]; then
            create_cname "$domain"
        fi
    else
        echo "⏭️  Skipping domain configuration"
    fi
    
    # Optimize
    echo
    optimize
    
    echo
    echo "🎉 Deployment preparation complete!"
    echo
    echo "📋 Next steps:"
    echo "   1. Review your posts.json configuration"
    echo "   2. Add your Formspree endpoint to site.js"
    echo "   3. Test locally before deploying"
    echo "   4. Deploy to your hosting service"
    echo
    echo "📚 See CONFIGURATION.md for detailed setup instructions"
    echo "=================================================="
}

# Run main function
main "$@"