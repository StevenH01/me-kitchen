import React from "react";
import "./App.css";

import { LuMapPin, LuUtensils, LuPhone, LuClock, LuStar } from "react-icons/lu";
import { SiInstagram, SiFacebook, SiYoutube, SiYelp, SiGooglemaps } from "react-icons/si";
import { FaBowlFood, FaUtensils, FaMartiniGlass } from "react-icons/fa6";

import { Routes, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";

const RESTAURANT_NAME = "Mẹ Kitchen";
const PHONE = "(279) 345-0727";
const ADDRESS = "2610 Fair Oaks Blvd, Sacramento, CA 95864";
const WAITLIST_URL = "https://www.yelp.com/biz/me-s-kitchen-sacramento?osq=me+kitchen";
const INSTAGRAM_URL = "https://www.instagram.com/mes_kitchen_/";
const MAPS_URL  = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const HOURS = [
  { day: "Mon", time: "11:00 AM – 7:00 PM" },
  { day: "Tue", time: "11:00 AM – 7:00 PM" },
  { day: "Wed", time: "Closed" },
  { day: "Thu", time: "11:00 AM – 7:00 PM" },
  { day: "Fri", time: "11:00 AM – 7:00 PM" },
  { day: "Sat", time: "11:00 AM – 7:00 PM" },
  { day: "Sun", time: "11:00 AM – 7:00 PM" },
];

// Signature dishes (inspired by Saigon Oi)
const SIGNATURES = [
  { name: "Bánh Mì Chảo", img: "/food/dish2.jpg", blurb: "Sizzling skillet with filet mignon, egg, pâté & more." },
  { name: "Phở Đặc Biệt", img: "/food/dish7.jpg", blurb: "Rich beef broth with vermicelli noodles & various beefs." },
  { name: "Bánh Khọt",    img: "/food/dish4.jpg",  blurb: "Crispy mini rice cakes, herbs & nước mắm." },
];

// Menu preview
const MENU_CATEGORIES = [
  {
    name: "Appetizers",
    blurb: "Small bites to start the meal.",
    items: [
      "Egg Rolls (Chả giò)",
      "Fish-Sauce Chicken Wings (Cánh gà chiên nước mắm)",
      "French Fries (Khoai tây chiên)",
    ],
  },
  {
    name: "Entrees",
    blurb: "House favorites and comforting classics.",
    items: [
      "Banh Mi Chao (Bánh mì chảo)",
      "Pho (Phở)",
      "Shaken Beef (Bò lúc lắc)",
    ],
  },
  {
    name: "Drinks",
    blurb: "Iced and hot beverages.",
    items: [
      "Vietnamese Coffee (Cà phê sữa đá)",
      "Coconut Coffee (Cà phê cốt dừa)",
      "Thai Tea (Trà Thái)",
    ],
  },
];

const CATEGORY_ICONS = {
  Appetizers: FaBowlFood,
  Entrees: FaUtensils,
  Drinks: FaMartiniGlass,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<VietnameseRestaurantSite />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

function VietnameseRestaurantSite() {
  const tel = PHONE.replace(/[^\d]/g, "");
  const iconSm = { size: 16, "aria-hidden": true };
  const iconMd = { size: 20, "aria-hidden": true };

  return (
    <div className="site">
      {/* Promo strip (hours + specials) */}
      <div className="promo-strip">
        <div className="container">
          <span className="promo-pill">
            <LuClock {...iconSm} /> Soft Opening October 28th Open 11am-7pm · Wed Closed
          </span>
          <a className="promo-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Weekend specials → Follow us on Instagram
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand">
          <img
            src="/logo.png"
            alt="Me Kitchen by Saigon Oi!"
            className="brand-logo"
          />
          <span className="brand-name">{RESTAURANT_NAME}</span>
          </a>
           <nav className="nav" role="navigation" aria-label="Primary">
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#visit" className="nav-link">Visit</a>
          </nav>
          <div className="header-actions">
            <Link to="/menu" className="btn btn--brown">Full Menu</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img src="/mek2.png" alt="Vietnamese cuisine hero" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge">
            <LuUtensils {...iconSm} /> Authentic • Cozy • Family-Owned
          </span>
          <h1>Menu for every taste, made with care</h1>
          <p>Fresh ingredients, no shortcuts—phở, bánh mì, & more.</p>
          <div className="hero-cta">
            <Link to="/menu" className="btn btn--brown">Full Menu</Link>
            <a href={WAITLIST_URL} className="btn btn--light" target="_blank" rel="noreferrer">
              <SiYelp {...iconSm} /> View Yelp 
            </a>
          </div>
        </div>
      </section>

      {/* Signatures */}
      <section className="section" id="signatures">
        <div className="container section-head">
          <h2>Signature Dishes</h2>
          <p>Our most-loved plates—perfect for first-timers.</p>
        </div>
        <div className="container cards-3">
          {SIGNATURES.map((d) => (
            <article key={d.name} className="card">
              <div className="card-img">
                <img src={d.img} alt={d.name} />
              </div>
              <div className="card-body">
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="about" className="section section--alt">
        <div className="container split">
          <div className="split-media">
            <img src="/food/SGOI_FOOD.jpg" alt="House-made broths and fresh herbs" className="story-image" loading="lazy"/>
          </div>
          <div className="split-copy">
            <h2>Our Story</h2>
            <p>
              From the streets of Saigon to our neighborhood table, we cook the dishes we grew up with—
              recipes our parents taught us and flavors from home. Our broths start before sunrise, baguettes
              are toasted crisp, and fresh herbs are washed by hand—just like our families did.
            </p>
            <p>
              We opened this kitchen to bring those homemade dishes to our Sacramento community: food that
              feels like a warm hello from family. Whether it’s a sizzling <em>bánh mì chảo</em>, a comforting bowl
              of <em>phở</em>, or an iced <em>cà phê sữa đá</em>, we hope each bite brings you a little closer to Vietnam.
            </p>
            <div className="chips">
              <span className="chip"><LuUtensils {...iconSm} /> Family Recipes</span>
              <span className="chip"><LuUtensils {...iconSm} /> Fresh Daily</span>
              <span className="chip"><LuUtensils {...iconSm} /> Good Portions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section id="menu" className="section">
        <div className="container section-head">
          <h2>Menu Highlights</h2>
          <p>A quick taste of what we serve—see full menu in-store or online.</p>
        </div>

        <div className="container cards-3">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name] || FaUtensils;
            return (
              <article key={cat.name} className="card">
                <div className="card-body">
                  <h3 className="menu-cat">
                    <Icon className="menu-cat__icon" aria-hidden="true" />
                    {cat.name}
                  </h3>
                  <p>{cat.blurb}</p>
                  <ul className="list">
                    {cat.items.map((it) => (
                      <li key={it}>
                        <LuStar {...iconSm} className="gold" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="container center gap">
          <Link to="/menu" className="btn btn--brown">Full Menu</Link>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section section--alt">
        <div className="container section-head">
          <h2>Gallery</h2>
          <p>Some of our Popular Dishes!</p>
        </div>
        <div className="container gallery-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="gallery-tile">
              <img
                src={`/food/dish${i + 1}.jpg`} 
                alt={`Dish ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Visit / Hours / Contact */}
      <section id="visit" className="section">
        <div className="container tiles">
          <div className="tile">
            <h3><LuMapPin {...iconMd} /> Location</h3>
            <p>{ADDRESS}</p>
            <a className="link" href={MAPS_URL} target="_blank" rel="noreferrer">
              <SiGooglemaps {...iconSm} /> Open in Google Maps
            </a>
          </div>

          <div className="tile">
            <h3><LuClock {...iconMd} /> Hours</h3>
            <ul className="hours">
              {HOURS.map((h) => (
                <li key={h.day}><span>{h.day}</span><span>{h.time}</span></li>
              ))}
            </ul>
          </div>

          <div className="tile">
            <h3><LuPhone {...iconMd} /> Contact</h3>
            <p>Call us to order or for catering.</p>
            <a href={`tel:${tel}`} className="link"><LuPhone {...iconSm} /> {PHONE}</a>
            <div className="mini-cta">
              <a href={WAITLIST_URL} className="btn btn--gold" target="_blank" rel="noreferrer">
                <SiYelp {...iconSm} /> View Yelp 
              </a>
            </div>
          </div>
        </div>

        {/* Map embed (swap query/address) */}
        <div className="container map-wrap">
          {/* Click-through overlay (mobile) */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="map-overlay"
            aria-label={`Open ${ADDRESS} in Google Maps`}
            title="Open in Google Maps"
          />
          <iframe
            title="Map"
            className="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
          />
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="section center">
        <div className="container narrow">
          <h2>Ready to Dine?</h2>
          <p>Reserve a table, call ahead for pickup, or ask about catering for your next event.</p>
          <div className="center gap">
            <Link to="/menu" className="btn btn--brown">Full Menu</Link>
            <a href={`tel:${tel}`} className="btn btn--brown">Call Us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              src="/logo.png"
              alt="Me Kitchen by Saigon Oi!"
              className="brand-logo"
            />
            <div>
              <p className="brand-name">{RESTAURANT_NAME}</p>
              <p className="tag">Authentic Vietnamese Cuisine</p>
            </div>
          </div>
          <nav className="socials">
            <a href={INSTAGRAM_URL} aria-label="Instagram" title="Instagram"><SiInstagram {...iconMd} /></a>
            <a href="#" aria-label="Facebook" title="Facebook"><SiFacebook {...iconMd} /></a>
            {/* <a href="#" aria-label="YouTube" title="YouTube"><SiYoutube {...iconMd} /></a> */}
            <a href={WAITLIST_URL} aria-label="Yelp" title="Yelp" target="_blank" rel="noreferrer"><SiYelp {...iconMd} /></a>
          </nav>
          <div className="copy">© {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
