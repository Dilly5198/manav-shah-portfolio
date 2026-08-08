/**
 * Manav Shah - Official Player Profile
 * App Logic & Interactive Features
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initTabs();
  initHeroCounters();
  initScrollAnimations();
  initContactForm();
  initNavbarScroll();
});

/**
 * 1. Mobile Navigation Toggle
 */
function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!navToggle || !navLinks) return;

  const links = navLinks.querySelectorAll('a');

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : !navLinks.classList.contains('active');
    
    navLinks.classList.toggle('active', isExpanded);
    navToggle.classList.toggle('active', isExpanded);
    navToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    
    if (window.innerWidth <= 768) {
      navLinks.style.display = isExpanded ? 'flex' : '';
    }
  }

  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      toggleMenu(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu(false);
    }
  });
}

/**
 * 2. Interactive Tabs (Wins vs Records)
 */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  const tabWins = document.getElementById('tab-wins');
  const tabRecords = document.getElementById('tab-records');

  const winsGrid = tabWins ? tabWins.querySelector('.cards-grid') : document.querySelector('.wins-grid');
  const recordsGrid = tabRecords ? tabRecords.querySelector('.cards-grid') : document.querySelector('.records-grid');

  if (winsGrid && !winsGrid.classList.contains('wins-grid')) {
    winsGrid.classList.add('wins-grid');
  }
  if (recordsGrid && !recordsGrid.classList.contains('records-grid')) {
    recordsGrid.classList.add('records-grid');
  }

  function switchTab(targetTabId) {
    tabBtns.forEach(btn => {
      const btnTarget = btn.getAttribute('data-tab') || (btn.id === 'btn-wins' ? 'tab-wins' : 'tab-records');
      const isTarget = btnTarget === targetTabId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    tabContents.forEach(content => {
      const isTarget = content.id === targetTabId;
      content.classList.toggle('active', isTarget);
      content.setAttribute('aria-hidden', isTarget ? 'false' : 'true');

      if (isTarget) {
        content.style.display = 'block';
        setTimeout(() => {
          content.style.opacity = '1';
          content.style.visibility = 'visible';
        }, 10);
      } else {
        content.style.opacity = '0';
        content.style.visibility = 'hidden';
        content.style.display = 'none';
      }
    });

    if (winsGrid) {
      winsGrid.classList.toggle('active', targetTabId === 'tab-wins');
    }
    if (recordsGrid) {
      recordsGrid.classList.toggle('active', targetTabId === 'tab-records');
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab') || (btn.id === 'btn-wins' ? 'tab-wins' : 'tab-records');
      switchTab(targetTabId);
    });
  });

  // Default to Professional Wins tab
  switchTab('tab-wins');
}

/**
 * 3. Hero Metric Counter Animation
 */
function initHeroCounters() {
  const statNumbers = document.querySelectorAll('.stat-number, .metric-number[data-target]');
  if (statNumbers.length === 0) return;

  function runCounters() {
    statNumbers.forEach(statEl => {
      const target = parseInt(statEl.getAttribute('data-target') || statEl.textContent.trim(), 10);
      if (isNaN(target)) return;

      const duration = 1800; // 1.8 seconds animation
      const startTime = performance.now();
      statEl.textContent = '0';

      function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Quadratic ease-out formula
        const easeProgress = 1 - Math.pow(1 - progress, 2);
        const currentCount = Math.floor(easeProgress * target);

        statEl.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          statEl.textContent = target;
        }
      }

      requestAnimationFrame(updateCount);
    });
  }

  // Animate on page load
  runCounters();
}

/**
 * 4. Scroll Fade-In Animations (Intersection Observer)
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.section, .timeline-item, .glass-card, .section-header, .story-grid, .partner-card, .record-card'
  );

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('visible');
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      } else {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
        observer.observe(el);
      }
    });
  } else {
    animatedElements.forEach(el => {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
}

/**
 * 5. Contact Form Submission & Accessibility Handling
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const successOverlay = document.getElementById('contact-success');

  if (!contactForm || !successOverlay) return;

  // Initial state: hidden with aria-hidden="true"
  successOverlay.setAttribute('aria-hidden', 'true');
  successOverlay.style.display = 'none';
  successOverlay.style.opacity = '0';
  successOverlay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  // Add dismiss close button if not present
  if (!successOverlay.querySelector('.overlay-close-btn')) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'overlay-close-btn';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close message');
    closeBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    `;
    closeBtn.style.cssText = `
      position: absolute;
      top: 16px;
      right: 16px;
      background: transparent;
      border: none;
      color: #8fa298;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    closeBtn.addEventListener('click', () => hideSuccessOverlay());
    successOverlay.style.position = 'relative';
    successOverlay.appendChild(closeBtn);
  }

  function hideSuccessOverlay() {
    successOverlay.classList.remove('active');
    successOverlay.setAttribute('aria-hidden', 'true'); // Accessibility toggle
    successOverlay.style.opacity = '0';
    setTimeout(() => {
      successOverlay.style.display = 'none';
    }, 300);
  }

  function showSuccessOverlay() {
    successOverlay.style.display = 'flex';
    successOverlay.style.flexDirection = 'column';
    successOverlay.style.alignItems = 'center';
    successOverlay.style.justifyContent = 'center';
    successOverlay.style.textAlign = 'center';

    void successOverlay.offsetWidth; // Force reflow for transition

    successOverlay.classList.add('active');
    successOverlay.setAttribute('aria-hidden', 'false'); // Accessibility requirement!
    successOverlay.style.opacity = '1';

    // Set focus for screen readers
    successOverlay.setAttribute('tabindex', '-1');
    successOverlay.focus();
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectSelect = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    let isValid = true;

    const fields = [
      { input: nameInput, validate: v => v.trim().length > 0 },
      { input: emailInput, validate: v => validateEmail(v.trim()) },
      { input: subjectSelect, validate: v => v && v.trim().length > 0 },
      { input: messageInput, validate: v => v.trim().length > 0 }
    ];

    fields.forEach(({ input, validate }) => {
      if (!input) return;
      if (!validate(input.value)) {
        isValid = false;
        input.classList.add('input-error');
        input.style.borderColor = '#e63946';
      } else {
        input.classList.remove('input-error');
        input.style.borderColor = '';
      }
    });

    if (!isValid) {
      const firstInvalid = contactForm.querySelector('.input-error');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Clear inputs on successful submission
    contactForm.reset();

    fields.forEach(({ input }) => {
      if (input) {
        input.classList.remove('input-error');
        input.style.borderColor = '';
      }
    });

    // Display success overlay panel
    showSuccessOverlay();
  });

  contactForm.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('input-error');
      input.style.borderColor = '';
    });
  });
}

/**
 * 6. Navbar Scroll Background Header Styling
 */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}
