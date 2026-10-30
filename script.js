// Carousel: bisa digeser (drag mouse / swipe jari) dan klik panah
document.querySelectorAll('.section').forEach(section => {
  const carousel = section.querySelector('.carousel');
  if (!carousel) return;

  // tombol panah
  section.querySelectorAll('.arrow').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = carousel.querySelector('.slide').offsetWidth + 20;
      carousel.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
    });
  });

  // drag dengan mouse (di HP swipe sudah otomatis)
  let down = false, startX = 0, startScroll = 0;
  carousel.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    down = true; startX = e.clientX; startScroll = carousel.scrollLeft;
    carousel.classList.add('dragging');
  });
  window.addEventListener('pointermove', e => {
    if (!down) return;
    carousel.scrollLeft = startScroll - (e.clientX - startX);
  });
  window.addEventListener('pointerup', () => {
    down = false;
    carousel.classList.remove('dragging');
  });
});