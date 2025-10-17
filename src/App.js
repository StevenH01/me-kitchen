import React from "react";
import "./App.css";

import { LuMapPin, LuUtensils, LuPhone, LuClock, LuStar } from "react-icons/lu";
import { SiInstagram, SiFacebook, SiYoutube, SiYelp, SiGooglemaps } from "react-icons/si";

// --- Business info (replace these) ---
const RESTAURANT_NAME = "Mẹ Kitchen";
const PHONE = "(555) 123-4567";
const ADDRESS = "Fair Oaks, 2611 Fair Oak7 Blvd, Sacramento, CA 95864";
const WAITLIST_URL = "https://www.yelp.com/biz/saigon-oi-sacramento"; // replace with your Yelp waitlist if you have one
const INSTAGRAM_URL = "https://www.instagram.com/_saigonoi/";         // replace with your IG
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
  { name: "Bánh Mì Chảo", img: "/images/signature-bmc.jpg", blurb: "Sizzling skillet with filet mignon, egg, pâté & more." },
  { name: "Bánh Canh Cua", img: "/images/signature-bcc.jpg", blurb: "Rich crab udon soup with shrimp & quail egg." },
  { name: "Bánh Khọt",    img: "/images/signature-bk.jpg",  blurb: "Crispy mini rice cakes, herbs & nước chấm." },
];

// Menu preview
const MENU_CATEGORIES = [
  {
    name: "Phở (Noodle Soup)",
    blurb: "Slow-simmered broths with rice noodles & herbs.",
    items: ["Phở Tái", "Phở Gà", "Phở Đặc Biệt"],
  },
  {
    name: "Bánh Mì",
    blurb: "Crusty baguettes, house spreads, pickles & cilantro.",
    items: ["Thịt Nướng", "Gà Nướng", "Chay (Tofu)"],
  },
  {
    name: "Bún (Vermicelli)",
    blurb: "Cool vermicelli bowls with fresh herbs & peanuts.",
    items: ["Bún Thịt Nướng", "Bún Bò Nướng", "Bún Chay"],
  },
];

export default function VietnameseRestaurantSite() {
  const tel = PHONE.replace(/[^\d]/g, "");
  const iconSm = { size: 16, "aria-hidden": true };
  const iconMd = { size: 20, "aria-hidden": true };

  return (
    <div className="site">
      {/* Promo strip (hours + specials) */}
      <div className="promo-strip">
        <div className="container">
          <span className="promo-pill">
            <LuClock {...iconSm} /> Open 11am–7pm · Wed Closed
          </span>
          <a className="promo-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Weekend specials → Follow us on Instagram
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#home" className="brand brand--stacked">
          <img
            src="/logo.png"
            alt="Me Kitchen by Saigon Oi!"
            className="brand-logo"
          />
          <span className="brand-name">{RESTAURANT_NAME}</span>
        </a>
          <nav className="nav">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#visit">Visit</a>
            <a href="#contact" className="btn btn--brown">Order / Call</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <img src="/mek.png" alt="Vietnamese cuisine hero" className="hero-img" />
        <div className="hero-overlay" />
        <div className="hero-content container">
          <span className="badge">
            <LuUtensils {...iconSm} /> Authentic • Cozy • Family-Owned
          </span>
          <h1>Menu for every taste, made with care</h1>
          <p>Fresh ingredients, no shortcuts—phở, bánh mì, bún & more.</p>
          <div className="hero-cta">
            <a href="#menu" className="btn btn--gold">View Menu</a>
            <a href={WAITLIST_URL} className="btn btn--light" target="_blank" rel="noreferrer">
              <SiYelp {...iconSm} /> Join Yelp Waitlist
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
            <img src="/images/about-hero.jpg" alt="House-made broths and fresh herbs" />
          </div>
          <div className="split-copy">
            <h2>Our Story</h2>
            <p>
              From Saigon streets to your neighborhood table. We simmer broths for hours, bake
              baguettes fresh, and make sauces in-house.
            </p>
            <div className="chips">
              <span className="chip"><LuUtensils {...iconSm} /> Family Recipes</span>
              <span className="chip"><LuUtensils {...iconSm} /> Fresh Daily</span>
              <span className="chip"><LuUtensils {...iconSm} /> Vegetarian Options</span>
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
          {MENU_CATEGORIES.map((cat) => (
            <article key={cat.name} className="card">
              <div className="card-body">
                <div className="dot" />
                <h3>{cat.name}</h3>
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
          ))}
        </div>
        <div className="container center gap">
          <a href="#contact" className="btn btn--brown">Full Menu / Order Online</a>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section section--alt">
        <div className="container section-head">
          <h2>Gallery</h2>
          <p>Swap these placeholders with your real photos.</p>
        </div>
        <div className="container gallery-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="gallery-tile">
              <img src={`/images/gallery-${i + 1}.jpg`} alt={`Dish ${i + 1}`} />
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
                <SiYelp {...iconSm} /> Join Yelp Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Map embed (swap query/address) */}
        <div className="container map-wrap">
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
            <a href="#menu" className="btn btn--gold">See Full Menu</a>
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
            <a href="#" aria-label="YouTube" title="YouTube"><SiYoutube {...iconMd} /></a>
            <a href={WAITLIST_URL} aria-label="Yelp" title="Yelp" target="_blank" rel="noreferrer"><SiYelp {...iconMd} /></a>
          </nav>
          <div className="copy">© {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
