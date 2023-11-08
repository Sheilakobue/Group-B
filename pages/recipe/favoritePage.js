import { useContext } from 'react';
import FavoritesContext from '../../components/favorite/Fav-context';
import RecipeDetailPage from '../recipe/[recipeId]';
import Link from 'next/link';
import classes from './RecipeDetailPage.module.css'; // Correct module name
import { IoIosArrowBack } from 'react-icons/io';

function FavoritesPage() {
  // Access the FavoritesContext to get the list of favorite recipes
  const favoriteCtx = useContext(FavoritesContext);
  const favoriteRecipes = favoriteCtx.favorites || [];

  return (
    <section>
      <Link href={`/recipe`} passHref>
        <IoIosArrowBack title="Back to recipes" className={classes.favIcon} />
      </Link>
      <br />
      <h1 className={classes.fav}>Favorite</h1>
      {favoriteRecipes.length === 0 && (
        <p className={classes.message}>
          You have not favorited any recipes yet. Start adding your favorites!
        </p>
      )}

      <section>
        {/* Display the list of favorite recipes */}
        {favoriteRecipes.map((recipe) => (
          <RecipeDetailPage key={recipe._id} recipe={recipe} />
        ))}
      </section>
    </section>
  );
}

export default FavoritesPage;
