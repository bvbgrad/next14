import classes from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({ meals }) {
  console.log('MealsGrid meals qty: ', meals.length);
  return (
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
  );
}
