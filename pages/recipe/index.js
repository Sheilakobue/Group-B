import React from "react";
import { Fragment } from "react";
import RecipeList from "@/components/recipes/recipe-list";
import ArrowIpIcon from "@/components/icons&Buttons/arrow-up-icon";
import { RunAllRecipes } from '../api/database/recipesModule';

export default function AllRecipes(props) {
  
  return (
    <Fragment>
      <RecipeList data={props.data} />
      <ArrowIpIcon />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const data = await RunAllRecipes(1);

  return {
    props: {
      data: data,
      
    },
  };
}
