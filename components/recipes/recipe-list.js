import React, { useState } from "react";
import Link from "next/link";
import classes from "../recipes/recipe-list.module.css";
import ViewRecipeBtn from "../icons&Buttons/view-recipe-btn";
import ShowMoreButton from "../icons&Buttons/show-more";
import FavoriteBtn from "../icons&Buttons/favoriteBtn";
import Carousel from "@/components/home-page/carousel";

function RecipeList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 50;

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const remainingRecipes = data.length - currentPage * recipesPerPage;
  const displayedRecipes = data.slice(0, currentPage * recipesPerPage);

  return (
    <div className={classes.container}>
    <div className={classes.carousel}>
    <Carousel/>
    </div>
      <h1 className={classes.title}>Recipes</h1>

      <div className={classes.cardContainer}>
        {displayedRecipes.map((recipe, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.cardImageContainer}>
              <img
                src={recipe.images[0]}
                alt={recipe.title}
                className={classes.cardImage}
              />
            </div>
            <div className={classes.cardContent}>
              <h2 className={classes.cardTitle}>{recipe.title}</h2>
              <p className={classes.cardCategory}>
                Category: {recipe.category}
              </p>
              <div className={classes.cardActions}>
                <Link href={`/recipe/${recipe._id}`}>
                  <ViewRecipeBtn />
                </Link>
                <FavoriteBtn />
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <div>
        {" "}
        {remainingRecipes > 0 && (
          <ShowMoreButton
            remainingRecipes={remainingRecipes}
            onClick={handleShowMore}
          />
        )}
      </div>
    </div>
  );
}

export default RecipeList;
