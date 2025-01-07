/**
 * main.js
 * ~~~~~~~
 * - Hamburger nav toggle
 * - FAQ accordion (with ARIA)
 * - Intersection Observer for fade-in
 */

document.addEventListener('DOMContentLoaded', () => {

  // NAV TOGGLE
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  // Toggle nav menu on hamburger click
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  // FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer      = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = (answer.style.display === 'block');

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.style.display = 'none';
      });
      // Reset aria-expanded on all
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
      });

      // Toggle this one
      answer.style.display = isOpen ? 'none' : 'block';
      questionBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });

  // FADE-IN SECTIONS ON SCROLL
  const fadeSections = document.querySelectorAll('.fade-section');
  const observerOpts = { threshold: 0.1 };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOpts);

  fadeSections.forEach(sec => fadeObserver.observe(sec));
});
