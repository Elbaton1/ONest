/**
 * main.js
 * ~~~~~~~
 * - Hamburger nav toggle
 * - FAQ accordion
 * - Intersection Observer for fade-in on scroll
 */

document.addEventListener('DOMContentLoaded', () => {

  // NAV TOGGLE
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

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
      // close all others first
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
      // toggle this one
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });

  // FADE-IN SECTIONS
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
