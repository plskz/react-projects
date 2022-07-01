import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Loading from '../components/Loading';

import Error from '../pages/Error';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    axios
      .get(url + id)
      .then((res) => {
        const data = res.data;
        const { drinks } = data;
        const {
          strDrink,
          strCategory,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strInstructions,
        } = drinks[0];

        //#region FUCK THIS SHIT
        const ingredient = [];

        drinks.forEach((item) => {
          Object.keys(item).forEach((key) => {
            if (key.includes('strIngredient')) {
              ingredient.push(item[key]);
            }
          });
        });
        //#endregion

        const newCocktail = {
          name: strDrink,
          category: strCategory,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
          instructions: strInstructions,
          ingredients: ingredient.filter((item) => item !== null),
        };

        setCocktail(newCocktail);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.log(err);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { name, category, image, info, glass, instructions, ingredients } = cocktail;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
            {ingredients.join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
