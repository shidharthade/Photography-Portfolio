document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function openLightbox(img) {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

galleryGrid.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (img) openLightbox(img);
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});
