const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

function scrollHeader() {
  const header = document.getElementById('header');
  if (window.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

const scrollUp = document.getElementById('scroll-up');
function showScrollUp() {
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', showScrollUp);

scrollUp.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const cookieNotification = document.getElementById('cookie-notification');
  const acceptCookiesBtn = document.getElementById('accept-cookies');


  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieNotification.style.display = 'none';
  } else {
    cookieNotification.style.display = 'flex';
  }

  acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieNotification.style.display = 'none';
  });
});

// API-დან მონაცემების წამოღება
async function fetchEvents() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Marimiroshnikova/event-api/refs/heads/main/events.json');
    const data = await response.json();
    const events = data.events || data;
    const eventsToShow = events.slice(0, 12);
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';
    
    eventsToShow.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.classList.add('product__card');
      eventCard.innerHTML = `
        <img src="${event.photo}" alt="${event.title}" class="product__img">
        <h3 class="product__title">${event.title}</h3>
        <p><strong>Date:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <a href="${event.link}" target="_blank" class="button">Learn More</a>
      `;
      eventsContainer.appendChild(eventCard);
    });
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchEvents);
