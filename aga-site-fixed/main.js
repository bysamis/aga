(function () {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.querySelector('.nav__menu');
  const menuLinks = menu.querySelectorAll('a');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const lightboxClose = lightbox.querySelector('.lightbox__close');
  const galleryItems = document.querySelectorAll('.gallery__item');

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
      openLightbox(item.dataset.src, item.dataset.alt);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
})();
