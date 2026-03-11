/**
 * Metodo Zero v20
 */

document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initForms();
  initPhoneInput();
  initYear();
  initWhatsAppTracking();

  // Lazy load modules
  lazyLoadModule('.feedback-swiper', initSwiper);
  initParallax();
  initLightbox();
});

/* ==========================================
   WHATSAPP CLICK TRACKING (GTM)
   ========================================== */

function initWhatsAppTracking() {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'whatsapp_click',
        click_url: link.href,
        click_location: link.classList.contains('whatsapp-float') ? 'floating_button' : 'footer'
      });
    });
  });
}

/* ==========================================
   AOS
   ========================================== */

function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
      disableMutationObserver: true
    });
  }
}

/* ==========================================
   FORMULARIOS
   ========================================== */

const tempEmailDomains = [
  'tempmail', 'guerrillamail', '10minutemail', 'mailinator',
  'throwaway', 'fakeinbox', 'yopmail', 'trashmail', 'temp-mail',
  'disposable', 'sharklasers'
];

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return false;
  const domain = email.split('@')[1].toLowerCase();
  return !tempEmailDomains.some(temp => domain.includes(temp));
}

function initForms() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('[type="submit"]');
  const feedback = form.querySelector('.form-feedback');

  // Validacao
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    field.classList.remove('error');

    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }

    if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
      field.classList.add('error');
      valid = false;
    }

    if (field.type === 'tel') {
      const iti = field._iti;
      if (iti && !iti.isValidNumber()) {
        field.classList.add('error');
        valid = false;
      }
    }
  });

  if (!valid) {
    showFeedback(feedback, 'error', 'Preencha todos os campos corretamente.');
    return;
  }

  // Captura nome e email ANTES do envio (form.reset limpa os campos)
  const nome = form.querySelector('[name="nome"]')?.value || '';
  const email = form.querySelector('[name="email"]')?.value || '';

  // Telefone internacional - pega instancia do input DESTE form
  const phone = form.querySelector('input[type="tel"]');
  if (phone && phone._iti) {
    phone.value = phone._iti.getNumber();
  }

  // Envio
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const res = await fetch(form.getAttribute('action') || window.location.pathname, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    if (res.ok) {
      // Meta Pixel
      if (typeof fbq === 'function') {
        fbq('track', 'Lead');
      }

      // GTM dataLayer
      if (typeof dataLayer !== 'undefined') {
        dataLayer.push({ event: 'generate_lead', form_name: form.getAttribute('name') || 'contato', method: 'netlify_form' });
      }

      // Redirect com parametros
      const action = form.getAttribute('action');
      if (action) {
        const redirectUrl = new URL(action, window.location.origin);

        // Repassa todos os parametros da URL atual (utm_source, fbclid, etc)
        new URLSearchParams(window.location.search).forEach((value, key) => {
          redirectUrl.searchParams.set(key, value);
        });

        // Passa nome e email como parametros
        if (nome) redirectUrl.searchParams.set('nome', nome);
        if (email) redirectUrl.searchParams.set('email', email);

        window.location.href = redirectUrl.toString();
        return;
      }

      // Fallback: mostrar mensagem (quando nao tem action)
      showFeedback(feedback, 'success', 'Mensagem enviada com sucesso!');
      form.reset();
      if (phone && phone._iti) phone._iti.setNumber('');
    } else {
      throw new Error('Erro');
    }
  } catch {
    showFeedback(feedback, 'error', 'Erro ao enviar. Tente novamente.');
  } finally {
    btn.disabled = false;
    btn.textContent = originalText;
  }
}

function showFeedback(el, type, msg) {
  if (!el) return;
  el.className = 'form-feedback ' + type;
  el.textContent = msg;
  setTimeout(() => {
    el.className = 'form-feedback';
    el.textContent = '';
  }, 5000);
}

/* ==========================================
   TELEFONE INTERNACIONAL
   ========================================== */

function initPhoneInput() {
  if (typeof intlTelInput === 'undefined') return;

  document.querySelectorAll('input[type="tel"]').forEach(input => {
    input._iti = intlTelInput(input, {
      initialCountry: 'br',
      preferredCountries: ['br', 'us', 'pt'],
      separateDialCode: true,
      strictMode: true,
      loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
    });
  });
}

/* ==========================================
   UTILS
   ========================================== */

function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ==========================================
   INTERSECTIONS & LAZY LOAD
   ========================================== */

function lazyLoadModule(selector, loadFn) {
  const el = document.querySelector(selector);
  if (!el) return;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { 
      obs.disconnect(); 
      loadFn(); 
    }
  }, { rootMargin: '200px' });
  obs.observe(el);
}

/* ==========================================
   SWIPER (PROVA SOCIAL)
   ========================================== */

async function initSwiper() {
  try {
    const { default: Swiper } = await import('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs');
    
    // Lazy load Swiper CSS
    if (!document.getElementById("swiper-css")) {
      const link = document.createElement("link");
      link.id = "swiper-css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      document.head.appendChild(link);
    }
    new Swiper('.feedback-swiper', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  } catch(e) {
    console.warn("Failed to load Swiper", e);
  }
}

/* ==========================================
   PARALLAX
   ========================================== */

function initParallax() {
  const parallaxImg = document.querySelector('.cinematic-bg-img');
  const section = document.querySelector('.section-cinematic');
  
  if (!parallaxImg || !section) return;

  window.addEventListener('scroll', () => {
    // Parallax logic via requestAnimationFrame for performance
    requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      // Se a secao esta na tela
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Translate parallax (velocidade 0.5x)
        const scrollDist = window.innerHeight - rect.top;
        const translateY = scrollDist * 0.2; // adjusted for subtle effect
        parallaxImg.style.transform = `translateY(${translateY}px)`;
      }
    });
  }, { passive: true });
}


/* ==========================================
   LIGHTBOX (PORTFÓLIO)
   ========================================== */

function initLightbox() {
  const overlay = document.getElementById('portfolio-lightbox');
  const lightboxImg = overlay ? overlay.querySelector('.lightbox-img') : null;
  const closeBtn = overlay ? overlay.querySelector('.lightbox-close') : null;
  
  if (!overlay || !lightboxImg) return;

  // Abrir ao clicar em qualquer card
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const thumb = card.querySelector('.portfolio-thumb');
      if (!thumb) return;
      // Usa a URL original em alta resolução (w=1200)
      const src = thumb.src.replace(/w=\d+/, 'w=1200');
      lightboxImg.src = src;
      lightboxImg.alt = thumb.alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Fechar com o botão X
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // Fechar clicando fora da imagem
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}


/* ==========================================
   THIRD-PARTY EXPERIMENT (GTM)
   ========================================== */
function loadThirdParty() {
    // Carrega GTM
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KCJ3FFCM');
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => { loadThirdParty(); });
} else {
  setTimeout(() => { loadThirdParty(); }, 3000);
}

