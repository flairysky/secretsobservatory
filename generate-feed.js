#!/usr/bin/env node

/**
 * Generate feed.xml from posts.json
 * Run this script whenever you add a new post to keep the RSS feed updated.
 * 
 * Usage: node generate-feed.js
 */

const fs = require('fs');
const path = require('path');

// Read posts.json
const postsData = JSON.parse(fs.readFileSync('posts.json', 'utf8'));
const { site, posts } = postsData;

// Get the most recent post date for the feed update timestamp
const mostRecentDate = posts.length > 0 ? posts[0].date : new Date().toISOString().split('T')[0];

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${site.title}</title>
  <subtitle>${site.tagline}</subtitle>
  <link href="${site.baseUrl}/feed.xml" rel="self"/>
  <link href="${site.baseUrl}/"/>
  <id>${site.baseUrl}/</id>
  <author>
    <name>${site.author}</name>
  </author>
  <updated>${mostRecentDate}T00:00:00Z</updated>
`;

// Add entries for each post
posts.forEach(post => {
  xml += `
  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${site.baseUrl}/post.html?slug=${post.slug}"/>
    <id>${post.slug}</id>
    <published>${post.date}T00:00:00Z</published>
    <updated>${post.date}T00:00:00Z</updated>
    <summary>${escapeXml(post.excerpt)}</summary>`;
  
  // Add categories
  post.categories.forEach(category => {
    xml += `
    <category term="${escapeXml(category)}"/>`;
  });
  
  xml += `
  </entry>
`;
});

xml += `
</feed>`;

// Helper function to escape XML special characters
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// Write feed.xml
fs.writeFileSync('feed.xml', xml, 'utf8');
console.log('✅ feed.xml generated successfully!');
console.log(`📝 ${posts.length} posts included`);
console.log(`🔗 Feed URL: ${site.baseUrl}/feed.xml`);
