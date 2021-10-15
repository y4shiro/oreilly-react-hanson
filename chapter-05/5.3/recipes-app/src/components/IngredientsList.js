import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ List }) {
  return (
    <ul className="ingredients">
      {List.map((ingredient, i) => {
        <Ingredient key={i} {...ingredient} />;
      })}
    </ul>
  );
}
