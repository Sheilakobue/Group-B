import React from "react";
import classes from "./show-more.module.css";

const ShowMoreButton = ({ remainingRecipes, onClick }) => {
  return (
    <div>
      <button className={classes.ShowMoreBtn} onClick={onClick}>
        Show more ({remainingRecipes} )
      </button>
    </div>
  );
};

export default ShowMoreButton;
