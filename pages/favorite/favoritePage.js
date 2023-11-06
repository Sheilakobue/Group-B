import React from 'react';
import Button from '../ui/button/button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart as solidHeart,} from '@fortawesome/free-solid-svg-icons';

function FavoritePage(props) {
  const {
    id,
    title,
    prep,
    cook,
    category,
    servings,
    published,
    image,
    patchNo,
  } = props;

  const [removeFromFav, setRemoveFromFav] = useState(true);
  const publishedDate = new Date(published);
  const formattedPublishedDate = publishedDate.toISOString().split('T')[0];

  async function removeFromFavorite(recipeId) {
    console.log(recipeId);
    const response = await fetch('/api/favorites', {
      method: 'DELETE',
      body: JSON.stringify(recipeId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Recipe failed to delete');
    } else if (response.ok) {
      setRemoveFromFav(false);
    }
  }
  return (
    <div>
      {removeFromFav && (
        <div>
          <li>
            <img
              src={image}
              alt={id}
              width={400}
              height={200}              
            />
            <div>
              <h2> {title} </h2>
            </div>
                <div>
                  <div>Preparation:</div>
                  <div>Cooking time:</div>
                </div>
                <div>
                  <div>{prep} mins</div>
                  <div>{cook} mins</div>
                </div>
              
            <div> {category} </div>
            <div> {servings} </div>
            <div>{formattedPublishedDate} </div>
            <div>
              <Button
                link={`/recipes/${patchNo}/${id}`}
              >
                <span>View Recipe</span>
              </Button>
              <button
                onClick={() => removeFromFavorite({ _id: id })}
              >
                <FontAwesomeIcon
                  icon={solidHeart}
                  size="2x"
                  color="red"
                  onClick={() => removeFromFavorite({ _id: id })}
                />
              </button>
            </div>
          </li>
        </div>
      )}
    </div>
  );
}
export default FavoritePage;
