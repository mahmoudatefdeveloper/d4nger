(() => {
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-navigation');
  const progress = document.querySelector('#scroll-progress');
  if (toggle && nav) {
    const close = () => { body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); };
    toggle.addEventListener('click', () => {
      const open = !body.classList.contains('nav-open');
      body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', e => { if (body.classList.contains('nav-open') && !nav.contains(e.target) && !toggle.contains(e.target)) close(); });
    window.matchMedia('(min-width: 821px)').addEventListener('change', close);
  }
  if (progress) {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0})`;
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(update); ticking = true; } }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }
})();
