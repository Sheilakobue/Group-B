import React, { useState, useEffect } from 'react';
import FavoritePage from '../../pages/recipe/favoritePage';
import { getFavoriteRecipes } from '../../pages/database/recipesModule';

const FavoritePageContainer = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteRecipes = async () => {
      const data = await getFavoriteRecipes();
      setFavoriteRecipes(data);
    };
    fetchFavoriteRecipes();
  }, []);

   if (loading) {
     // Loading state
     return <p>Loading...</p>;
   }

if (error) {
  // Error state
  return <p>Error: {error}</p>;
}

  return <FavoritePage favoriteRecipes={favoriteRecipes} />;
};
export default FavoritePageContainer;