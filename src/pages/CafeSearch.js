import React, { useState } from 'react';
import './CafeSearch.css';

const cafes = [
  { id: 1, name: "Cafe De Piccolo", cuisine: "Italian, Cafe, Continental", location: "Rajpur Road", image: "..." },
  { id: 2, name: "Ama Café (Mall of Dehradun)", cuisine: "Cafe, Continental, Fast Food", location: "Rajpur Road / Mall", image: "..." },
  { id: 3, name: "Loulou", cuisine: "Cafe, Continental, Asian", location: "Rajpur Road / Chukkuwala", image: "..." },
  { id: 4, name: "Town Table", cuisine: "Multi-cuisine (Indian, Continental, Mexican, Chinese)", location: "Rajpur Road", image: "..." },
  { id: 5, name: "Ellora’s Bakery", cuisine: "Bakery, Desserts, Cafe", location: "Chukkuwala / Rajpur Road", image: "..." },
  { id: 6, name: "XOXO - Cafe, Bakery, Patisserie", cuisine: "Cafe, Bakery, Desserts", location: "Rajpur Road", image: "..." },
  { id: 7, name: "Reykan's Bakers & Kitchen", cuisine: "Bakery, Cafe, Modern Indian", location: "Balliwala / Rajpur", image: "..." },
  { id: 8, name: "Black Pepper", cuisine: "North Indian, Continental", location: "Rajpur Road / Karanpur", image: "..." },
  { id: 9, name: "The Sitting Elephant", cuisine: "Indian, Continental (Rooftop)", location: "Rajpur Road", image: "..." },
  { id: 10, name: "Countdown Restaurant", cuisine: "Italian, Chinese, Continental", location: "Central Dehradun / Rajpur", image: "..." },
  { id: 11, name: "Koi", cuisine: "Asian, Pan-Asian", location: "Rajpur Road / Mall area", image: "..." },
  { id: 12, name: "Barbeque Nation ", cuisine: "Buffet, North Indian, BBQ", location: "Jakhan / Rajpur area", image: "..." },
  { id: 13, name: "Punjab Grill  ", cuisine: "Punjabi, North Indian", location: "Rajpur Road / Central", image: "..." },
  { id: 14, name: "House of Nuttmeeg", cuisine: "Oriental, Continental, Bakery", location: "Chukkuwala / Rajpur", image: "..." },
  { id: 15, name: "Smoke House Deli ", cuisine: "Continental, Cafe, Italian", location: "Rajpur / Hathibarkala", image: "..." },
  { id: 16, name: "Dehradun Social", cuisine: "North Indian, Continental, Drinks", location: "Hathibarkala / Salwala", image: "..." },
  { id: 17, name: "Satwah Gourmet Dining", cuisine: "North Indian, Chinese, Italian", location: "Karanpur", image: "..." },
  { id: 18, name: "Amrithya — The Eternal Dining", cuisine: "North Indian, Italian, Healthy", location: "Jakhan", image: "..." },
  { id: 19, name: "Underdoggs (sports bar / kitchen)", cuisine: "North Indian, Mexican, Continental", location: "Hathibarkala / Salwala", image: "..." },
  { id: 20, name: "Coco Osteria", cuisine: "Italian, Pizza, Continental", location: "Rajpur Road / Mall", image: "..." },
  { id: 21, name: "Café Lychee Tree", cuisine: "Cafe, Casual Dining, Continental", location: "Nehru Colony", image: "..." },
  { id: 22, name: "Tamtara Café", cuisine: "Cafe, Continental, Fusion", location: "Rajpur Road", image: "..." },
  { id: 23, name: "The Brew Estate / The Brew Room", cuisine: "Cafe, Fast Food, Beverages", location: "Rajpur Road", image: "..." },
  { id: 24, name: "Cafe Choco La", cuisine: "Cafe, Desserts, Fast Food", location: "Rajpur Road", image: "..." },
  { id: 25, name: "Café Cibo", cuisine: "Italian, Continental", location: "Rajpur Road", image: "..." },
  { id: 26, name: "KC Soup Bar / KC Momos", cuisine: "Fast Food, Momos, Chinese", location: "Jakhan / Rajpur", image: "..." },
  { id: 27, name: "Bigway Cafe Restro", cuisine: "Cafe, Continental, North Indian", location: "Garhi Cantt / Dehradun City", image: "..." },
  { id: 28, name: "The Chocolate Room ", cuisine: "Desserts, Cafe", location: "Rajpur Road / Central", image: "..." },
  { id: 29, name: "Rekha / Razzmatazz Restaurant", cuisine: "Indian, Multi-cuisine", location: "Rajpur Road", image: "..." },
  { id: 30, name: "The V Café", cuisine: "Cafe, Fast Food, Beverages", location: "Rajpur / Karanpur", image: "..." },
  { id: 31, name: "Urban House Bar & Restaurant", cuisine: "Bar, Continental, Indian", location: "Karanpur / Salwala", image: "..." },
  { id: 32, name: "Barista", cuisine: "Cafe, Beverages, Fast Food", location: "Rajpur Road / Mall", image: "..." },
  { id: 33, name: "Barista Max", cuisine: "Cafe, Beverages, Fast Food", location: "Rajpur Road", image: "..." },
  { id: 34, name: "Ama Café", cuisine: "Cafe, Pizza, Desserts", location: "Rajpur Road", image: "..." },
  { id: 35, name: "Doon’s Café", cuisine: "Cafe, Indian, Snacks", location: "Balliwala", image: "..." },
  { id: 36, name: "Wok in the Clouds", cuisine: "Chinese, Continental", location: "Rajpur Road", image: "..." },
  { id: 37, name: "Pacific Mall — Food Court (various chains)", cuisine: "Multi-cuisine (chains)", location: "Rajpur Road / Jakhan", image: "..." },
  { id: 38, name: "Café Marigold / Yellow Marigold House Cafe", cuisine: "Cafe, Continental", location: "Rajpur Road", image: "..." },
  { id: 39, name: "KC Momos", cuisine: "Momos, Fast Food", location: "Jakhan / Mussoorie Road", image: "..." },
  { id: 40, name: "Pavilion Restaurant (Hotel Madhuban / similar)", cuisine: "Indian, Continental", location: "Central Dehradun / Rajpur", image: "..." },
  { id: 41, name: "The President Hotel Restaurants", cuisine: "Fine Dining, Indian, Continental", location: "Rajpur Road / Central", image: "..." },
  { id: 42, name: "Buffet (local iconic spot opposite Astley Hall)", cuisine: "Fast Food, Street-style", location: "Astley Hall area", image: "..." },
  { id: 43, name: "Coco ", cuisine: "Cafe, Desserts", location: "Rajpur Road", image: "..." },
  { id: 44, name: "Little Buddha Café", cuisine: "Continental, Chinese, North Indian", location: "Rajpur Road", image: "..." },
  { id: 45, name: "Udupi Cafe", cuisine: "South Indian, Cafe, Fast Food", location: "Mussoorie Road / Jakhan", image: "..." },
  { id: 46, name: "Shivalik Maggi Point", cuisine: "Fast Food, Street Food", location: "Mussoorie Road / Rajpur", image: "..." },
  { id: 47, name: "Farzi Cafe", cuisine: "Modern Indian, Bar & Kitchen", location: "Rajpur Road", image: "..." },
  { id: 48, name: "Coco Osteria", cuisine: "Italian, Pizza", location: "Rajpur Road", image: "..." },
  { id: 49, name: "D Milano", cuisine: "Italian, Pizza, Fine Dining", location: "Rajpur Road / Malls", image: "..." },
  { id: 50, name: "Rosetta", cuisine: "Italian, Continental", location: "Rajpur Road / Malls", image: "..." },
  { id: 51, name: "House of Nutmeg (fine dining)", cuisine: "Multi-cuisine, Fine Dining", location: "Karanpur / Rajpur", image: "..." },
  { id: 52, name: "Range — Cosmopolitan Food Gallery", cuisine: "Multi-cuisine, Fine Dining", location: "Central Dehradun / Hotels area", image: "..." },
  { id: 53, name: "Monsoon (fine dining)", cuisine: "Continental, Asian", location: "Hotel / Rajpur area", image: "..." },
  { id: 54, name: "Las Brisas", cuisine: "Restaurant with view, Continental, Indian", location: "Outskirts / Malsi", image: "..." },
  { id: 55, name: "19th CenturyUK (listed on view restaurants)", cuisine: "Fine Dining, European", location: "Dehradun District / scenic spot", image: "..." },
  { id: 56, name: "The Rosemary Restaurant", cuisine: "Continental, Indian", location: "Dehradun District (view)", image: "..." },
  { id: 57, name: "Jal & Jalebi", cuisine: "North Indian, Regional", location: "Near river / central listings", image: "..." },
  { id: 58, name: "Raazmaataaz (Razzmaatazz / Razzmatazz Cafe variants)", cuisine: "Cafe, Continental", location: "Rajpur Road", image: "..." },
  { id: 59, name: "Happy Heart Cafe", cuisine: "Cafe, Family Dining", location: "Majra / Shewala area", image: "..." },
  { id: 60, name: "70 Percent Restro Cafe", cuisine: "Cafe, Multi-cuisine", location: "Central Dehradun", image: "..." },
  { id: 61, name: "Station Penguin", cuisine: "Cafe, Quick Bites", location: "Raipur Road / Bajhet", image: "..." },
  { id: 62, name: "Thikana Cafe & Huts", cuisine: "Cafe, Local, Fast Food", location: "Maldevta / Rajpur outskirts", image: "..." },
  { id: 63, name: "Toss Cafe Lounge", cuisine: "Cafe, Lounge, Multi-cuisine", location: "Rajpur Road", image: "..." },
  { id: 64, name: "The Bend (Cafe & Bistro)", cuisine: "Cafe, Continental, Indian", location: "Rajpur Road", image: "..." },
  { id: 65, name: "Satwah", cuisine: "Gourmet Dining, Multi-cuisine", location: "Karanpur / Rajpur listings", image: "..." },
  { id: 66, name: "Kalsang AMA Cafe", cuisine: "Tibetan, Chinese, Cafe", location: "Rajpur Road / Mall area", image: "..." },
  { id: 67, name: "T'Qila / T Qila (listed bars/restos)", cuisine: "Multi-cuisine, Bar", location: "Rajpur Road", image: "..." },
  { id: 68, name: "Café Miss Managed", cuisine: "Cafe, Casual Dining", location: "New Survey Road", image: "..." },
  { id: 69, name: "Candy Crush Cafe", cuisine: "Desserts, Cafe", location: "Dobhalwala / Rajpur Road", image: "..." },
  { id: 70, name: "Craver’s Cafe", cuisine: "Cafe, Bakery, Fast Food", location: "EC Road / Karanpur", image: "..." },
  { id: 71, name: "Angrezi Beat Cafe", cuisine: "Cafe, Live Music, Fast Food", location: "Survey Chowk / Karanpur", image: "..." },
  { id: 72, name: "Sosha Garden Cafe", cuisine: "Garden Cafe, Continental, Indian", location: "Rajpur / outskirts", image: "..." },
  { id: 73, name: "Tantrum Cafe", cuisine: "Cafe, Beverages, Light Bites", location: "Rajpur Road", image: "..." },
  { id: 74, name: "Little Italy Pizzeria", cuisine: "Italian, Pizza", location: "Jakhan", image: "..." },
  { id: 75, name: "Slake Cafe", cuisine: "Cafe, Snacks, Beverages, Desserts", location: "Rajpur Road", image: "..." },
  { id: 76, name: "Ziba House Cafe", cuisine: "Cafe, Bakery, Continental", location: "Rajpur Road / Chukkuwala", image: "..." },
  { id: 77, name: "Lhasa Restaurant", cuisine: "Tibetan, Chinese, Asian", location: "Old Rajpur / Gulsarai", image: "..." },
  { id: 78, name: "First Gear Cafe", cuisine: "Cafe, Fast Food, Chinese", location: "Mussoorie Road", image: "..." },
  { id: 79, name: "Big Bee’s Pizza", cuisine: "Pizza, Italian, Fast Food", location: "Rajpur Road", image: "..." },
  { id: 80, name: "Angeethi Restaurant", cuisine: "North Indian, Tandoori", location: "Ballupur / Central Dehradun", image: "..." },
  { id: 81, name: "The Yellow Chilli", cuisine: "North Indian, Mughlai", location: "Rajpur Road / Mall area", image: "..." },
  { id: 82, name: "The Great Kabab Factory", cuisine: "North Indian, Mughlai", location: "Rajpur Road / Mall area", image: "..." },
  { id: 83, name: "Nukkad", cuisine: "Italian, Cafe, Indian", location: "Old Mussoorie Road", image: "..." }
];

const visibleCafes = cafes.slice(0,42);

function CafeSearch() {
  const [query, setQuery] = useState('');

  const filteredCafes = cafes
    .filter(cafe =>
      cafe.name.toLowerCase().includes(query.toLowerCase()) ||
      cafe.cuisine.toLowerCase().includes(query.toLowerCase()) ||
      cafe.location.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 83);

  return (
    <div className="container">
      <h2 className="title">Explore</h2>
      <input
        type="text"
        placeholder="Search by cafe, cuisine, or area"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="searchInput"
      />

      {query ? (
        filteredCafes.length > 0 ? (
          <div className="cafeGrid">
            {filteredCafes.map(cafe => (
              <div key={cafe.id} className="cafeCard">
                <img src={cafe.image} alt={cafe.name} className="cafeCard-img" />
                <div className="cafeCard-info">
                  <div className="cafeCard-header">
                    <span className="cafeCard-name">{cafe.name}</span>
                    <button className="heart-btn" title="Add to favourites">♡</button>
                  </div>
                  <div className="cafeCard-cuisine">{cafe.cuisine}</div>
                  <div className="cafeCard-location">{cafe.location}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="noResultsPopout">No cafes found for this search!</div>
        )
      ) : (
        <div className="cafeGrid">
          {visibleCafes.map(cafe => (
            <div key={cafe.id} className="cafeCard">
              <img src={cafe.image} alt={cafe.name} className="cafeCard-img" />
              <div className="cafeCard-info">
                <div className="cafeCard-header">
                  <span className="cafeCard-name">{cafe.name}</span>
                  <button className="heart-btn" title="Add to favourites">♡</button>
                </div>
                <div className="cafeCard-cuisine">{cafe.cuisine}</div>
                <div className="cafeCard-location">{cafe.location}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CafeSearch;
