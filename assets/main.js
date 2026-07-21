const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

function updateHeader() {
  if (header) header.classList.toggle('scrolled', window.scrollY > 16);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
