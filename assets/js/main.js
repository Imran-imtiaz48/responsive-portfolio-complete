// Example js

// Menu show and hide functionality
const menuToggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggleButton.addEventListener('click', () => {
  // Toggle menu visibility
  menu.classList.toggle('show');
});

// Example CSS classes for menu visibility
// .show { display: block; }
// .hide { display: none; }

// Active and remove menu functionality
const menuItems = document.querySelectorAll('#menu a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all menu items
    menuItems.forEach(i => i.classList.remove('active'));

    // Add 'active' class to the clicked menu item
    item.classList.add('active');
  });
});

// Scroll sections active link functionality
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#menu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
