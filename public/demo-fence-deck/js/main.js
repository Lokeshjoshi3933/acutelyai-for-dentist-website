/* ==========================================================================
   Cedar Ridge Fence & Deck Co. - Main Javascript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollReveal();
  initFaqAccordion();
  initContactForm();
  initMockReviews();
});

/**
 * Sticky Header Scroll Behavior
 */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Run on load and on scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

/**
 * Mobile Drawer Menu Toggling
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    // Prevent background scrolling when menu is open
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Scroll Reveal Animation fallback using IntersectionObserver (e.g. for Firefox)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length === 0) return;

  // Check if browser natively supports CSS scroll-driven timelines
  const supportsCSSScrollTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');

  if (!supportsCSSScrollTimeline) {
    const observerOptions = {
      root: null, // viewport
      threshold: 0.15, // trigger when 15% visible
      rootMargin: '0px 0px -50px 0px' // offset trigger slightly
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to track it anymore
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      observer.observe(el);
    });
  } else {
    // Browser supports native CSS timelines, so we don't need IntersectionObserver.
    // However, we make sure they are active if JS loads late or layout shifts.
    revealElements.forEach(el => {
      el.classList.add('active');
    });
  }
}

/**
 * FAQ Accordion Panel Toggles
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all open items first for a clean accordion accordion effect
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Contact & Free Quote Form Handling with Recovery
 */
function initContactForm() {
  const form = document.getElementById('quoteForm');
  const successOverlay = document.querySelector('.form-success-overlay');
  
  if (!form) return;

  // Fields to cache in localStorage for recovery
  const cacheFields = ['name', 'phone', 'email', 'city', 'service', 'timeline', 'details'];

  // Load cached form inputs from localStorage if present
  cacheFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      const cachedValue = localStorage.getItem(`cedar_ridge_draft_${fieldId}`);
      if (cachedValue) {
        field.value = cachedValue;
      }
      
      // Save input changes on-the-fly
      field.addEventListener('input', () => {
        localStorage.setItem(`cedar_ridge_draft_${fieldId}`, field.value);
      });
    }
  });

  // Handle mock submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Perform basic validation checks
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const city = document.getElementById('city').value;
    const service = document.getElementById('service').value;

    if (!name || !phone || !email || !city || !service) {
      alert('Please fill out all required fields marked with an asterisk (*).');
      return;
    }

    // Trigger Success UI Overlay
    if (successOverlay) {
      successOverlay.classList.add('active');
      
      // Clear localStorage cache drafts
      cacheFields.forEach(fieldId => {
        localStorage.removeItem(`cedar_ridge_draft_${fieldId}`);
      });

      // Reset form
      form.reset();
      
      // Smooth scroll back to top of the form card so user sees success message
      successOverlay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  // Close success overlay button logic (if user wants to submit another)
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  if (closeSuccessBtn && successOverlay) {
    closeSuccessBtn.addEventListener('click', () => {
      successOverlay.classList.remove('active');
    });
  }
}

/**
 * Reviews Page - Submission and Star Filters Mock Logic
 */
function initMockReviews() {
  const reviewsForm = document.getElementById('reviewsForm');
  if (!reviewsForm) return;

  reviewsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('revName').value.trim();
    const city = document.getElementById('revCity').value.trim();
    const service = document.getElementById('revService').value;
    const rating = document.getElementById('revRating').value;
    const text = document.getElementById('revText').value.trim();

    if (!name || !city || !rating || !text) {
      alert('Please fill out all fields to submit your review.');
      return;
    }

    // Insert mock card in the reviews list dynamically
    const reviewsContainer = document.querySelector('.reviews-container');
    if (reviewsContainer) {
      const card = document.createElement('div');
      card.className = 'review-card scroll-reveal active'; // Active directly
      
      // Build star symbols
      let starsHTML = '';
      for (let i = 1; i <= 5; i++) {
        starsHTML += i <= rating ? '★' : '☆';
      }

      card.innerHTML = `
        <div class="review-stars">${starsHTML}</div>
        <p class="review-text">"${text}"</p>
        <div class="review-author">
          <span class="author-name">${name}</span>
          <span class="author-location">${city}, TN</span>
          <span class="review-service-badge">${service}</span>
        </div>
      `;

      // Insert at the top of the container
      reviewsContainer.insertBefore(card, reviewsContainer.firstChild);
      
      // Reset form
      reviewsForm.reset();
      
      alert('Thank you! Your review has been added to our board.');
    }
  });
}
