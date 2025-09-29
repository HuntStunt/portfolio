function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ===== Lightbox only (no hero swapping) =====
function initProjectImages() {
  document.addEventListener('click', function (e) {
    const t = e.target;
    if (t.matches('img[data-lightbox]')) {
      openLightbox(t.getAttribute('data-lightbox'), t.alt || 'Project image');
    }
  });
}

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

document.addEventListener('click', (e) => {
  if (e.target.matches('.lightbox-close') || e.target.id === 'lightbox') closeLightbox();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// Init
document.addEventListener('DOMContentLoaded', initProjectImages);

