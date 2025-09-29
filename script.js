function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Thumbnail click -> swap the target hero image (no popups)
function initThumbSwap() {
  document.addEventListener('click', function (e) {
    const t = e.target;
    if (!t.classList.contains('js-swap')) return;

    const heroSel = t.getAttribute('data-hero');
    const newSrc  = t.getAttribute('data-src');
    if (!heroSel || !newSrc) return;

    const hero = document.querySelector(heroSel);
    if (!hero) return;

    // swap
    hero.src = newSrc;

    // update active state
    const group = t.parentElement; // .thumbs
    if (group) {
      group.querySelectorAll('img').forEach(img => img.removeAttribute('aria-current'));
      t.setAttribute('aria-current', 'true');
    }
  });
}

document.addEventListener('DOMContentLoaded', initThumbSwap);

