import React, { useState } from 'react';
import styles from '../icons&Buttons/add-to-favorite-btn.module.css';
import { HiOutlineHeart } from 'react-icons/hi';

function AddToFavoritesButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const buttonClasses = `${styles.favoriteButton} ${
    isFavorite ? styles.pulse : ''
  }`;

  return (
    <button onClick={toggleFavorite} className={buttonClasses}>
      <HiOutlineHeart
        color={isFavorite ? 'red' : 'green'}
        size={isFavorite ? 30 : 20}
      />
    </button>
  );
}

export default AddToFavoritesButton;
