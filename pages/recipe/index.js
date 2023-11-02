import React from "react";
import { Fragment } from "react";
import RecipeList from "@/components/recipes/recipe-list";
import ArrowIpIcon from "@/components/icons&Buttons/arrow-up-icon";
import { AllRecipesPreview } from "../api/database/recipesModule";

export default function AllRecipes(props) {
  
  return (
    <Fragment>
      <RecipeList data={props.data} />
      <ArrowIpIcon />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const data = await AllRecipesPreview(1);

  return {
    props: {
      data: data,
      
    },
  };
}
