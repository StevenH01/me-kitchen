import React from "react";
import { Instagram, Facebook, MapPin, UtensilsCrossed } from "lucide-react";
import { LuMapPin, LuUtensils } from "react-icons/lu";        // Lucide style icons
import { SiInstagram, SiFacebook, SiTiktok, SiYelp, SiGooglemaps } from "react-icons/si"; // brand logos


// --- Replace these with your real business info ---
const RESTAURANT_NAME = "Your Vietnamese Kitchen"; // temporary name
const PHONE = "(555) 123-4567";
const ADDRESS = "1234 Lotus Ave, Sacramento, CA";
const HOURS = [
  { day: "Mon–Thu", time: "11:00 AM – 9:00 PM" },
  { day: "Fri–Sat", time: "11:00 AM – 10:00 PM" },
  { day: "Sun", time: "11:30 AM – 8:00 PM" },
];

// Menu preview content – tweak freely
const MENU_CATEGORIES = [
  {
    name: "Phở (Noodle Soup)",
    blurb:
      "Slow-simmered broth with rice noodles, fresh herbs, and your choice of protein.",
    items: ["Phở Tái (Rare Beef)", "Phở Gà (Chicken)", "Phở Đặc Biệt (House Special)"],
  },
  {
    name: "Bánh Mì (Sandwich)",
    blurb:
      "Crisp baguette with pickled veggies, cilantro, jalapeño, and house pâté/mayo.",
    items: ["Bánh Mì Thịt Nướng (Grilled Pork)", "Bánh Mì Gà", "Bánh Mì Chay (Tofu)"]
  },
  {
    name: "Bún (Vermicelli Bowls)",
    blurb:
      "Cool rice vermicelli with herbs, pickles, peanuts, and nước chấm.",
    items: ["Bún Thịt Nướng", "Bún Bò Nướng", "Bún Chay"]
  },
  {
    name: "Cơm (Rice Plates)",
    blurb:
      "Fragrant jasmine rice with grilled meats, pickles, and house sauces.",
    items: ["Cơm Tấm Sườn (Pork Chop)", "Cơm Gà Nướng", "Cơm Bò Lúc Lắc"]
  },
  {
    name: "Drinks & Desserts",
    blurb:
      "Vietnamese coffee, fresh sugarcane juice, chè, and seasonal specials.",
    items: ["Cà Phê Sữa Đá", "Trà Sữa", "Chè Ba Màu"]
  }
];

export default function VietnameseRestaurantSite() {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--text)]">
      {/* Brand Palette */}
      <style>{`
        :root {
          --brown: #2d1f1a;       /* main dark brown */
          --bronze: #b08d57;      /* bronze */
          --cream: #f6efe7;       /* cream */
          --gold: #c7a008;        /* gold */
          --orange: #f97316;      /* orange */
          --white: #ffffff;       /* white */
          --text: #312a25;        /* deep neutral for body text */
        }
        .gold-gradient { background: linear-gradient(135deg, var(--gold), var(--bronze)); }
        .hero-overlay { background: linear-gradient(180deg, rgba(45,31,26,.55), rgba(45,31,26,.7)); }
        .card { box-shadow: 0 10px 30px rgba(0,0,0,.08); }
        .ring-gold { box-shadow: 0 0 0 3px rgba(199,160,8,.18); }
      `}</style>

      {/* Top Bar / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[var(--cream)]/70 border-b border-[rgba(0,0,0,.06)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-3 group">
              {/* Logo placeholder – swap with your real logo */}
              <div
                className="size-9 rounded-xl gold-gradient ring-gold group-hover:scale-105 transition-transform"
                aria-hidden
                title="Logo placeholder"
              />
              <span className="font-semibold tracking-tight text-lg sm:text-xl text-[var(--brown)]">
                {RESTAURANT_NAME}
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#menu" className="hover:text-[var(--brown)] transition">Menu</a>
              <a href="#about" className="hover:text-[var(--brown)] transition">About</a>
              <a href="#gallery" className="hover:text-[var(--brown)] transition">Gallery</a>
              <a href="#visit" className="hover:text-[var(--brown)] transition">Visit</a>
              <a href="#contact" className="px-3 py-2 rounded-lg text-white bg-[var(--brown)] hover:opacity-90 transition">
                Order / Call
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        {/* Replace the src below with your hero image */}
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
          <img
            src="/images/hero-placeholder.jpg"
            alt="Vietnamese cuisine hero"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-[var(--cream)] px-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs tracking-wide">
              <Utensils className="size-4" /> Authentic • Cozy • Family-Owned
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
              Taste the Heart of Vietnam
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base opacity-95">
              Phở, bánh mì, bún, and more—crafted with time-honored recipes and
              fresh local ingredients.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#menu"
                className="px-5 py-2.5 rounded-xl bg-[var(--gold)] text-[var(--brown)] font-medium hover:brightness-105 transition"
              >
                Explore Menu
              </a>
              <a
                href="tel:+15551234567"
                className="px-5 py-2.5 rounded-xl bg-[var(--cream)] text-[var(--brown)] font-medium hover:bg-white transition"
              >
                <span className="inline-flex items-center gap-2">
                  <Phone className="size-4" /> Call {PHONE}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brown)]">Menu Highlights</h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-700 max-w-2xl">
                A glimpse of our guest favorites. Ask about vegetarian and gluten-friendly options.
              </p>
            </div>
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-[var(--orange)] text-white font-medium hover:opacity-90"
            >
              Ask About Catering
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_CATEGORIES.map((cat) => (
              <article key={cat.name} className="card rounded-2xl bg-white p-6 border border-[rgba(0,0,0,.06)]">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full gold-gradient" aria-hidden />
                  <h3 className="text-lg font-semibold text-[var(--brown)]">{cat.name}</h3>
                </div>
                <p className="mt-2 text-sm text-neutral-700">{cat.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Star className="size-4 text-[var(--gold)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-[var(--brown)] text-white hover:opacity-90">
              Full Menu / Order Online
            </a>
            <a href="#about" className="px-5 py-2.5 rounded-xl bg-[var(--cream)] text-[var(--brown)] hover:bg-white">
              Learn Our Story
            </a>
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section id="about" className="py-16 sm:py-20 bg-[var(--white)] border-y border-[rgba(0,0,0,.06)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brown)]">Our Story</h2>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              From Saigon streets to your neighborhood table, we bring the warmth of
              Vietnamese home cooking. Our broths simmer for hours, herbs are fresh
              every morning, and each dish is prepared to order.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Whether you’re craving a comforting bowl of phở or a toasted bánh mì,
              we’ve crafted a menu that honors tradition while welcoming new guests.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-3 py-1 text-xs">
                <Utensils className="size-4" /> Family Recipes
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-3 py-1 text-xs">
                <Utensils className="size-4" /> Fresh Daily
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-3 py-1 text-xs">
                <Utensils className="size-4" /> Vegetarian Options
              </span>
            </div>
          </div>

          {/* Image Collage – swap src with your images */}
          <div className="grid grid-cols-3 gap-3">
            <img src="/images/about-1.jpg" alt="Broth simmering" className="rounded-xl object-cover aspect-square" />
            <img src="/images/about-2.jpg" alt="Fresh herbs" className="rounded-xl object-cover aspect-square" />
            <img src="/images/about-3.jpg" alt="Bánh mì prep" className="rounded-xl object-cover aspect-square" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brown)]">Gallery</h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-700">Swap these with your real photos.</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl bg-[var(--cream)] border border-[rgba(0,0,0,.06)]">
                <img
                  src={`/images/gallery-${i + 1}.jpg`}
                  alt={`Dish ${i + 1}`}
                  className="size-full object-cover aspect-square hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="visit" className="py-16 sm:py-20 bg-[var(--white)] border-y border-[rgba(0,0,0,.06)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card rounded-2xl bg-white p-6 border border-[rgba(0,0,0,.06)]">
            <h3 className="text-lg font-semibold text-[var(--brown)] flex items-center gap-2">
              <MapPin className="size-5" /> Location
            </h3>
            <p className="mt-2 text-neutral-700">{ADDRESS}</p>
            <a
              className="mt-3 inline-flex text-sm underline underline-offset-4 hover:text-[var(--brown)]"
              href="https://maps.google.com" target="_blank" rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="card rounded-2xl bg-white p-6 border border-[rgba(0,0,0,.06)]">
            <h3 className="text-lg font-semibold text-[var(--brown)] flex items-center gap-2">
              <Clock className="size-5" /> Hours
            </h3>
            <ul className="mt-2 space-y-1 text-neutral-700 text-sm">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card rounded-2xl bg-white p-6 border border-[rgba(0,0,0,.06)]">
            <h3 className="text-lg font-semibold text-[var(--brown)] flex items-center gap-2">
              <Phone className="size-5" /> Contact
            </h3>
            <p className="mt-2 text-neutral-700">Call us to order or for catering.</p>
            <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`} className="mt-3 inline-flex items-center gap-2 font-medium text-[var(--brown)]">
              <Phone className="size-4" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brown)]">Ready to Dine?</h2>
          <p className="mt-2 text-neutral-700 max-w-2xl mx-auto">
            Reserve a table, call ahead for pickup, or ask about catering for your next event.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#menu" className="px-5 py-2.5 rounded-xl bg-[var(--gold)] text-[var(--brown)] font-medium hover:brightness-105">See Full Menu</a>
            <a href={`tel:${PHONE.replace(/[^\d]/g, "")}`} className="px-5 py-2.5 rounded-xl bg-[var(--brown)] text-white font-medium hover:opacity-90">
              <span className="inline-flex items-center gap-2"><Phone className="size-4"/> Call Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(0,0,0,.06)] bg-[var(--cream)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg gold-gradient" aria-hidden />
              <div>
                <p className="font-semibold text-[var(--brown)]">{RESTAURANT_NAME}</p>
                <p className="text-xs text-neutral-600">Authentic Vietnamese Cuisine</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Swap href values with your real social URLs */}
              <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-white transition" title="Instagram">
                <Instagram className="size-5" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md hover:bg-white transition" title="Facebook">
                <Facebook className="size-5" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md hover:bg-white transition" title="YouTube">
                <Youtube className="size-5" />
              </a>
              <a href="#" aria-label="Yelp" className="p-2 rounded-md hover:bg-white transition" title="Yelp">
                <Star className="size-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center sm:text-right text-xs text-neutral-600">
            <span>© {new Date().getFullYear()} {RESTAURANT_NAME}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
