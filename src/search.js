import React, { useState } from 'react';

const cafes = [
  { id: 1, name: 'Espresso Lane', cuisine: 'Italian', location: 'Delhi' },
  { id: 2, name: 'Chopsticks Cafe', cuisine: 'Chinese', location: 'Mumbai' },
  { id: 3, name: 'Brew & Co', cuisine: 'Continental', location: 'Bangalore' },
  // add more cafes with location or cuisine
];

function CafeSearchPage() {
  const [query, setQuery] = useState('');

  const filteredCafes = cafes.filter(cafe =>
    cafe.name.toLowerCase().includes(query.toLowerCase()) ||
    cafe.cuisine.toLowerCase().includes(query.toLowerCase()) ||
    cafe.location.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, cuisine, or location"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: '8px', width: '300px' }}
      />

      <ul>
        {filteredCafes.length > 0 ? (
          filteredCafes.map(cafe => (
            <li key={cafe.id}>
              <strong>{cafe.name}</strong> – {cafe.cuisine} – {cafe.location}
            </li>
          ))
        ) : (
          <li>No cafes found.</li>
        )}
      </ul>
    </div>
  );
}

export default CafeSearchPage;
