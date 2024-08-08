import { useEffect, useState } from 'react';
import mealPlanData from './mealPlanData.json';
import './App.css';
import MealCard from './MealCard';
import TotalCard from './TotalCard';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [totals, setTotals] = useState({});

  useEffect(() => {
    setMeals(mealPlanData.meals);
    setTotals(mealPlanData.totals);
  }, []);

  return (
    <div className="container">
      <h1>Daily Meal Plan</h1>

      <TotalCard totals={totals} />

      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </div>
  );
};

export default App;
