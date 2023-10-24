import React,{useState} from 'react'
import { MdStars } from "react-icons/Md";
import classes from './favorite.module.css';

export default function Favorite() {
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
