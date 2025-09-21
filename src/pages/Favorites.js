import React from "react";
import "./Favorites.css";

function FavoritesPage({ favorites =[] , removeFavorite }) {
  return (
    <div className="favoritesContainer">
      <h2 className="favoritesTitle">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="emptyMessage">No favorites added yet.</p>
      ) : (
        <div className="favoritesGrid">
          {favorites.map((cafe) => (
            <div key={cafe.id} className="favoriteCard">
              <img src={cafe.image} alt={cafe.name} className="favoriteImage" />
              <div className="favoriteInfo">
                <div className="favoriteHeader">
                  <span className="favoriteName">{cafe.name}</span>
                  <button
                    className="heartBtn filled"
                    title="Remove from favorites"
                    onClick={() => removeFavorite(cafe.id)}
                  >
                    ♥
                  </button>
                </div>
                <div className="favoriteCuisine">{cafe.cuisine}</div>
                <div className="favoriteLocation">{cafe.location}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
