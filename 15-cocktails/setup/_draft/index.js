import { data } from './data.js';

const { drinks } = data;

// get all key that includes strIngredient and store it in someshit

// const ingredientKey = Object.keys(drinks[0]).filter((item) =>
//   item.includes('strIngredient')
// );

// store all value that inclues strIngredient in an array

const ingredient = [];

drinks.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key.includes('strIngredient')) {
      ingredient.push(item[key]);
    }
  });
});

console.log(ingredient.filter((item) => item !== null));

// const {
//   strDrink,
//   strCategory,
//   strDrinkThumb,
//   strAlcoholic,
//   strGlass,
//   strInstructions,
// } = drinks[0];

// const newCocktail = {
//   name: strDrink,
//   category: strCategory,
//   image: strDrinkThumb,
//   info: strAlcoholic,
//   glass: strGlass,
//   instructions: strInstructions,
//   ingredients: []
// };

// console.log(newCocktail);
