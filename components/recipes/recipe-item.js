import React from 'react';
//import Link from 'next/link';
import Image from 'next/image';
//import Button from "../ui/button";
//import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from './recipe-item.module.css';

export default function RecipeItem(props) {
  const { title, images, id, description } = props;
  const exploreLink = `/recipes/${id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + images} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.summary}>
          <h2>{description}</h2>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Recipes</span>
            <span className={classes.icon}>
              
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
