import React from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
//import { useRouter } from 'next/router';
import MainNav from '@/components/layout/main-nav';
import RecipeList from '@/components/recipes/recipe-list';
import LoadMore from '@/components/home-page/Load-more';


export default function AllRecipes() {
  return (
    <Fragment>
      <Head>
        <title>All recipes</title>
      </Head>
      <Head>
        <title>All Recipes</title>
        <meta
          name="description"
          content="Explore food from around the world..."
        />
      </Head>
      <MainNav />
      <RecipeList />
      <LoadMore/>
    </Fragment>
  );
}
