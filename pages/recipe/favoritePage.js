// FavoritePage.js

import React, { useState, useEffect } from 'react';
import { getFavorites } from '../../database/favoriteModule';

export default function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  // Function to fetch favorite recipes when the component mounts
  useEffect(() => {
    const fetchFavorites = async () => {
      const favoriteRecipes = await getFavorites();
      setFavorites(favoriteRecipes);
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <h1>Favorite Recipes</h1>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>{favorite.title}</li>
        ))}
      </ul>
    </div>
  );
}
