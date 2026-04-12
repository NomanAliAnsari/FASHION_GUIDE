/* ════════════════════════════════════════════
   FASHION GUIDE — script.js
   Garment Manufacturer & Bulk Supplier, Delhi

   ★ TO CUSTOMISE: Edit only the CONFIG object
     at the top. All links, text, and data
     are generated from it automatically.
   ════════════════════════════════════════════ */

"use strict";

/* ══════════════════════════════════════════════
   ★★★  EASY EDIT CONFIG  ★★★
   Change brand details, phone, and links here.
══════════════════════════════════════════════ */
const CONFIG = {
  brand:      "FASHION GUIDE",
  tagline:    "Garment Manufacturer & Wholesale Supplier",
  phone:      "7835872848",              // digits only, no spaces
  phoneDisplay: "+91 78358 72848",       // shown to users
  whatsappMsg: `• Hi Fashion Guide! \n• Contacting you From your Website. \n• I'm interested in a bulk order. \n• Please share details about your products and pricing.`,
  address:    {
    line1:  "406-B, Street No-10, Block-O, Sauravh Vihar",
    line2:  "Jaitpur, Badarpur",
    city:   "New Delhi – 110044",
    full:   "406-B, Block-O, Sauravh Vihar, Jaitpur, Badarpur, New Delhi – 110044"
  },
  googleMapsLink: "https://goo.gl/maps/sepaGpi72Wr8pW289",
  meeshoStore:    "https://www.meesho.com/FASHIONGUIDE53318",
  year:           new Date().getFullYear(),
};

/* ══════════════════════════════════════════════
   PRODUCT CATEGORIES
   Edit name, description, price, icon, or url.
══════════════════════════════════════════════ */
const CATEGORIES = [
  {
    name:   "Sweater & Sweatshirts",
    desc:   "Cosy women's knits and sweatshirts perfect for all seasons.",
    price:  "₹249 – ₹342",
    icon:   "🧥",
    url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=346&Category[0][label]=Sweater%20And%20Sweatshirts&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiMzQ2In0%3D",
    // 🔁 Replace these 4 URLs with your actual product photos later
    images: [
      "./images/seater_sweatshirt_1.avif",
      "./images/seater_sweatshirt_2.avif",
      "./images/seater_sweatshirt_3.avif",
      "./images/seater_sweatshirt_4.avif",
    ],
  },
  {
    name:   "Women Tops & Tunics",
    desc:   "Trendy tops and tunics for everyday casual and formal wear.",
    price:  "₹153 – ₹369",
    icon:   "👚",
    url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=5170&Category[0][label]=%20Women%20Tops%20And%20Tunics&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiNTE3MCJ9",
    images: [
      "./images/tops_tunics_1.avif",
      "./images/tops_tunics_2.avif",
      "./images/tops_tunics_3.avif",
      "./images/tops_tunics_4.avif",
    ],
  },
  {
    name:   "Women Trousers & Pants",
    desc:   "Comfortable, well-fitted women's trousers for daily wear.",
    price:  "₹188 – ₹360",
    icon:   "👖",
    url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=5172&Category[0][label]=%20Women%20Trousers%20%26%20Pants&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiNTE3MiJ9",
    images: [
      "./images/trouser_pants_1.avif",
      "./images/trouser_pants_2.avif",
      "./images/trouser_pants_3.avif",
      "./images/trouser_pants_4.avif",
    ],
  },
  {
    name:   "Women Kurtis",
    desc:   "Ethnic and fusion kurtis for women — casual, office & festive.",
    price:  "₹222",
    icon:   "👘",
    url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=5202&Category[0][label]=Women%20Kurtis&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiNTIwMiJ9",
    images: [
      "./images/kurti_1.avif",
      "./images/kurti_2.avif",
      "./images/kurti_3.avif",
      "./images/kurti_4.avif",
      "./images/kurti_5.avif",
    ],
  },
  {
    name:   "Palazzos",
    desc:   "Wide-leg palazzos in premium fabric — light, breezy and stylish.",
    price:  "₹178 – ₹289",
    icon:   "👖",
    url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=323&Category[0][label]=Palazzos&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiMzIzIn0%3D",
    images: [
      "./images/plazzo_1.avif",
      "./images/plazzo_2.avif",
      "./images/plazzo_3.avif",
      "./images/plazzo_4.avif",
    ],
  },
  {
    name:   "Tops & Bottom Sets",
    desc:   "Matching co-ord sets — tops paired with bottoms for a complete look.",
    price:  "₹355 – ₹360",
    icon:   "👗",
    url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=348&Category[0][label]=Tops%20And%20Bottom%20Sets&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJwbIsInZhbHVlIjoiMzQ4In0%3D",
    images: [
      "./images/top_botton_set_1.avif",
      "./images/top_botton_set_2.avif",
    ],
  },
  // {
  //   name:   "Trousers & Pants",
  //   desc:   "Classic and modern trousers — versatile styles for all occasions.",
  //   price:  "₹188 – ₹360",
  //   icon:   "",
  //   url:    "https://www.meesho.com/FASHIONGUIDE53318?Gender[0][id]=443&Gender[0][label]=Women&Gender[0][payload]=eyJmaWVsZCI6ImxhYmVscy45Iiwib3AiOiJpbiIsInZhbHVlIjoiNDQzIn0%3D&Category[0][id]=352&Category[0][label]=Trousers%20%26%20Pants&Category[0][payload]=eyJmaWVsZCI6ImxhYmVscy4xIiwib3AiOiJpbiIsInZhbHVlIjoiMzUyIn0%3D",
  // },
];

/* ══════════════════════════════════════════════
   WHY CHOOSE US
══════════════════════════════════════════════ */
const WHY_POINTS = [
  {
    icon:  "🏭",
    title: "Direct Manufacturer",
    desc:  "We manufacture garments in-house at our Delhi unit — no agents, no middlemen, just factory-direct pricing.",
  },
  {
    icon:  "💰",
    title: "Wholesale Pricing",
    desc:  "Highly competitive bulk prices that give resellers and boutique owners excellent margins.",
  },
  {
    icon:  "👗",
    title: "Women's Fashion Focus",
    desc:  "90% of our range is dedicated to women's garments — tops, kurtis, palazzos, trousers, sweaters, and more.",
  },
  {
    icon:  "🛒",
    title: "Meesho Verified Seller",
    desc:  "Trusted and verified seller on Meesho — thousands of products available for instant purchase or bulk inquiry.",
  },
  {
    icon:  "📦",
    title: "Bulk Order Support",
    desc:  "Dedicated support for bulk and wholesale orders. Flexible quantities and custom packaging available.",
  },
  {
    icon:  "🇮🇳",
    title: "Made in India",
    desc:  "Proudly manufactured in India. Supporting local craftsmanship with quality garments at every price point.",
  },
];

/* ══════════════════════════════════════════════
   FAQS
══════════════════════════════════════════════ */
const FAQS = [
  {
    q: "Do you accept bulk orders?",
    a: "Yes, absolutely! We specialise in bulk and wholesale orders. Whether you need 50 pieces or 5,000 pieces, we can accommodate your requirement. Contact us on WhatsApp or phone for bulk pricing.",
  },
  {
    q: "Do you supply to wholesalers and retailers?",
    a: "Yes, we supply directly to wholesalers, retailers, boutique owners, and Meesho resellers across India. We are a direct manufacturer, so you get the best prices without any middlemen.",
  },
  {
    q: "Are your products available on Meesho?",
    a: `Yes! We are a verified seller on Meesho under the store name "FASHION GUIDE". You can browse and purchase individual products or contact us for bulk wholesale orders outside Meesho.`,
  },
  {
    q: "Can I contact you directly on WhatsApp for orders?",
    a: `Yes, you can reach us on WhatsApp at ${CONFIG.phoneDisplay}. Just send us a message with your requirement — product category, quantity, and size range — and we'll get back to you promptly.`,
  },
  {
    q: "What product categories do you manufacture?",
    a: "We manufacture women's tops, tunics, kurtis, palazzos, trousers, pants, sweaters, sweatshirts, co-ord sets, and more. 90% of our range is women's wear, and 10% is men's garments.",
  },
  {
    q: "What is your location and can I visit?",
    a: `Our manufacturing unit is located at ${CONFIG.address.full}. You're welcome to visit us for product samples and wholesale discussions. Please call ahead to schedule a visit.`,
  },
  {
    q: "Do you offer custom stitching or private labelling?",
    a: "For large orders, we can discuss custom stitching requirements and specific size or colour variations. Please contact us directly on WhatsApp or phone to discuss your specific needs.",
  },
];

/* ══════════════════════════════════════════════
   HELPER: Build WhatsApp link
══════════════════════════════════════════════ */
function waLink(msg) {
  const text = encodeURIComponent(msg || CONFIG.whatsappMsg);
  return `https://wa.me/91${CONFIG.phone}?text=${text}`;
}

/* ══════════════════════════════════════════════
   HELPER: Build WhatsApp SVG icon
══════════════════════════════════════════════ */
function waSVG(size = 14) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`;
}

/* ══════════════════════════════════════════════
   INITIALISE ALL DYNAMIC LINKS FROM CONFIG
══════════════════════════════════════════════ */
function initLinks() {
  const waUrl      = waLink();
  const callUrl    = `tel:+91${CONFIG.phone}`;
  const meeshoUrl  = CONFIG.meeshoStore;
  const mapsUrl    = CONFIG.googleMapsLink;

  // Navbar WhatsApp
  const navWa = document.getElementById("navWaBtn");
  if (navWa) navWa.href = waUrl;

  // Hero buttons
  const heroMeesho = document.getElementById("heroMeeshoBtn");
  const heroWa     = document.getElementById("heroWaBtn");
  if (heroMeesho) heroMeesho.href = meeshoUrl;
  if (heroWa)     heroWa.href     = waUrl;

  // Wholesale buttons
  const wsCall = document.getElementById("wsCallBtn");
  const wsWa   = document.getElementById("wsWaBtn");
  if (wsCall) wsCall.href = callUrl;
  if (wsWa)   wsWa.href   = waUrl;

  // Contact buttons
  const contactCall = document.getElementById("contactCallBtn");
  const contactWa   = document.getElementById("contactWaBtn");
  const contactMap  = document.getElementById("contactMapBtn");
  if (contactCall) contactCall.href = callUrl;
  if (contactWa)   contactWa.href   = waUrl;
  if (contactMap)  contactMap.href  = mapsUrl;

  // Footer Meesho
  const footerMeesho = document.getElementById("footerMeeshoBtn");
  if (footerMeesho) footerMeesho.href = meeshoUrl;

  // All products Meesho
  const allProducts = document.getElementById("allProductsBtn");
  if (allProducts) allProducts.href = meeshoUrl;

  // Floating WhatsApp
  const floatWa = document.getElementById("floatingWa");
  if (floatWa) floatWa.href = waUrl;

  // Footer copyright
  const footerCopy = document.getElementById("footerCopy");
  if (footerCopy) footerCopy.textContent = `© ${CONFIG.year} ${CONFIG.brand}. All rights reserved.`;
}

/* ══════════════════════════════════════════════
   RENDER PRODUCT CATEGORY CARDS  (with slideshow)
══════════════════════════════════════════════ */
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  CATEGORIES.forEach((cat) => {
    const imgs  = cat.images || [];
    const total = imgs.length;

    // Build slide <img> tags
    const slideImgs = imgs.map((src, i) =>
      `<img
         class="cat-slide${i === 0 ? " active" : ""}"
         src="${src}"
         alt="${cat.name} – photo ${i + 1}"
         loading="${i === 0 ? "eager" : "lazy"}"
       />`
    ).join("");

    // Build dot indicators
    const dots = imgs.map((_, i) =>
      `<button class="cs-dot${i === 0 ? " active" : ""}" aria-label="Go to slide ${i + 1}"></button>`
    ).join("");

    const card = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <!-- ── SLIDESHOW (click = open Meesho) ── -->
      <a href="${cat.url}" target="_blank" rel="noopener"
         class="cat-slideshow" aria-label="View ${cat.name} on Meesho">

        ${slideImgs}

        <!-- Left arrow -->
        <button class="cs-arrow cs-prev" aria-label="Previous image">&#8249;</button>
        <!-- Right arrow -->
        <button class="cs-arrow cs-next" aria-label="Next image">&#8250;</button>

        <!-- Dot nav -->
        <div class="cs-dots" role="tablist" aria-label="Slide navigation">${dots}</div>

        <!-- Counter badge (top-right) -->
        <span class="cs-counter">1 / ${total}</span>

        <!-- Paused badge (shows on hover) -->
        <span class="cs-pause-badge">⏸ Paused</span>

        <!-- "Shop Now" hover overlay -->
        <div class="cs-shop-overlay" aria-hidden="true">
          <span class="cs-shop-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Shop on Meesho
          </span>
        </div>
      </a>

      <!-- ── CARD INFO ── -->
      <div class="cat-info">
        <div class="cat-header-row">
          <div class="cat-icon">${cat.icon}</div>
          <h3 class="cat-name">${cat.name}</h3>
        </div>
        <p class="cat-desc">${cat.desc}</p>
        <div class="cat-footer-row">
          <span class="cat-price">${cat.price}</span>
          <a href="${cat.url}" target="_blank" rel="noopener" class="cat-link">
            View on Meesho
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════
   SLIDESHOW LOGIC
   Auto-plays every 3 s.
   Pauses when mouse is over the card.
   Left/Right arrows let user navigate manually.
   Dots jump to any specific slide.
   Touch swipe works on mobile.
══════════════════════════════════════════════ */
function initSlideshows() {
  document.querySelectorAll(".cat-slideshow").forEach((slideshow) => {
    const slides  = Array.from(slideshow.querySelectorAll(".cat-slide"));
    const dots    = Array.from(slideshow.querySelectorAll(".cs-dot"));
    const prevBtn = slideshow.querySelector(".cs-prev");
    const nextBtn = slideshow.querySelector(".cs-next");
    const counter = slideshow.querySelector(".cs-counter");
    const total   = slides.length;
    if (total === 0) return;

    let current = 0;
    let timer   = null;

    /* ── go to slide n ── */
    function goTo(n) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = ((n % total) + total) % total;   // wrap around safely
      slides[current].classList.add("active");
      dots[current].classList.add("active");
      if (counter) counter.textContent = `${current + 1} / ${total}`;
    }

    /* ── auto-play ── */
    function startAuto() {
      stopAuto();
      timer = setInterval(() => goTo(current + 1), 3000);
    }
    function stopAuto() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    /* ── arrows (stop propagation so parent <a> doesn't open Meesho) ── */
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(current - 1);
      startAuto();          // reset timer after manual click
    });
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      goTo(current + 1);
      startAuto();
    });

    /* ── dots ── */
    dots.forEach((dot, i) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        goTo(i);
        startAuto();
      });
    });

    /* ── hover: pause slideshow ── */
    slideshow.addEventListener("mouseenter", stopAuto);
    slideshow.addEventListener("mouseleave", startAuto);

    /* ── touch swipe (mobile) ── */
    let touchX = 0;
    slideshow.addEventListener("touchstart", (e) => {
      touchX = e.touches[0].clientX;
    }, { passive: true });

    slideshow.addEventListener("touchend", (e) => {
      const diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) {          // min 40px swipe
        goTo(diff > 0 ? current + 1 : current - 1);
        startAuto();
      }
    }, { passive: true });

    /* ── kick off ── */
    startAuto();
  });
}

/* ══════════════════════════════════════════════
   RENDER WHY CHOOSE US CARDS
══════════════════════════════════════════════ */
function renderWhyCards() {
  const grid = document.getElementById("whyGrid");
  if (!grid) return;

  WHY_POINTS.forEach((point) => {
    const card = document.createElement("div");
    card.className = "why-card";
    card.innerHTML = `
      <div class="why-icon">${point.icon}</div>
      <h3 class="why-title">${point.title}</h3>
      <p class="why-desc">${point.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════
   RENDER CONTACT CARDS
══════════════════════════════════════════════ */
function renderContactCards() {
  const wrap = document.getElementById("contactCards");
  if (!wrap) return;

  const items = [
    {
      icon:  "📞",
      label: "Phone / WhatsApp",
      value: `<a href="tel:+91${CONFIG.phone}">${CONFIG.phoneDisplay}</a>`,
    },
    {
      icon:  "📍",
      label: "Address",
      value: `${CONFIG.address.line1},<br/>${CONFIG.address.line2},<br/>${CONFIG.address.city}`,
    },
    {
      icon:  "🛒",
      label: "Meesho Store",
      value: `<a href="${CONFIG.meeshoStore}" target="_blank" rel="noopener">FASHION.GUIDE on Meesho</a>`,
    },
    {
      icon:  "🕐",
      label: "Working Hours",
      value: "Mon – Sat: 10:00 AM – 7:00 PM",
    },
  ];

  items.forEach((item) => {
    wrap.innerHTML += `
      <div class="cc-card">
        <div class="cc-icon-wrap">${item.icon}</div>
        <div>
          <p class="cc-label">${item.label}</p>
          <p class="cc-value">${item.value}</p>
        </div>
      </div>
    `;
  });
}

/* ══════════════════════════════════════════════
   RENDER FOOTER CONTACT
══════════════════════════════════════════════ */
function renderFooterContact() {
  const wrap = document.getElementById("footerContact");
  if (!wrap) return;

  const items = [
    { emoji: "📞", text: `<a href="tel:+91${CONFIG.phone}">${CONFIG.phoneDisplay}</a>` },
    { emoji: "💬", text: `<a href="${waLink()}" target="_blank" rel="noopener">WhatsApp for Bulk Orders</a>` },
    { emoji: "📍", text: `${CONFIG.address.line1}, ${CONFIG.address.line2}, ${CONFIG.address.city}` },
    { emoji: "🛒", text: `<a href="${CONFIG.meeshoStore}" target="_blank" rel="noopener">FASHION GUIDE on Meesho</a>` },
  ];

  items.forEach((item) => {
    wrap.innerHTML += `
      <div class="fc-item">
        <span class="fc-emoji">${item.emoji}</span>
        <span class="fc-text">${item.text}</span>
      </div>
    `;
  });
}

/* ══════════════════════════════════════════════
   RENDER FAQ ACCORDION
══════════════════════════════════════════════ */
function renderFAQ() {
  const list = document.getElementById("faqList");
  if (!list) return;

  FAQS.forEach((faq, i) => {
    const item = document.createElement("div");
    item.className = "faq-item";

    item.innerHTML = `
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        ${faq.q}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-a" id="faq-a-${i}" role="region" aria-hidden="true">
        <div class="faq-a-inner">${faq.a}</div>
      </div>
    `;

    const btn = item.querySelector(".faq-q");
    const ans = item.querySelector(".faq-a");
    const inner = item.querySelector(".faq-a-inner");

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // close all others
      document.querySelectorAll(".faq-item.open").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        el.querySelector(".faq-a").style.maxHeight = "0";
        el.querySelector(".faq-a").setAttribute("aria-hidden", "true");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        ans.style.maxHeight = inner.scrollHeight + "px";
        ans.setAttribute("aria-hidden", "false");
      }
    });

    list.appendChild(item);
  });
}

/* ══════════════════════════════════════════════
   NAVBAR — SCROLL BEHAVIOUR
══════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id], main > section");
  const navLinks  = document.querySelectorAll(".nav-link");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach((s) => s.id && io.observe(s));
}

/* ══════════════════════════════════════════════
   MOBILE HAMBURGER MENU
══════════════════════════════════════════════ */
function initMobileMenu() {
  const btn     = document.getElementById("hamburger");
  const menu    = document.getElementById("navMenu");
  const overlay = document.getElementById("navOverlay");
  if (!btn || !menu || !overlay) return;

  btn.addEventListener("click", () => {
    const isOpen = btn.classList.toggle("open");
    menu.classList.toggle("open", isOpen);
    overlay.classList.toggle("show", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
}

function closeMobileMenu() {
  const btn     = document.getElementById("hamburger");
  const menu    = document.getElementById("navMenu");
  const overlay = document.getElementById("navOverlay");
  if (!btn || !menu || !overlay) return;
  btn.classList.remove("open");
  menu.classList.remove("open");
  overlay.classList.remove("show");
  btn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

/* ══════════════════════════════════════════════
   ANNOUNCEMENT BAR CLOSE
══════════════════════════════════════════════ */
function initAnnounceBar() {
  const closeBtn = document.getElementById("announceClose");
  const bar      = document.getElementById("announceBar");
  if (!closeBtn || !bar) return;

  closeBtn.addEventListener("click", () => {
    bar.style.maxHeight = bar.scrollHeight + "px";
    requestAnimationFrame(() => {
      bar.style.transition = "max-height .3s ease, opacity .3s ease";
      bar.style.maxHeight  = "0";
      bar.style.opacity    = "0";
      bar.style.overflow   = "hidden";
    });
  });
}

/* ══════════════════════════════════════════════
   SCROLL REVEAL (cards animate in on scroll)
══════════════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll(".cat-card, .why-card");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => io.observe(el));
}

/* ══════════════════════════════════════════════
   SMOOTH SCROLL for all anchor links
══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = document.getElementById("navbar")?.offsetHeight || 68;
        const top    = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ══════════════════════════════════════════════
   BOOT — run after DOM is ready
══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initLinks();           // Wire all buttons/links from CONFIG
  renderCategories();    // Product category cards (with slideshow)
  initSlideshows();      // Start slideshow on each category card
  renderWhyCards();      // Why choose us cards
  renderContactCards();  // Contact section cards
  renderFooterContact(); // Footer contact details
  renderFAQ();           // FAQ accordion
  initNavbar();          // Sticky nav + active link
  initMobileMenu();      // Hamburger menu
  initAnnounceBar();     // Announcement bar close
  initScrollReveal();    // Animate cards on scroll
  initSmoothScroll();    // Smooth anchor scrolling
});
