import React from "react";
import { Link } from "react-router-dom";

const MENU = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        vn: "CÁNH GÀ CHIÊN NƯỚC MẮM (7)",
        en: "Crispy fish sauce chicken wings",
        price: 12,
      },
      {
        vn: "CHẢ GIÒ (5)",
        en: "Egg rolls",
        price: 12,
      },
      {
        vn: "KHOAI LANG CHIÊN",
        en: "Sweet Potato Fries",
        price: 8,
      },
      {
        vn: "KHOAI TÂY CHIÊN",
        en: "French fries",
        price: 8,
      },
      {
        vn: "BÁNH KHỌT",
        en: "Vietnamese Pancake",
        price: 18,
      },
      {
        vn: "MẸ SALAD",
        en: "Shaking Beef Salad",
        price: 18,
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrées",
    items: [
      {
        vn: "MẸ’s KITCHEN PHỞ",
        en: "Beef noodle soup with filet mignon, brisket, beef ball, and beef rib served with bean sprouts and basil",
        price: 22,
      },
      {
        vn: "BÁNH MÌ CHẢO COMBINATION",
        en: "Filet Mignon, Meatball, Pork roll, Egg, Pate served with French bread",
        price: 23,
      },
      {
        vn: "BÁNH MÌ CHẢO BÒ SỐT TIÊU ĐEN",
        en: "Filet Mignon in Black Pepper Sauce served with French bread",
        price: 21,
      },
      {
        vn: "BÒ LÚC LẮC (CƠM ĐỎ / MỲ TỎI)",
        en: "Vietnamese Shaking Filet Mignon Beef with Red Rice or Garlic Noodle",
        price: 21,
      },
      {
        vn: "GÀ QUAY (CƠM ĐỎ / MỲ TỎI)",
        en: "Vietnamese Fried Chicken with Red Rice or Garlic Noodle",
        price: 19,
      },
      {
        vn: "BEEF STEAK (CƠM ĐỎ / MỲ TỎI)",
        en: "Rib Eye Steak with Red Rice or Garlic Noodle",
        price: 28,
      },
      {
        vn: "BÁNH MÌ GÀ NƯỚNG",
        en: "Grilled Chicken Vietnamese Bread",
        price: 14,
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Desserts",
    items: [
      { vn: "CAFE ĐEN", en: "Iced Black Coffee", price: 7 },
      { vn: "CAFE SỮA ĐÁ", en: "Iced Milk Coffee", price: 8 },
      { vn: "CAFE DỪA", en: "Coconut Coffee", price: 9 },
      { vn: "SINH TỐ DỪA", en: "Coconut Smoothie", price: 8 },
      { vn: "NƯỚC DỪA (SEASONAL)", en: "Coconut Juice", price: 8 },
      { vn: "NƯỚC CAM VẮT", en: "Fresh Orange Juice", price: 7 },
      { vn: "TRÀ CHANH XÃ TẮC", en: "Kumquat Lemongrass Tea", price: 8 },
      {
        vn: "TRÀ NHIỆT ĐỚI",
        en: "Tropical Fruit Black Tea (Lychee and Peach)",
        price: 8,
      },
      { vn: "TRÀ THÁI", en: "Thai Tea", price: 7 },
      { vn: "CHÈ DỪA DẰM", en: "Smashed Coconut Dessert", price: 9 },
      {
        vn: "CHÈ KHÚC BẠCH",
        en: "Tropical fruit with cream cheese jello, topped with sliced almond",
        price: 9,
      },
      { vn: "SODA", en: "Free refill", price: 4 },
    ],
  },
];

export default function Menu() {
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <div className="menu-hero-inner">
            <h1>Full Menu</h1>
            <p>Fresh, homemade dishes inspired by our families and homeland.</p>
            <div className="menu-tabs">
              {MENU.map(sec => (
                <a key={sec.id} href={`#${sec.id}`} className="menu-tab">
                  {sec.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container menu-sections">
        {MENU.map(sec => (
          <article key={sec.id} id={sec.id} className="menu-section">
            <h2 className="menu-section-title">{sec.title}</h2>
            <ul className="menu-list">
              {sec.items.map((it, idx) => (
                <li key={idx} className="menu-item">
                  <div className="menu-item-line">
                    <span className="menu-item-name">
                      <strong className="vn">{it.vn}</strong>
                      <span className="en">{it.en}</span>
                    </span>
                    <span className="dots" aria-hidden />
                    <span className="price">${it.price}</span>
                  </div>
                  {/* If any item needs a longer blurb, you can add <p className="desc">...</p> here */}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="container menu-notes">
        <p className="note">
          * Please be advised that food prepared and served at this
          establishment may contain milk, egg, soy, honey, nuts, or traces
          thereof. 18% gratuity added for parties of 6 or more.
        </p>
        <div className="menu-links">
          <Link to="/" className="btn btn--light">
            ← Back to Home
          </Link>
          {/* Add online ordering link here if needed */}
        </div>
      </section>
    </main>
  );
}
