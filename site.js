// Global variables
let postsData = null;
let currentPage = '';
let filteredPosts = [];
let activeCategories = new Set();

// Analytics tracking variables
let pageStartTime = null;
let scrollDepthTracked = {
  '25': false,
  '50': false,
  '75': false,
  '100': false
};
let isPageVisible = true;
let timeOnPageAccumulator = 0;
let lastVisibilityChange = null;

// Simple visitor counter (GDPR-compliant, no consent needed)
function trackPageView() {
  try {
    const stats = JSON.parse(localStorage.getItem('siteStats') || '{"totalViews":0,"firstVisit":null}');
    stats.totalViews++;
    if (!stats.firstVisit) {
      stats.firstVisit = new Date().toISOString();
    }
    stats.lastVisit = new Date().toISOString();
    localStorage.setItem('siteStats', JSON.stringify(stats));
    console.log('Pageview tracked (consent-free):', stats.totalViews);
  } catch (e) {
    console.error('Could not track pageview:', e);
  }
}

// Cookie Consent Management
function initCookieConsent() {
  const consentBanner = document.getElementById('cookieConsent');
  if (!consentBanner) {
    console.log('Cookie consent banner not found');
    return;
  }

  const cookieConsent = localStorage.getItem('cookieConsent');
  console.log('Current cookie consent:', cookieConsent);
  
  // Initialize Clarity ONLY if user previously accepted
  if (cookieConsent === 'accepted') {
    initClarity();
  } else {
    console.log('No consent or rejected - Clarity not initialized');
  }
  
  // Accept button handler
  const acceptBtn = document.getElementById('acceptCookies');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Accept button clicked');
      localStorage.setItem('cookieConsent', 'accepted');
      consentBanner.classList.remove('show');
      // Hide with delay to allow animation
      setTimeout(() => {
        consentBanner.style.display = 'none';
      }, 300);
      // Initialize Clarity now that user accepted
      initClarity();
      console.log('Cookies accepted - Clarity initialized with full tracking');
    });
  }

  // Reject button handler
  const rejectBtn = document.getElementById('rejectCookies');
  if (rejectBtn) {
    rejectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Reject button clicked');
      localStorage.setItem('cookieConsent', 'rejected');
      consentBanner.classList.remove('show');
      // Hide with delay to allow animation
      setTimeout(() => {
        consentBanner.style.display = 'none';
      }, 300);
      console.log('Cookies rejected - No Clarity tracking');
    });
  }
  
  // If no consent decision has been made, show the banner
  if (cookieConsent === null) {
    setTimeout(() => {
      consentBanner.classList.add('show');
      console.log('Showing cookie consent banner');
    }, 1000);
  }
}

// Initialize Microsoft Clarity (only called after consent)
function initClarity() {
  if (window.clarity) {
    console.log('Clarity already initialized');
    initAnalytics(); // Initialize analytics tracking
    return;
  }
  
  // Load Clarity script
  console.log('Initializing Clarity with consent...');
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "uhy4jujwdi");
  
  // Initialize analytics tracking after Clarity loads
  setTimeout(() => {
    if (window.clarity) {
      console.log('Clarity loaded and ready');
      initAnalytics();
    }
  }, 1000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  trackPageView(); // Count visitor (no consent needed)
  initTheme();
  initMobileMenu();
  setFooterYear();
  detectPage();
  loadPosts();
  initScrollProgress();
  // initAnalytics() will be called from initClarity() after consent
  initCookieConsent();
});

// Scroll progress bar (for post pages)
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  console.log('initScrollProgress called. Progress bar element:', progressBar);
  
  if (!progressBar) {
    console.log('No progress bar element found - skipping scroll progress init');
    return; // Only on pages with progress bar
  }
  
  // Add padding to body to account for fixed header
  document.body.classList.add('has-fixed-header');
  console.log('Added has-fixed-header class to body');
  
  function updateScrollProgress() {
    // Get the current scroll position - use window.scrollY for better mobile support
    const winScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    
    // Calculate total scrollable height
    // Use Math.max to handle edge cases on mobile where body might be taller than html
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    
    // Viewport height
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    
    // Calculate scrollable distance (total height minus viewport)
    const height = docHeight - windowHeight;
    
    // Calculate percentage scrolled
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const finalWidth = Math.min(100, Math.max(0, scrolled));
    progressBar.style.width = finalWidth + '%';
    
    // Log occasionally (every 10%)
    if (Math.floor(finalWidth / 10) !== Math.floor((finalWidth - 1) / 10)) {
      console.log('Scroll progress:', finalWidth.toFixed(1) + '%');
    }
  }
  
  // Use passive listeners for better scroll performance
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
  
  // Initial update with slight delay to ensure page is fully loaded
  setTimeout(updateScrollProgress, 100);
  updateScrollProgress();
  console.log('Scroll progress tracking initialized');
}

// Microsoft Clarity Analytics Functions
function initAnalytics() {
  // Wait for Clarity to be available
  if (typeof clarity === 'undefined') {
    console.warn('Clarity is not loaded, skipping analytics init');
    return;
  }
  
  // Initialize time tracking
  pageStartTime = Date.now();
  lastVisibilityChange = Date.now();
  
  // Track page visibility for accurate time on page
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // Track time on page when user leaves
  window.addEventListener('beforeunload', trackPageLeave);
  
  // Also send time on page periodically (every 30 seconds) as backup
  setInterval(() => {
    if (isPageVisible && pageStartTime) {
      const now = Date.now();
      let totalTime = timeOnPageAccumulator;
      if (lastVisibilityChange) {
        totalTime += (now - lastVisibilityChange);
      }
      const timeInSeconds = Math.round(totalTime / 1000);
      const timeInMinutes = (totalTime / 60000).toFixed(2);
      
      if (typeof clarity !== 'undefined' && timeInSeconds > 5) {
        // Get post slug and title if on post page
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        
        // Find post info from postsData if available
        let postTitle = null;
        if (slug && postsData && postsData.posts) {
          const post = postsData.posts.find(p => p.slug === slug);
          if (post) {
            postTitle = post.title;
          }
        }
        
        // Build descriptive page name
        let pageName = currentPage || 'unknown';
        if (currentPage === 'post' && postTitle) {
          pageName = `Post: ${postTitle}`;
        } else if (currentPage === 'index') {
          pageName = 'Home';
        } else if (currentPage === 'archive') {
          pageName = 'Archive';
        } else if (currentPage === 'about') {
          pageName = 'About';
        } else if (currentPage === 'feedback') {
          pageName = 'Feedback';
        } else if (currentPage === 'privacy') {
          pageName = 'Privacy';
        }
        
        // Set custom tags for Clarity
        clarity('set', 'page_type', currentPage);
        clarity('set', 'page_name', pageName);
        if (slug) clarity('set', 'post_slug', slug);
        if (postTitle) clarity('set', 'post_title', postTitle);
        clarity('set', 'time_minutes', timeInMinutes);
        
        console.log(`Tracked time on page (periodic): ${timeInMinutes} minutes on ${pageName}`);
      }
    }
  }, 30000); // Every 30 seconds
  
  console.log('Clarity analytics initialized');
}

// Setup scroll tracking (call this separately for post pages)
function initScrollTracking() {
  if (typeof clarity !== 'undefined') {
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    console.log('Scroll depth tracking initialized');
  }
}

function handleVisibilityChange() {
  const now = Date.now();
  
  if (document.hidden) {
    // Page became hidden - accumulate time
    if (isPageVisible && lastVisibilityChange) {
      timeOnPageAccumulator += (now - lastVisibilityChange);
    }
    isPageVisible = false;
  } else {
    // Page became visible again
    isPageVisible = true;
    lastVisibilityChange = now;
  }
}

function trackPageLeave() {
  // Calculate total time on page
  const now = Date.now();
  let totalTime = timeOnPageAccumulator;
  
  if (isPageVisible && lastVisibilityChange) {
    totalTime += (now - lastVisibilityChange);
  }
  
  const timeInSeconds = Math.round(totalTime / 1000);
  const timeInMinutes = (totalTime / 60000).toFixed(2);
  
  // Track time on page with Clarity
  if (typeof clarity !== 'undefined' && timeInSeconds > 0) {
    // Get post slug and title if on post page
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    // Find post info from postsData if available
    let postTitle = null;
    if (slug && postsData && postsData.posts) {
      const post = postsData.posts.find(p => p.slug === slug);
      if (post) {
        postTitle = post.title;
      }
    }
    
    // Build descriptive page name
    let pageName = currentPage || 'unknown';
    if (currentPage === 'post' && postTitle) {
      pageName = `Post: ${postTitle}`;
    } else if (currentPage === 'index') {
      pageName = 'Home';
    } else if (currentPage === 'archive') {
      pageName = 'Archive';
    } else if (currentPage === 'about') {
      pageName = 'About';
    } else if (currentPage === 'feedback') {
      pageName = 'Feedback';
    } else if (currentPage === 'privacy') {
      pageName = 'Privacy';
    }
    
    // Set final page metrics as custom tags
    clarity('set', 'page_type', currentPage);
    clarity('set', 'page_name', pageName);
    if (slug) clarity('set', 'post_slug', slug);
    if (postTitle) clarity('set', 'post_title', postTitle);
    clarity('set', 'time_seconds', timeInSeconds.toString());
    clarity('set', 'time_minutes', timeInMinutes);
  }
}

function trackScrollDepth() {
  const winScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  
  // Track milestones
  const milestones = ['25', '50', '75', '100'];
  milestones.forEach(milestone => {
    const milestoneValue = parseInt(milestone);
    if (scrolled >= milestoneValue && !scrollDepthTracked[milestone]) {
      scrollDepthTracked[milestone] = true;
      
      if (typeof clarity !== 'undefined') {
        // Get post slug and title if on post page
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        
        // Find post info from postsData if available
        let postTitle = null;
        if (slug && postsData && postsData.posts) {
          const post = postsData.posts.find(p => p.slug === slug);
          if (post) {
            postTitle = post.title;
          }
        }
        
        // Build descriptive page name
        let pageName = currentPage || 'unknown';
        if (currentPage === 'post' && postTitle) {
          pageName = `Post: ${postTitle}`;
        } else if (currentPage === 'index') {
          pageName = 'Home';
        } else if (currentPage === 'archive') {
          pageName = 'Archive';
        } else if (currentPage === 'about') {
          pageName = 'About';
        } else if (currentPage === 'feedback') {
          pageName = 'Feedback';
        } else if (currentPage === 'privacy') {
          pageName = 'Privacy';
        }
        
        // Set scroll depth as custom tag
        clarity('set', 'scroll_depth_' + milestoneValue, 'reached');
        clarity('set', 'page_type', currentPage);
        clarity('set', 'page_name', pageName);
        if (slug) clarity('set', 'post_slug', slug);
        if (postTitle) clarity('set', 'post_title', postTitle);
        
        console.log(`Tracked scroll depth: ${milestoneValue}% on ${pageName}`);
      }
    }
  });
}

function trackPostView(postInfo, slug) {
  if (typeof clarity === 'undefined') {
    console.log('Clarity not initialized, skipping post tracking');
    return;
  }
  
  // Track individual post view with custom tags
  clarity('set', 'post_slug', slug);
  clarity('set', 'post_title', postInfo.title);
  clarity('set', 'post_categories', postInfo.categories.join(', '));
  clarity('set', 'post_date', postInfo.date);
  clarity('set', 'page_type', 'post');
  
  console.log('Tracked post view:', slug);
}

// Theme management
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  
  updateThemeButton();
  
  // Desktop theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Mobile theme toggle
  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  
  updateThemeButton();
}

function updateThemeButton() {
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  const isDark = document.documentElement.classList.contains('dark');
  
  // Sun icon for dark mode (click to go light), Moon icon for light mode (click to go dark)
  const icon = isDark 
    ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
    : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
  
  if (themeToggle) themeToggle.innerHTML = icon;
  if (themeToggleMobile) themeToggleMobile.innerHTML = icon;
}

// Mobile menu management
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenu = document.getElementById('closeMobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuPanel = document.getElementById('mobileMenuPanel');
  const catBtnMobile = document.getElementById('catBtnMobile');
  const catMenuMobile = document.getElementById('catMenuMobile');
  
  if (!mobileMenuBtn) return;
  
  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', function() {
    const isOpen = !mobileMenuPanel.classList.contains('translate-x-full');
    
    if (isOpen) {
      // Close mobile menu if it's already open
      mobileMenuPanel.classList.add('translate-x-full');
      mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    } else {
      // Open mobile menu
      // Close sidebar if it's open
      const sidebar = document.getElementById('sidebar');
      const sidebarOverlay = document.getElementById('sidebarOverlay');
      if (sidebar && sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        if (sidebarOverlay) {
          sidebarOverlay.classList.remove('overlay-visible');
        }
      }
      
      mobileMenuPanel.classList.remove('translate-x-full');
      mobileMenuOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  });
  
  // Close mobile menu
  function closeMobileMenuFunc() {
    mobileMenuPanel.classList.add('translate-x-full');
    mobileMenuOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  if (closeMobileMenu) {
    closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
  }
  
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenuFunc);
  }
  
  // Mobile categories dropdown
  if (catBtnMobile && catMenuMobile) {
    catBtnMobile.addEventListener('click', function() {
      catMenuMobile.classList.toggle('hidden');
    });
  }
  
  // Close menu on navigation
  const menuLinks = mobileMenuPanel?.querySelectorAll('a');
  menuLinks?.forEach(link => {
    link.addEventListener('click', closeMobileMenuFunc);
  });
  
  // Close menu on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !mobileMenuPanel.classList.contains('translate-x-full')) {
      closeMobileMenuFunc();
    }
  });
}

// Set current year in footer
function setFooterYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Detect current page
function detectPage() {
  const path = window.location.pathname;
  if (path.includes('post.html')) {
    currentPage = 'post';
  } else if (path.includes('archive.html')) {
    currentPage = 'archive';
  } else if (path.includes('feedback.html')) {
    currentPage = 'feedback';
  } else if (path.includes('about.html')) {
    currentPage = 'about';
  } else if (path.includes('privacy.html')) {
    currentPage = 'privacy';
  } else {
    currentPage = 'index';
  }
}

// Load posts data and initialize page-specific functionality
async function loadPosts() {
  console.log('loadPosts() called, currentPage:', currentPage);
  
  // About and privacy pages don't need posts data
  if (currentPage === 'about' || currentPage === 'privacy') {
    console.log('Skipping posts load for', currentPage);
    initAboutPage();
    hideLoading();
    return;
  }
  
  try {
    showLoading();
    console.log('Fetching posts.json...');
    const response = await fetch('posts.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    postsData = await response.json();
    console.log('Posts data loaded successfully:', postsData);
    
    switch (currentPage) {
      case 'index':
        console.log('Initializing index page...');
        // Sticky navigation handler for index page
        const nav = document.getElementById('mainNav');
        if (nav) {
          window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
              nav.classList.add('bg-slate-900', 'border-b', 'border-slate-800', 'shadow-lg');
              nav.querySelectorAll('a, button').forEach(el => {
                el.classList.remove('drop-shadow-lg');
              });
            } else {
              nav.classList.remove('bg-slate-900', 'border-b', 'border-slate-800', 'shadow-lg');
              nav.querySelectorAll('a, button').forEach(el => {
                el.classList.add('drop-shadow-lg');
              });
            }
          });
        }
        initIndexPage();
        break;
      case 'post':
        console.log('Initializing post page...');
        initPostPage();
        break;
      case 'archive':
        console.log('Initializing archive page...');
        initArchivePage();
        break;
      case 'feedback':
        console.log('Initializing feedback page...');
        initFeedbackPage();
        break;
    }
    
    // Initialize categories dropdown if it exists
    initCategoriesDropdown();
    
  } catch (error) {
    console.error('Failed to load posts:', error);
    showError('Failed to load blog data. Please try refreshing the page.');
  } finally {
    hideLoading();
  }
}

// Loading and error states
function showLoading() {
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('loading');
  }
}

function hideLoading() {
  const main = document.querySelector('main');
  if (main) {
    main.classList.remove('loading');
  }
}

function showError(message) {
  const main = document.querySelector('main');
  if (main) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'message-error';
    errorDiv.textContent = message;
    main.insertBefore(errorDiv, main.firstChild);
  }
}

// Initialize index page
function initIndexPage() {
  if (!postsData || !postsData.posts) {
    console.error('Posts data not available');
    showError('Failed to load blog posts. Please refresh the page.');
    return;
  }
  
  filteredPosts = [...postsData.posts];
  
  // Setup search with debouncing (both desktop and mobile)
  const searchInput = document.getElementById('searchInput');
  const searchInputMobile = document.getElementById('searchInputMobile');
  
  function setupSearchInput(input) {
    if (input) {
      let searchTimeout;
      input.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterPosts, 300);
      });
    }
  }
  
  setupSearchInput(searchInput);
  setupSearchInput(searchInputMobile);
  
  // Setup category chips
  setupCategoryChips();
  
  // Render posts
  renderPosts();
}

// Setup category filter chips
function setupCategoryChips() {
  const categoryChips = document.getElementById('categoryChips');
  const categoryChipsMobile = document.getElementById('categoryChipsMobile');
  
  // Get all unique categories
  const categories = new Set();
  postsData.posts.forEach(post => {
    post.categories.forEach(cat => categories.add(cat));
  });
  
  // Create chips for both containers
  const containers = [categoryChips, categoryChipsMobile].filter(c => c);
  containers.forEach(container => {
    container.innerHTML = '';
    Array.from(categories).sort().forEach(category => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = category;
      chip.addEventListener('click', () => toggleCategory(category));
      container.appendChild(chip);
    });
  });
}

// Toggle category filter
function toggleCategory(category) {
  if (activeCategories.has(category)) {
    activeCategories.delete(category);
  } else {
    activeCategories.add(category);
  }
  
  // Update all chips in both containers
  const allChips = document.querySelectorAll('.chip');
  allChips.forEach(chip => {
    if (chip.textContent === category) {
      if (activeCategories.has(category)) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    }
  });
  
  filterPosts();
}

// Filter posts based on search and categories
function filterPosts() {
  const searchInput = document.getElementById('searchInput');
  const searchInputMobile = document.getElementById('searchInputMobile');
  const searchTerm = (searchInput ? searchInput.value : searchInputMobile ? searchInputMobile.value : '').toLowerCase();
  
  filteredPosts = postsData.posts.filter(post => {
    // Text search
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.categories.some(cat => cat.toLowerCase().includes(searchTerm));
    
    // Category filter
    const matchesCategory = activeCategories.size === 0 ||
      post.categories.some(cat => activeCategories.has(cat));
    
    return matchesSearch && matchesCategory;
  });
  
  renderPosts();
}

// Render posts list
function renderPosts() {
  const postList = document.getElementById('postList');
  if (!postList) return;
  
  if (filteredPosts.length === 0) {
    postList.innerHTML = `
      <div class="text-center py-12">
        <p class="text-slate-500 dark:text-slate-400 text-lg">No posts found.</p>
        <p class="text-slate-400 dark:text-slate-500 text-sm mt-2">Try adjusting your search terms or category filters.</p>
      </div>
    `;
    return;
  }
  
  // Sort by date descending
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  postList.innerHTML = sortedPosts.map(post => {
    const coverImage = post.cover_image ? 
      `<img src="${post.cover_image}" alt="${post.title}" class="cover-image" 
           onerror="this.style.display='none'" loading="lazy">` : '';
    
    const categories = post.categories.map(cat => 
      `<span class="chip">${escapeHtml(cat)}</span>`
    ).join(' ');
    
    return `
      <article class="card">
        ${coverImage}
        <h2 class="text-lg font-semibold mb-2">
          <a href="post.html?slug=${post.slug}" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ${escapeHtml(post.title)}
          </a>
        </h2>
        <div class="text-sm text-slate-500 dark:text-slate-400 mb-3 flex flex-wrap items-center gap-2">
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <span>•</span>
          <div class="flex flex-wrap gap-1">${categories}</div>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">${escapeHtml(post.excerpt)}</p>
        <a href="post.html?slug=${post.slug}" 
           class="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          Read more →
        </a>
      </article>
    `;
  }).join('');
}

// Initialize post page
async function initPostPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  
  console.log('Initializing post page...');
  console.log('URL params:', urlParams.toString());
  console.log('Extracted slug:', slug);
  console.log('Current location:', window.location.href);
  
  if (!slug) {
    console.error('No slug found in URL parameters');
    showPostError('No post specified in URL. Please check the link and try again.');
    return;
  }
  
  try {
    showLoading();
    
    // Try to find the post in our posts data first
    const postInfo = postsData?.posts?.find(post => post.slug === slug);
    console.log('Post info from posts.json:', postInfo);
    
    if (!postInfo) {
      throw new Error(`Post "${slug}" not found in posts.json. Available posts: ${postsData?.posts?.map(p => p.slug).join(', ') || 'none'}`);
    }
    
    const postUrl = `posts/${slug}.md`;
    console.log('Attempting to fetch:', postUrl);
    console.log('Full URL would be:', new URL(postUrl, window.location.href).href);
    
    // Try the direct filename without encoding first
    const response = await fetch(postUrl);
    console.log('Fetch response status:', response.status);
    console.log('Fetch response ok:', response.ok);
    console.log('Fetch response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      // If fetch fails, it might be a CORS issue or file not found
      if (response.status === 0 || response.status === 404) {
        // Try to provide a helpful solution
        const isFileProtocol = window.location.protocol === 'file:';
        const helpMessage = isFileProtocol 
          ? `Could not load post file "${postUrl}". When opening HTML files directly in the browser (file:// protocol), modern browsers block loading other files for security reasons. 

**Solutions:**
1. **Use a local web server** (recommended):
   - Python: \`python -m http.server 8000\` 
   - Node.js: \`npx serve .\`
   - PHP: \`php -S localhost:8000\`
   - Or use any local development server

2. **Use online hosting**:
   - Deploy to GitHub Pages, Netlify, or Vercel
   - Upload to any web hosting service

3. **For testing only**: Some browsers allow local file access with flags:
   - Chrome: Start with \`--allow-file-access-from-files\` flag
   - **Not recommended for regular use due to security implications**`
          : `HTTP ${response.status}: ${response.statusText}`;
        
        throw new Error(helpMessage);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    }
    
    const markdown = await response.text();
    console.log('Loaded markdown length:', markdown.length);
    console.log('Markdown preview:', markdown.substring(0, 200) + '...');
    
    if (!markdown || markdown.length === 0) {
      throw new Error('Post file is empty or could not be read');
    }
    
    const { frontMatter, content } = parseFrontMatter(markdown);
    console.log('Parsed front matter:', frontMatter);
    console.log('Content length:', content.length);
    
    if (!frontMatter.title) {
      throw new Error('Invalid post format: missing title in front matter');
    }
    
    // Update page title and meta
    document.title = `${frontMatter.title} • Secrets Observatory`;
    updatePostMeta(frontMatter);
    
    // Set post title and meta
    const titleElement = document.getElementById('postTitle');
    if (titleElement) {
      titleElement.textContent = frontMatter.title;
    }
    
    const categories = frontMatter.categories?.map(cat => 
      `<span class="chip">${escapeHtml(cat)}</span>`
    ).join(' ') || '';
    
    const metaElement = document.getElementById('postMeta');
    if (metaElement) {
      metaElement.innerHTML = `
        <time datetime="${frontMatter.date}">${formatDate(frontMatter.date)}</time>
        ${categories ? ` • ${categories}` : ''}
      `;
    }
    
    // Track post view with Clarity
    trackPostView(postInfo, slug);
    
    // Initialize share and cite functionality after metadata is loaded
    console.log('About to call initShareAndCite...');
    initShareAndCite();
    console.log('initShareAndCite call completed');
    
    // Initialize sidebar navigation
    console.log('About to call initSidebar...');
    initSidebar(slug);
    console.log('initSidebar call completed');
    
    // Process references and footnotes
    let processedContent = content;
    if (window.refManager) {
      console.log('Processing references and footnotes...');
      
      // Try to load external references file
      await window.refManager.loadReferences(slug);
      
      // Parse inline references and footnotes
      processedContent = window.refManager.parseInlineReferences(processedContent);
      processedContent = window.refManager.parseInlineFootnotes(processedContent);
      
      console.log('References loaded:', window.refManager.references.size);
      console.log('Footnotes loaded:', window.refManager.footnotes.size);
    }
    
    // Render markdown content
    const postBody = document.getElementById('postBody');
    if (postBody) {
      console.log('Rendering markdown with marked...');
      
      // Process epigraph syntax before markdown parsing
      processedContent = processEpigraphSyntax(processedContent);
      
      // CRITICAL: Convert markdown to HTML WITHOUT parsing math
      // Configure marked to treat $ as a regular character
      marked.setOptions({
        breaks: false,
        gfm: true,
        headerIds: true,
        mangle: false,
        sanitize: false
      });
      
      let htmlContent = marked.parse(processedContent);
      
      console.log('HTML content sample:', htmlContent.substring(0, 500));
      
      // Process reference syntax [ref:key] and footnote syntax [#1]
      if (window.refManager) {
        htmlContent = window.refManager.processReferenceSyntax(htmlContent);
      }
      
      postBody.innerHTML = htmlContent;
      console.log('Markdown rendered successfully');
      
      // Add references and footnotes sections
      if (window.refManager) {
        const referencesHtml = window.refManager.generateReferencesSection();
        const footnotesHtml = window.refManager.generateFootnotesSection();
        
        if (referencesHtml || footnotesHtml) {
          postBody.insertAdjacentHTML('beforeend', footnotesHtml);
          postBody.insertAdjacentHTML('beforeend', referencesHtml);
        }
        
        // Initialize event listeners for popup
        window.refManager.initializeEventListeners();
      }
      
      // Add citation section
      addCitationSection(frontMatter, slug);
      
      // Render math if MathJax is available
      if (window.MathJax) {
        try {
          console.log('Rendering math with MathJax...');
          // Wait for MathJax to be ready, then typeset
          await window.MathJax.startup.promise;
          await window.MathJax.typesetPromise([postBody]);
          console.log('MathJax rendering complete');
        } catch (err) {
          console.warn('MathJax rendering failed:', err);
        }
      } else {
        console.log('MathJax not available or not ready');
      }
      
      // Setup navigation
      setupPostNavigation(slug);
      
      // Initialize scroll depth tracking for post pages
      initScrollTracking();
      
      console.log('Post loaded successfully!');
    } else {
      throw new Error('Could not find postBody element in DOM');
    }
    
  } catch (error) {
    console.error('Failed to load post:', error);
    console.error('Error stack:', error.stack);
    showPostError(`Failed to load post "${slug}". ${error.message}`);
  } finally {
    hideLoading();
  }
}

function showPostError(message) {
  const postBody = document.getElementById('postBody');
  if (postBody) {
    postBody.innerHTML = `
      <div class="message-error">
        <h3 class="text-lg font-semibold mb-2">Post Loading Error</h3>
        <p class="mb-3">${escapeHtml(message)}</p>
        <details class="mb-3">
          <summary class="cursor-pointer text-sm font-medium">Debug Information</summary>
          <div class="mt-2 text-xs space-y-1">
            <p><strong>Current URL:</strong> ${window.location.href}</p>
            <p><strong>Expected file:</strong> posts/${new URLSearchParams(window.location.search).get('slug')}.md</p>
            <p><strong>Base URL:</strong> ${window.location.origin}</p>
          </div>
        </details>
        <p class="text-sm">
          <a href="index.html" class="font-medium hover:underline text-blue-600 dark:text-blue-400">← Return to home</a>
        </p>
      </div>
    `;
  }
}

function updatePostMeta(frontMatter) {
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && frontMatter.excerpt) {
    metaDescription.content = frontMatter.excerpt;
  }
  
  // Update Open Graph tags if they exist
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.content = frontMatter.title;
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && frontMatter.excerpt) {
    ogDescription.content = frontMatter.excerpt;
  }
}

// Setup previous/next post navigation
function setupPostNavigation(currentSlug) {
  const currentIndex = postsData.posts.findIndex(post => post.slug === currentSlug);
  
  const prevLink = document.getElementById('prevLink');
  const nextLink = document.getElementById('nextLink');
  
  if (prevLink) {
    if (currentIndex > 0) {
      const prevPost = postsData.posts[currentIndex - 1];
      prevLink.href = `post.html?slug=${prevPost.slug}`;
      prevLink.textContent = `← ${prevPost.title}`;
      prevLink.title = prevPost.excerpt;
    } else {
      prevLink.style.display = 'none';
    }
  }
  
  if (nextLink) {
    if (currentIndex < postsData.posts.length - 1 && currentIndex !== -1) {
      const nextPost = postsData.posts[currentIndex + 1];
      nextLink.href = `post.html?slug=${nextPost.slug}`;
      nextLink.textContent = `${nextPost.title} →`;
      nextLink.title = nextPost.excerpt;
    } else {
      nextLink.style.display = 'none';
    }
  }
}

// Add citation section to posts
function addCitationSection(frontMatter, slug) {
  const postBody = document.getElementById('postBody');
  if (!postBody) return;
  
  // Get current URL for citation
  const currentUrl = window.location.origin + window.location.pathname + `?slug=${slug}`;
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Generate citations in different formats
  const citations = {
    apa: `Secrets Observatory. (${new Date(frontMatter.date).getFullYear()}). ${frontMatter.title}. <i>Secrets Observatory</i>. Retrieved ${formatDate(currentDate)}, from ${currentUrl}`,
    
    mla: `Secrets Observatory. "${frontMatter.title}." <i>Secrets Observatory</i>, ${formatDate(frontMatter.date)}, ${currentUrl}.`,
    
    chicago: `Secrets Observatory. "${frontMatter.title}." Secrets Observatory. ${formatDate(frontMatter.date)}. ${currentUrl}.`,
    
    bibtex: `@misc{secretsobservatory${new Date(frontMatter.date).getFullYear()}${slug.replace(/[^a-zA-Z0-9]/g, '')},
  author = {Secrets Observatory},
  title = {${frontMatter.title}},
  year = {${new Date(frontMatter.date).getFullYear()}},
  url = {${currentUrl}},
  note = {Accessed: ${currentDate}}
}`
  };
  
  const citationHtml = `
    <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
      <h2 class="text-xl font-semibold mb-4">📚 Citation</h2>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
        Use this post in academic work? Here are properly formatted citations:
      </p>
      
      <div class="space-y-4">
        <!-- APA Style -->
        <div class="citation-item">
          <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">APA Style</h3>
          <div class="citation-box" data-citation="apa">
            <p class="text-sm leading-relaxed">${citations.apa}</p>
            <button class="copy-btn" onclick="copyCitation('apa')" title="Copy APA citation">
              📋 Copy
            </button>
          </div>
        </div>
        
        <!-- MLA Style -->
        <div class="citation-item">
          <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">MLA Style</h3>
          <div class="citation-box" data-citation="mla">
            <p class="text-sm leading-relaxed">${citations.mla}</p>
            <button class="copy-btn" onclick="copyCitation('mla')" title="Copy MLA citation">
              📋 Copy
            </button>
          </div>
        </div>
        
        <!-- Chicago Style -->
        <div class="citation-item">
          <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Chicago Style</h3>
          <div class="citation-box" data-citation="chicago">
            <p class="text-sm leading-relaxed">${citations.chicago}</p>
            <button class="copy-btn" onclick="copyCitation('chicago')" title="Copy Chicago citation">
              📋 Copy
            </button>
          </div>
        </div>
        
        <!-- BibTeX -->
        <div class="citation-item">
          <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">BibTeX</h3>
          <div class="citation-box bibtex" data-citation="bibtex">
            <pre class="text-sm leading-relaxed overflow-x-auto">${citations.bibtex}</pre>
            <button class="copy-btn" onclick="copyCitation('bibtex')" title="Copy BibTeX citation">
              📋 Copy
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p class="text-sm text-blue-800 dark:text-blue-300">
          <strong>💡 Tip:</strong> When citing blog posts in academic work, always check with your institution's style guide 
          and include the access date since web content can change.
        </p>
      </div>
    </div>
  `;
  
  postBody.insertAdjacentHTML('afterend', citationHtml);
  
  // Store citations globally for copying
  window.citationData = citations;
}

// Copy citation function (make globally accessible)
window.copyCitation = function(style) {
  const citation = window.citationData[style];
  if (!citation) return;
  
  // Create temporary textarea for copying
  const textarea = document.createElement('textarea');
  textarea.value = citation;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  
  // Show feedback
  const button = document.querySelector(`[data-citation="${style}"] .copy-btn`);
  if (button) {
    const originalText = button.textContent;
    button.textContent = '✓ Copied!';
    button.style.backgroundColor = '#10b981';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '';
    }, 2000);
  }
};

// Initialize archive page
function initArchivePage() {
  const archiveList = document.getElementById('archiveList');
  if (!archiveList) return;
  
  // Group posts by year and month
  const postsByYear = {};
  
  postsData.posts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!postsByYear[year]) {
      postsByYear[year] = {};
    }
    
    if (!postsByYear[year][month]) {
      postsByYear[year][month] = [];
    }
    
    postsByYear[year][month].push(post);
  });
  
  // Render archive
  const years = Object.keys(postsByYear).sort((a, b) => b - a);
  
  if (years.length === 0) {
    archiveList.innerHTML = '<p class="text-slate-500 dark:text-slate-400">No posts available.</p>';
    return;
  }
  
  archiveList.innerHTML = years.map(year => {
    const months = Object.keys(postsByYear[year]).sort((a, b) => {
      return new Date(`${b} 1, ${year}`) - new Date(`${a} 1, ${year}`);
    });
    
    const monthsHtml = months.map(month => {
      const posts = postsByYear[year][month].sort((a, b) => new Date(b.date) - new Date(a.date));
      
      const postsHtml = posts.map(post => {
        const categories = post.categories.map(cat => 
          `<span class="chip">${escapeHtml(cat)}</span>`
        ).join(' ');
        
        return `
          <div class="archive-post">
            <time datetime="${post.date}">${formatDate(post.date)}</time>
            <span>•</span>
            <a href="post.html?slug=${post.slug}" title="${escapeHtml(post.excerpt)}">
              ${escapeHtml(post.title)}
            </a>
            ${categories ? `<span>•</span> ${categories}` : ''}
          </div>
        `;
      }).join('');
      
      return `
        <div class="mb-6">
          <div class="archive-month">${month}</div>
          <div class="space-y-1">${postsHtml}</div>
        </div>
      `;
    }).join('');
    
    return `
      <div class="mb-8">
        <div class="archive-year">${year}</div>
        ${monthsHtml}
      </div>
    `;
  }).join('');
}

// Initialize feedback page
function initFeedbackPage() {
  // Populate post dropdown
  const postSelect = document.getElementById('post');
  if (postSelect && postsData) {
    postSelect.innerHTML = '<option value="">-- Select a post --</option>';
    postsData.posts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .forEach(post => {
        const option = document.createElement('option');
        option.value = post.slug;
        option.textContent = post.title;
        postSelect.appendChild(option);
      });
  }
  
  // Setup form submission
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', handleFeedbackSubmit);
  }
}

// Handle feedback form submission
async function handleFeedbackSubmit(event) {
  // Let Formspree handle the submission - just do basic validation
  const formData = new FormData(event.target);
  
  // Validate form before submission
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const message = formData.get('message')?.trim();
  
  if (!name || !email || !message) {
    event.preventDefault();
    showFeedbackMessage('Please fill in all required fields.', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    event.preventDefault();
    showFeedbackMessage('Please enter a valid email address.', 'error');
    return;
  }
  
  // If validation passes, let the form submit naturally to Formspree
  const submitBtn = event.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
}

function showFeedbackMessage(message, type) {
  const messageDiv = document.getElementById('feedbackMessage');
  if (messageDiv) {
    messageDiv.className = type === 'success' ? 'message-success' : 'message-error';
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      messageDiv.classList.add('hidden');
    }, 5000);
  }
}

// Initialize categories dropdown
function initCategoriesDropdown() {
  const catBtn = document.getElementById('catBtn');
  const catMenu = document.getElementById('catMenu');
  
  if (!catBtn || !catMenu || !postsData) return;
  
  // Get all unique categories
  const categories = new Set();
  postsData.posts.forEach(post => {
    post.categories.forEach(cat => categories.add(cat));
  });
  
  // Populate desktop dropdown
  catMenu.innerHTML = Array.from(categories).sort().map(category => 
    `<a href="index.html" class="block px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md transition-colors">
      ${escapeHtml(category)}
    </a>`
  ).join('');
  
  // Populate mobile dropdown
  const catMenuMobile = document.getElementById('catMenuMobile');
  if (catMenuMobile) {
    catMenuMobile.innerHTML = Array.from(categories).sort().map(category => 
      `<a href="index.html" class="block py-1 hover:text-blue-600 dark:hover:text-blue-400">
        ${escapeHtml(category)}
      </a>`
    ).join('');
  }
  
  // Toggle desktop dropdown
  catBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    catMenu.classList.toggle('hidden');
  });
  
  // Close desktop dropdown when clicking outside
  document.addEventListener('click', function() {
    catMenu.classList.add('hidden');
  });
  
  // Close dropdown on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      catMenu.classList.add('hidden');
    }
  });
}

// Utility functions
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (error) {
    console.warn('Date formatting error:', error);
    return dateString;
  }
}

function parseFrontMatter(markdown) {
  const lines = markdown.split('\n').map(line => line.trim());
  
  if (lines[0] !== '---') {
    return { frontMatter: {}, content: markdown };
  }
  
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      endIndex = i;
      break;
    }
  }
  
  if (endIndex === -1) {
    return { frontMatter: {}, content: markdown };
  }
  
  const frontMatterLines = lines.slice(1, endIndex);
  const content = lines.slice(endIndex + 1).join('\n');
  
  const frontMatter = {};
  frontMatterLines.forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        frontMatter[key] = value.slice(1, -1)
          .split(',')
          .map(s => s.trim().replace(/^["']|["']$/g, ''))
          .filter(s => s.length > 0);
      } else {
        // Remove quotes and clean the value
        frontMatter[key] = value.trim().replace(/^["']|["']$/g, '');
      }
    }
  });
  
  return { frontMatter, content };
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Process epigraph syntax: >>> quote text | Author Name [Ref]
function processEpigraphSyntax(content) {
  // Match epigraph pattern: >>> quote | attribution
  // Can span multiple lines for the quote part
  const epigraphRegex = /^>>>\s*(.+?)\s*\|\s*(.+?)$/gm;
  
  return content.replace(epigraphRegex, (match, quote, attribution) => {
    // Clean up the quote and attribution
    quote = quote.trim();
    attribution = attribution.trim();
    
    // Generate HTML for epigraph
    return `<div class="epigraph">
  <div class="epigraph-quote">${quote}</div>
  <div class="epigraph-attribution">${attribution}</div>
</div>`;
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Error handling for missing resources
window.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.style.display = 'none';
  }
});

// Service worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(registrationError => console.log('SW registration failed'));
  });
}

// Note: Duplicate functions removed - using the reference-enabled initPostPage() at line 259

// Setup previous/next post navigation
function setupPostNavigation(currentSlug) {
  const currentIndex = postsData.posts.findIndex(post => post.slug === currentSlug);
  
  const prevLink = document.getElementById('prevLink');
  const nextLink = document.getElementById('nextLink');
  
  if (currentIndex > 0) {
    const prevPost = postsData.posts[currentIndex - 1];
    prevLink.href = `post.html?slug=${prevPost.slug}`;
    prevLink.textContent = `← ${prevPost.title}`;
  }
  
  if (currentIndex < postsData.posts.length - 1) {
    const nextPost = postsData.posts[currentIndex + 1];
    nextLink.href = `post.html?slug=${nextPost.slug}`;
    nextLink.textContent = `${nextPost.title} →`;
  }
}

// Initialize archive page
function initArchivePage() {
  const archiveList = document.getElementById('archiveList');
  if (!archiveList) return;
  
  // Group posts by year and month
  const postsByYear = {};
  
  postsData.posts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    
    if (!postsByYear[year]) {
      postsByYear[year] = {};
    }
    
    if (!postsByYear[year][month]) {
      postsByYear[year][month] = [];
    }
    
    postsByYear[year][month].push(post);
  });
  
  // Render archive
  const years = Object.keys(postsByYear).sort((a, b) => b - a);
  
  archiveList.innerHTML = years.map(year => {
    const months = Object.keys(postsByYear[year]).sort((a, b) => {
      return new Date(`${b} 1, ${year}`) - new Date(`${a} 1, ${year}`);
    });
    
    const monthsHtml = months.map(month => {
      const posts = postsByYear[year][month].sort((a, b) => new Date(b.date) - new Date(a.date));
      
      const postsHtml = posts.map(post => {
        const categories = post.categories.map(cat => 
          `<span class="chip">${cat}</span>`
        ).join(' ');
        
        return `
          <div class="archive-post">
            <span>${formatDate(post.date)}</span> •
            <a href="post.html?slug=${post.slug}">${post.title}</a> •
            ${categories}
          </div>
        `;
      }).join('');
      
      return `
        <div class="mb-4">
          <div class="archive-month">${month}</div>
          ${postsHtml}
        </div>
      `;
    }).join('');
    
    return `
      <div class="mb-6">
        <div class="archive-year">${year}</div>
        ${monthsHtml}
      </div>
    `;
  }).join('');
}

// Initialize feedback page
function initFeedbackPage() {
  // Populate post dropdown
  const postSelect = document.getElementById('post');
  if (postSelect && postsData) {
    postsData.posts.forEach(post => {
      const option = document.createElement('option');
      option.value = post.slug;
      option.textContent = post.title;
      postSelect.appendChild(option);
    });
  }
  
  // Setup form submission
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', handleFeedbackSubmit);
  }
}

// Initialize categories dropdown
function initCategoriesDropdown() {
  const catBtn = document.getElementById('catBtn');
  const catMenu = document.getElementById('catMenu');
  
  if (!catBtn || !catMenu || !postsData) return;
  
  // Get all unique categories
  const categories = new Set();
  postsData.posts.forEach(post => {
    post.categories.forEach(cat => categories.add(cat));
  });
  
  // Populate desktop dropdown
  catMenu.innerHTML = Array.from(categories).sort().map(category => 
    `<a href="index.html" class="block px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">${category}</a>`
  ).join('');
  
  // Populate mobile dropdown
  const catMenuMobile = document.getElementById('catMenuMobile');
  if (catMenuMobile) {
    catMenuMobile.innerHTML = Array.from(categories).sort().map(category => 
      `<a href="index.html" class="block py-1 hover:text-blue-600 dark:hover:text-blue-400">${category}</a>`
    ).join('');
  }
  
  // Toggle desktop dropdown
  catBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    catMenu.classList.toggle('hidden');
  });
  
  // Close desktop dropdown when clicking outside
  document.addEventListener('click', function() {
    catMenu.classList.add('hidden');
  });
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Share and Cite functionality
function initShareAndCite() {
  console.log('=== initShareAndCite function called ===');
  
  const shareBtn = document.getElementById('shareBtn');
  const citeBtn = document.getElementById('citeBtn');
  
  console.log('shareBtn element:', shareBtn);
  console.log('citeBtn element:', citeBtn);
  
  const shareModal = document.getElementById('shareModal');
  const citeModal = document.getElementById('citeModal');
  
  console.log('shareModal element:', shareModal);
  console.log('citeModal element:', citeModal);
  
  const closeShareModal = document.getElementById('closeShareModal');
  const closeCiteModal = document.getElementById('closeCiteModal');
  
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  const copyCitationBtn = document.getElementById('copyCitationBtn');
  
  const shareUrl = document.getElementById('shareUrl');
  const citationText = document.getElementById('citationText');
  
  if (!shareBtn || !citeBtn) {
    console.log('Share/Cite buttons not found on this page');
    return; // Not on post page
  }
  
  console.log('Share and Cite buttons found, proceeding with setup...');
  
  // Get current post info
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  
  if (!slug) {
    console.error('No slug found for share/cite functionality');
    return;
  }
  
  if (!postsData || !postsData.posts) {
    console.error('Posts data not available for share/cite functionality');
    return;
  }
  
  const postInfo = postsData.posts.find(post => post.slug === slug);
  
  if (!postInfo) {
    console.error('Post info not found for slug:', slug);
    return;
  }
  
  console.log('Initializing share/cite for post:', postInfo.title);
  
  // Set share URL
  const currentUrl = window.location.href;
  if (shareUrl) {
    shareUrl.value = currentUrl;
  }
  
  // Generate citations
  const year = new Date(postInfo.date).getFullYear();
  const currentDate = new Date().toISOString().split('T')[0];
  
  const citations = {
    bibtex: `@misc{secretsobservatory${year}${slug.replace(/[^a-zA-Z0-9]/g, '')},
  title = {${postInfo.title}},
  author = {Secrets Observatory},
  year = {${year}},
  url = {${currentUrl}},
  howpublished = {Secrets Observatory},
  note = {URL:${currentUrl} (version: ${postInfo.date})},
  eprint = {${currentUrl}},
  url = {${currentUrl}}
}`,
    amsrefs: `\\bib{secretsobservatory${year}${slug.replace(/[^a-zA-Z0-9]/g, '')}}{misc}{
  author={Secrets Observatory},
  title={${postInfo.title}},
  year={${year}},
  eprint={${currentUrl}},
  note={Available at \\url{${currentUrl}}}
}`
  };
  
  // Set initial citation
  if (citationText) {
    citationText.value = citations.bibtex;
  }
  
  // Event listeners
  shareBtn.addEventListener('click', (e) => {
    console.log('Share button clicked');
    e.preventDefault();
    if (shareModal) {
      shareModal.classList.remove('hidden');
    }
  });
  
  citeBtn.addEventListener('click', (e) => {
    console.log('Cite button clicked');
    e.preventDefault();
    if (citeModal) {
      citeModal.classList.remove('hidden');
    }
  });
  
  if (closeShareModal) {
    closeShareModal.addEventListener('click', () => {
      shareModal.classList.add('hidden');
    });
  }
  
  if (closeCiteModal) {
    closeCiteModal.addEventListener('click', () => {
      citeModal.classList.add('hidden');
    });
  }
  
  // Close modals when clicking outside
  if (shareModal) {
    shareModal.addEventListener('click', (e) => {
      if (e.target === shareModal) {
        shareModal.classList.add('hidden');
      }
    });
  }
  
  if (citeModal) {
    citeModal.addEventListener('click', (e) => {
      if (e.target === citeModal) {
        citeModal.classList.add('hidden');
      }
    });
  }
  
  // Copy link functionality
  if (copyLinkBtn && shareUrl) {
    copyLinkBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(shareUrl.value);
        copyLinkBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyLinkBtn.textContent = 'Copy link';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        shareUrl.select();
        document.execCommand('copy');
        copyLinkBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyLinkBtn.textContent = 'Copy link';
        }, 2000);
      }
    });
  }
  
  // Copy citation functionality
  if (copyCitationBtn && citationText) {
    copyCitationBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(citationText.value);
        copyCitationBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyCitationBtn.textContent = 'Copy citation';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        // Fallback for older browsers
        citationText.select();
        document.execCommand('copy');
        copyCitationBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyCitationBtn.textContent = 'Copy citation';
        }, 2000);
      }
    });
  }
  
  // Citation type switching
  const citationTypeRadios = document.querySelectorAll('input[name="citationType"]');
  citationTypeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (citationText) {
        citationText.value = citations[radio.value];
      }
    });
  });
  
  console.log('Share/Cite functionality initialized successfully');
}

// Sidebar navigation functionality
function initSidebar(currentSlug) {
  console.log('=== initSidebar function called ===');
  
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const closeSidebar = document.getElementById('closeSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarNav = document.getElementById('sidebarNav');
  
  if (!sidebar || !sidebarToggle || !sidebarNav) {
    console.log('Sidebar elements not found on this page');
    return;
  }
  
  console.log('Sidebar elements found, proceeding with setup...');
  
  // Generate sidebar navigation content
  generateSidebarContent(sidebarNav, currentSlug);
  
  // Close sidebar function
  const closeSidebarFunc = () => {
    sidebar.classList.remove('sidebar-open');
    sidebarOverlay.classList.remove('overlay-visible');
    document.body.style.overflow = ''; // Restore scrolling
  };
  
  // Toggle sidebar open/close
  sidebarToggle.addEventListener('click', () => {
    console.log('Sidebar toggle clicked');
    const isOpen = sidebar.classList.contains('sidebar-open');
    
    if (isOpen) {
      closeSidebarFunc();
    } else {
      sidebar.classList.add('sidebar-open');
      sidebarOverlay.classList.add('overlay-visible');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  });
  
  if (closeSidebar) {
    closeSidebar.addEventListener('click', closeSidebarFunc);
  }
  
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebarFunc);
  }
  
  // Close sidebar on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('sidebar-open')) {
      closeSidebarFunc();
    }
  });
  
  // Check if URL has a parameter to auto-open sidebar
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('openSidebar') === 'true' || currentSlug === 'poem_preface') {
    // Small delay to ensure page is fully loaded
    setTimeout(() => {
      sidebar.classList.add('sidebar-open');
      sidebarOverlay.classList.add('overlay-visible');
      document.body.style.overflow = 'hidden';
    }, 100);
  }
  
  console.log('Sidebar functionality initialized successfully');
}

function generateSidebarContent(sidebarNav, currentSlug) {
  if (!postsData || !postsData.posts) {
    console.error('Posts data not available for sidebar');
    return;
  }
  
  // Organize posts into categories
  const mainPoemPosts = [];
  const standalonePoemPosts = [];
  const miscPosts = [];
  
  // Define the order for main poem posts (the series)
  const mainPoemOrder = [
    'poem_preface',
    'poem_first_act',
    'poem_second_act',
    'poem_third_act',
    'poem_fourth_act'
  ];
  
  // Define standalone poems
  const standalonePoems = [
    'poem_on_infinity',
    'poem_on_prime_ideals'
  ];
  
  // Separate posts
  postsData.posts.forEach(post => {
    if (mainPoemOrder.includes(post.slug)) {
      mainPoemPosts.push(post);
    } else if (standalonePoems.includes(post.slug)) {
      standalonePoemPosts.push(post);
    } else if (post.slug.startsWith('poem_')) {
      // Any other poems not explicitly categorized
      standalonePoemPosts.push(post);
    } else {
      miscPosts.push(post);
    }
  });
  
  // Sort main poem posts according to defined order
  mainPoemPosts.sort((a, b) => {
    const indexA = mainPoemOrder.indexOf(a.slug);
    const indexB = mainPoemOrder.indexOf(b.slug);
    
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });
  
  // Sort standalone poems by the defined order
  standalonePoemPosts.sort((a, b) => {
    const indexA = standalonePoems.indexOf(a.slug);
    const indexB = standalonePoems.indexOf(b.slug);
    
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return 0;
  });
  
  // Build HTML
  let html = '';
  
  // Main Poetry section
  if (mainPoemPosts.length > 0) {
    html += '<div class="sidebar-section">';
    html += '<h3 class="sidebar-section-title">Daniel\'s Poem</h3>';
    html += '<ul class="sidebar-nav-list">';
    
    mainPoemPosts.forEach(post => {
      const isActive = post.slug === currentSlug ? 'active' : '';
      const displayTitle = getShortTitle(post.title);
      html += `
        <li class="sidebar-nav-item">
          <a href="post.html?slug=${post.slug}" class="sidebar-nav-link ${isActive}" title="${escapeHtml(post.title)}">
            ${escapeHtml(displayTitle)}
          </a>
        </li>
      `;
    });
    
    html += '</ul>';
    html += '</div>';
  }
  
  // Standalone Poems section
  if (standalonePoemPosts.length > 0) {
    html += '<div class="sidebar-section">';
    html += '<h3 class="sidebar-section-title">Standalone Poems</h3>';
    html += '<ul class="sidebar-nav-list">';
    
    standalonePoemPosts.forEach(post => {
      const isActive = post.slug === currentSlug ? 'active' : '';
      const displayTitle = getShortTitle(post.title);
      html += `
        <li class="sidebar-nav-item">
          <a href="post.html?slug=${post.slug}" class="sidebar-nav-link ${isActive}" title="${escapeHtml(post.title)}">
            ${escapeHtml(displayTitle)}
          </a>
        </li>
      `;
    });
    
    html += '</ul>';
    html += '</div>';
  }
  
  // Miscellaneous section
  if (miscPosts.length > 0) {
    html += '<div class="sidebar-section">';
    html += '<h3 class="sidebar-section-title">Miscellaneous Topics</h3>';
    html += '<ul class="sidebar-nav-list">';
    
    miscPosts.forEach(post => {
      const isActive = post.slug === currentSlug ? 'active' : '';
      html += `
        <li class="sidebar-nav-item">
          <a href="post.html?slug=${post.slug}" class="sidebar-nav-link ${isActive}" title="${escapeHtml(post.excerpt || post.title)}">
            ${escapeHtml(post.title)}
          </a>
        </li>
      `;
    });
    
    html += '</ul>';
    html += '</div>';
  }
  
  sidebarNav.innerHTML = html;
}

function getShortTitle(title) {
  // Remove "Daniel's Poem:" prefix for cleaner display
  if (title.startsWith("Daniel's Poem:")) {
    return title.replace("Daniel's Poem:", "").trim();
  }
  return title;
}

// About page initialization
function initAboutPage() {
  // Populate category menu for navigation only (doesn't need posts data)
  if (postsData) {
    populateCategoryMenu();
  }
  hideLoading();
  // Email form now uses native HTML form submission to Formspree
  // No need for JavaScript handling
}
