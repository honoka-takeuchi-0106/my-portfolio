(() => {
  'use strict';

  /* ===== Theme ===== */
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const applyTheme = (theme) => {
    html.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え');
  };

  applyTheme(localStorage.getItem('theme') ?? getSystemTheme());

  themeBtn.addEventListener('click', () => {
    applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  /* ===== Language ===== */
  const langBtn = document.getElementById('lang-toggle');

  const getSystemLang = () =>
    navigator.language.startsWith('ja') ? 'ja' : 'en';

  const applyLang = (lang) => {
    html.lang = lang;
    localStorage.setItem('lang', lang);
    langBtn.textContent = lang === 'ja' ? 'EN' : 'JA';
    langBtn.setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替え');
    document.querySelectorAll('[data-i18n-ja]').forEach((el) => {
      el.textContent = el.dataset[lang === 'ja' ? 'i18nJa' : 'i18nEn'];
    });
  };

  applyLang(localStorage.getItem('lang') ?? getSystemLang());

  langBtn.addEventListener('click', () => {
    applyLang(html.lang === 'ja' ? 'en' : 'ja');
  });

  /* ===== Mobile Nav ===== */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });

  // Close on link click
  navMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ===== Smooth Scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      target.focus({ preventScroll: true });
    });
  });

  /* ===== Scroll Reveal ===== */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

})();
