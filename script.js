function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ===== Simple gallery: swap hero on thumb click =====
function initProjectGalleries() {
  document.addEventListener('click', function (e) {
    const t = e.target;
    // Thumbnail click: swap the hero image within the same project
    if (t.matches('.thumbs img[data-hero][data-src]')) {
      const heroSel = t.getAttribute('data-hero');
      const hero = document.querySelector(heroSel);
      if (hero) {
        hero.src = t.getAttribute('data-src');
        hero.setAttribute('data-lightbox', t.getAttribute('data-src'));
        // active border
        t.closest('.thumbs').querySelectorAll('img').forEach(img => img.classList.remove('active'));
        t.classList.add('active');
      }
    }
    // Any image with data-lightbox opens viewer
    if (t.matches('img[data-lightbox]')) {
      openLightbox(t.getAttribute('data-lightbox'), t.alt || 'Project image');
    }
  });
}

// ===== Lightbox (click background, close button, or Escape to exit) =====
function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lb || !img) return;
  img.src = src;
  img.alt = alt || 'Project image';
  lb.classList.remove('hidden');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.add('hidden');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Close handlers
document.addEventListener('click', (e) => {
  if (e.target.matches('.lightbox-close') || e.target.id === 'lightbox') closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Init
document.addEventListener('DOMContentLoaded', initProjectGalleries);
