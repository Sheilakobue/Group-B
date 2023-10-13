import React from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
//import { useRouter } from 'next/router';
import MainNav from '@/components/layout/main-nav';
import RecipeList from '@/components/recipes/recipe-list';
import LoadMore from '@/components/home-page/show-more';
import ArrowIpIcon from '@/components/icons/arrow-up-icon';

export default function AllRecipes() {
  return (
    <Fragment>
      <MainNav />
      <RecipeList />
      <LoadMore />
      <ArrowIpIcon />
    </Fragment>
  );
}
