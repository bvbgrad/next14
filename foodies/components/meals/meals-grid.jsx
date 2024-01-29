import classes from './meals-grid.module.css'

export default function MealsGrid(meals) {
  return (
    <>
      <div>MealsGrid</div>
      <ul className={meals}>
        {meals.map((meal) => {
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>;
        })}
      </ul>
    </>
  );
}
