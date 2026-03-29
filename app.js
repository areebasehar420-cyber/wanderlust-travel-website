// ========== DATA ==========
const destinations = [
  { id:1, name:"Santorini", country:"Greece", img:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80", price:"$1,299", rating:"4.9", trips:240 },
  { id:2, name:"Bali", country:"Indonesia", img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", price:"$899", rating:"4.8", trips:380 },
  { id:3, name:"Machu Picchu", country:"Peru", img:"https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80", price:"$1,499", rating:"4.9", trips:190 },
  { id:4, name:"Amalfi Coast", country:"Italy", img:"https://images.unsplash.com/photo-1612701571050-19db4b6c39a0?w=600&q=80", price:"$1,199", rating:"4.7", trips:215 },
  { id:5, name:"Kyoto", country:"Japan", img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", price:"$1,399", rating:"4.8", trips:310 },
  { id:6, name:"Maldives", country:"Indian Ocean", img:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80", price:"$2,499", rating:"5.0", trips:175 },
  { id:7, name:"Patagonia", country:"Argentina", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", price:"$1,699", rating:"4.9", trips:130 },
  { id:8, name:"Dubrovnik", country:"Croatia", img:"https://images.unsplash.com/photo-1555990538-1a2f9b5b4c74?w=600&q=80", price:"$1,099", rating:"4.7", trips:265 },
];

const packages = [
  {
    id:1, name:"Mediterranean Dream", badge:"Most Popular", duration:"10 Days", people:"2 People",
    img:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=700&q=80",
    desc:"Island-hopping through Greece and Italy with private yacht transfers and luxury villa stays.",
    price:"$3,499", oldPrice:"$4,200"
  },
  {
    id:2, name:"Asian Odyssey", badge:"Best Value", duration:"14 Days", people:"2-4 People",
    img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80",
    desc:"Explore Tokyo, Kyoto, Bali and Bangkok with expert local guides and boutique hotels.",
    price:"$2,899", oldPrice:"$3,500"
  },
  {
    id:3, name:"African Safari", badge:"Adventure", duration:"8 Days", people:"2-6 People",
    img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
    desc:"Witness the Big Five on a luxury tented safari across the Serengeti and Ngorongoro Crater.",
    price:"$4,199", oldPrice:"$5,000"
  },
  {
    id:4, name:"South America Escape", badge:"Explorer", duration:"12 Days", people:"2 People",
    img:"https://images.unsplash.com/photo-1476440929699-cb36ee10a2f5?w=700&q=80",
    desc:"Machu Picchu, Patagonia glaciers, and Rio de Janeiro — the ultimate South American adventure.",
    price:"$3,299", oldPrice:"$4,100"
  },
  {
    id:5, name:"Nordic Winter Magic", badge:"Seasonal", duration:"7 Days", people:"2 People",
    img:"https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&q=80",
    desc:"Chase the Northern Lights across Norway and Iceland with cozy fjord-side lodges.",
    price:"$2,699", oldPrice:"$3,200"
  },
  {
    id:6, name:"Maldives Overwater Bliss", badge:"Luxury", duration:"6 Days", people:"2 People",
    img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&q=80",
    desc:"Private overwater bungalow, sunset cruises, and world-class snorkeling in crystal-clear waters.",
    price:"$5,499", oldPrice:"$6,500"
  },
];

const testimonials = [
  { text:"Wanderlust turned our honeymoon into a fairy tale. Every detail was perfect, from the private villa in Santorini to the candlelit dinners. We can't wait to book our next adventure with them.", name:"Emily & James", dest:"Santorini, Greece", avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", stars:5 },
  { text:"The African Safari package exceeded every expectation. Our guide was incredible and we saw the Big Five on day two! The tented camp felt luxurious yet authentic. Absolutely transformative.", name:"Michael Torres", dest:"Serengeti, Tanzania", avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", stars:5 },
  { text:"I've traveled with many agencies but Wanderlust is on another level. The Asian Odyssey itinerary was perfectly balanced — culture, food, relaxation. I felt taken care of at every step.", name:"Aisha Patel", dest:"Japan & Bali", avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", stars:5 },
  { text:"The Nordic Winter package was my dream trip. Seeing the Northern Lights from our glass cabin was surreal. Wanderlust handled everything so we could just experience the magic.", name:"Lars Bergström", dest:"Norway & Iceland", avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", stars:5 },
  { text:"Solo travel can be daunting but Wanderlust made me feel safe and supported throughout South America. Amazing destinations, wonderful local guides, unforgettable memories.", name:"Sophie Chen", dest:"South America", avatar:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&q=80", stars:5 },
];

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderPackages();
  renderTestimonials();
  initHeroSlider();
  initNavScroll();
  initSearchTabs();
  initRevealAnimations();
  initCounters();
  initHamburger();
});

// ========== DESTINATIONS ==========
let showingDest = 4;
function renderDestinations() {
  const grid = document.getElementById('destGrid');
  grid.innerHTML = '';
  const slice = destinations.slice(0, showingDest);
  slice.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'dest-card reveal';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <img src="${d.img}" alt="${d.name}" loading="lazy"/>
      <div class="dest-overlay"></div>
      <div class="dest-rating">★ ${d.rating}</div>
      <div class="dest-price">from ${d.price}</div>
      <div class="dest-info">
        <h3>${d.name}</h3>
        <p>📍 ${d.country} · ${d.trips} trips booked</p>
      </div>`;
    card.addEventListener('click', () => openBookFromDest(d.name));
    grid.appendChild(card);
  });
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }, 100);
}

function loadMoreDest() {
  showingDest = showingDest >= destinations.length ? 4 : destinations.length;
  renderDestinations();
}

// ========== PACKAGES ==========
function renderPackages() {
  const grid = document.getElementById('pkgGrid');
  packages.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pkg-card reveal';
    card.innerHTML = `
      <div class="pkg-img"><img src="${p.img}" alt="${p.name}" loading="lazy"/></div>
      <div class="pkg-body">
        <span class="pkg-badge">${p.badge}</span>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="pkg-meta">
          <span>🕐 ${p.duration}</span>
          <span>👥 ${p.people}</span>
        </div>
        <div class="pkg-footer">
          <div>
            <div class="pkg-price">${p.price} <span>/ person</span></div>
            <small style="color:var(--muted);text-decoration:line-through">${p.oldPrice}</small>
          </div>
          <button class="btn-primary" onclick="openBookFromDest('${p.name}')">Book Now</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ========== TESTIMONIALS ==========
let testiIndex = 0;
function renderTestimonials() {
  const slider = document.getElementById('testiSlider');
  const track = document.createElement('div');
  track.className = 'testi-track';
  track.id = 'testiTrack';
  testimonials.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testi-card';
    card.innerHTML = `
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <img src="${t.avatar}" alt="${t.name}" class="testi-avatar"/>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-dest">📍 ${t.dest}</div>
        </div>
      </div>`;
    track.appendChild(card);
  });
  slider.appendChild(track);
}
function nextTesti() {
  const track = document.getElementById('testiTrack');
  const isMobile = window.innerWidth <= 900;
  const max = isMobile ? testimonials.length - 1 : testimonials.length - 3;
  testiIndex = Math.min(testiIndex + 1, max);
  const cardW = track.children[0]?.offsetWidth + 32 || 0;
  track.style.transform = `translateX(-${testiIndex * cardW}px)`;
}
function prevTesti() {
  const track = document.getElementById('testiTrack');
  testiIndex = Math.max(testiIndex - 1, 0);
  const cardW = track.children[0]?.offsetWidth + 32 || 0;
  track.style.transform = `translateX(-${testiIndex * cardW}px)`;
}

// ========== HERO SLIDER ==========
let heroIndex = 0;
let heroInterval;
function initHeroSlider() {
  heroInterval = setInterval(() => switchHero((heroIndex + 1) % 3), 5000);
}
function switchHero(idx) {
  document.querySelectorAll('.hero-img').forEach((img, i) => img.classList.toggle('active', i === idx));
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  heroIndex = idx;
}

// ========== NAVBAR SCROLL ==========
function initNavScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ========== SEARCH TABS ==========
function initSearchTabs() {
  document.querySelectorAll('.stab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// ========== HAMBURGER ==========
function initHamburger() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
  });
}

// ========== REVEAL ANIMATIONS ==========
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========== COUNTER ANIMATION ==========
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// ========== MODALS ==========
function openModal(id) { document.getElementById(id).classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('active'); document.body.style.overflow = ''; }
function openBookFromDest(name) {
  openModal('bookModal');
  const destInput = document.querySelector('#bookModal input[type="text"]');
  if (destInput) destInput.value = name;
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
  }
});

// ========== TOAST ==========
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ========== FORM HANDLERS ==========
function handleSearch() {
  const dest = document.getElementById('searchDest').value;
  const date = document.getElementById('searchDate').value;
  const guests = document.getElementById('searchGuests').value;
  if (!dest) { showToast('⚠️ Please enter a destination'); return; }
  showToast(`🔍 Searching trips to "${dest}" for ${guests}...`);
  // POST to backend: /api/search
  fetch('http://localhost:5000/api/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ destination: dest, date, guests })
  }).then(r => r.json()).then(data => {
    showToast(`✅ Found ${data.count || 'multiple'} trips! Check results.`);
  }).catch(() => {
    // Backend not connected — just show UI feedback
    showToast(`✅ Found trips to ${dest}! Backend not connected yet.`);
  });
}

function submitBooking(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  showToast('✅ Booking request submitted! We\'ll contact you shortly.');
  // POST to backend: /api/bookings
  fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData))
  }).catch(() => {}); // graceful fail
  closeModal('bookModal');
  e.target.reset();
}

function submitLogin(e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  // POST to backend: /api/auth/login
  fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(r => r.json()).then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      showToast(`✅ Welcome back, ${data.user?.name || 'Traveler'}!`);
      closeModal('loginModal');
    } else {
      showToast('❌ ' + (data.message || 'Login failed.'));
    }
  }).catch(() => {
    showToast('✅ Login UI works! Connect the backend to authenticate.');
    closeModal('loginModal');
  });
  e.target.reset();
}

function handleContact(e) {
  e.preventDefault();
  showToast('✉️ Message sent! We\'ll reply within 24 hours.');
  // POST to backend: /api/contact
  fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: e.target[0].value, email: e.target[1].value, subject: e.target[2].value, message: e.target[3].value })
  }).catch(() => {});
  e.target.reset();
}

function handleNewsletter(e) {
  e.preventDefault();
  const email = e.target[0].value;
  showToast('🎉 Subscribed! Welcome to the Wanderlust family.');
  // POST to backend: /api/newsletter
  fetch('http://localhost:5000/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  }).catch(() => {});
  e.target.reset();
}