import React, { useState } from 'react';

const cafes = [
  {
    id: 1,
    name: 'Cafe De Piccolo',
    cuisine: 'Italian, Cafe, Continental',
    location: 'Rajpur Road',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Orchard Cafe',
    cuisine: 'Pan-Asian, Thai, Tibetan',
    location: 'Near Rajpur',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'First Gear Cafe',
    cuisine: 'Snacks, Burgers, Sandwiches',
    location: 'Malsi, Mussoorie Road',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Cafe Cibo',
    cuisine: 'Italian, Coffee, Sandwiches',
    location: 'Race Course',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    name: 'Kalsang AMA Cafe',
    cuisine: 'Tibetan, Himalayan, Momos',
    location: 'Rajpur Road',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    name: 'Yellow Marigold Cafe',
    cuisine: 'Healthy, Sandwiches, Salads',
    location: 'Jakhan',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    name: 'Razzmatazz Cafe',
    cuisine: 'Fast Food, Coffee, Snacks',
    location: 'Rajpur Road',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    name: 'Chhaya Cafe',
    cuisine: 'Organic, Sandwiches, Healthy',
    location: 'Mussoorie Road',
    image: 'https://images.unsplash.com/photo-1509358273864-6857cf23fdff?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 9,
    name: 'Y Cafe & Restaurant',
    cuisine: 'Mexican, Indian, English',
    location: 'Karanpur',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 10,
    name: "Eddie's Patisserie",
    cuisine: 'Bakery, Cakes, Burgers',
    location: 'Yamuna Colony',
    image: '/images/eddies.jpeg'
  }
];

function App() {
  const [query, setQuery] = useState('');

  const filteredCafes = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(query.toLowerCase()) ||
    cafe.cuisine.toLowerCase().includes(query.toLowerCase()) ||
    cafe.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '32px', maxWidth: '520px', margin: 'auto' }}>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '2.25rem',
          marginBottom: '18px',
          letterSpacing: '-1px',
        }}
      >
        FIND MY CAFE
      </h2>
      <input
        type="text"
        placeholder="Search by cafe, cuisine, or area"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          padding: '14px 12px',
          width: '100%',
          fontSize: '17px',
          borderRadius: '6px',
          border: '1px solid #ddd',
          boxShadow: '0 2px 6px rgba(30,30,60,0.06)',
          marginBottom: '30px',
        }}
      />
      {query && (
        <ul style={{ marginTop: 0, listStyle: 'none', padding: 0 }}>
          {filteredCafes.length > 0 ? (
            filteredCafes.map(cafe => (
              <li
                key={cafe.id}
                style={{
                  background: '#fafaff',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(30,30,60,0.07)',
                  padding: '20px 24px',
                  marginBottom: '18px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img
                  src={cafe.image}
                  alt={cafe.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '22px',
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      color: '#3b2f63',
                      marginBottom: '4px',
                    }}
                  >
                    {cafe.name}
                  </span>
                  <span style={{ fontSize: '15px', color: '#444', marginBottom: '3px' }}>
                    🍽️ <b>Cuisine:</b> {cafe.cuisine}
                  </span>
                  <span style={{ fontSize: '15px', color: '#888' }}>
                    📍 <b>Location:</b> {cafe.location}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <li
              style={{
                marginTop: '16px',
                fontSize: '18px',
                color: '#aa3355',
                textAlign: 'center',
              }}
            >
              No cafes found for this search!
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
