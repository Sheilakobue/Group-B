import React from "react";
import Head from "next/head";
import { Fragment } from "react";
//import { useRouter } from 'next/router';
import RecipeList from "@/components/recipes/recipe-list";
import LoadMore from "@/components/home-page/show-more";
import ArrowIpIcon from "@/components/icons&Buttons/arrow-up-icon";

export default function AllRecipes() {
  return (
    <Fragment>
      <Head>
        <title>All Recipes</title>
        <meta
          name="description"
          content="Explore food from around the world..."
        />
        <link rel="icon" type="image/png" href="/recipe-book (1).png" />
      </Head>
      <RecipeList />
      <LoadMore />
      <ArrowIpIcon />
    </Fragment>
  );
}
