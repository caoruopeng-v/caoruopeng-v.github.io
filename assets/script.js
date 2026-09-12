// ---- sticky nav background on scroll ----
const nav = document.getElementById('siteNav');
const onScroll = () => {
  if (window.scrollY > 12) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- accordion: only one work item open at a time within its own list ----
document.querySelectorAll('.work-list').forEach((list) => {
  const items = list.querySelectorAll('.work-item');
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        items.forEach((other) => {
          if (other !== item) other.open = false;
        });
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
});

// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();
