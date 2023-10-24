import React,{useState} from 'react'
import { MdStars } from "react-icons/Md";
import classes from './favoriteBtn.module.css';

export default function FavoriteBtn() {
const [isFavorite, setIsFavorite] = useState(false);
const toggleFavorite =()=>{
setIsFavorite((prevIsFavorite) => !prevIsFavorite);
}

  return (
    <button
    className={`${classes.favoriteButton} ${isFavorite ? classes.favoriteActive : ''}`}
    onClick={toggleFavorite}>
      <MdStars  className={classes.favoriteIcon}/>
    </button>
  );
}
