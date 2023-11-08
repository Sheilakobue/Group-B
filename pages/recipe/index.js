import React from 'react';
import { Fragment } from 'react';
import RecipeList from '@/pages/recipe/recipe-list';
import ArrowUpIcon from '@/components/icons&Buttons/arrow-up-icon'; // Fix the import statement
import { RunAllRecipes } from '../../helpers/database/recipesModule';

export default function AllRecipes(props) {
  return (
    <Fragment>
      <RecipeList data={props.data} />
      <ArrowUpIcon />
    </Fragment>
  );
}

export async function getServerSideProps() {
  try {
    const data = await RunAllRecipes(1);

    return {
      props: {
        data: data,
        revalidate: 60,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch data',
      },
    };
  }
}
