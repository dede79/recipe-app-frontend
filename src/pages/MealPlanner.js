import React, { useState } from "react";
import MealList from "../components/MealList";
import styled from "styled-components";

function MealPlanner() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
        .then((response) => response.json())
        .then((data) => {
          setMealData(data);
        })
        .catch(() => {
          console.log("error");
        });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <MealWrapper>
      <div className="meal-planner">
        <section className="controls">
          <input
              type="number"
              placeholder="Calories (e.g. 2000)"
              onChange={handleChange}
          />
          <button onClick={getMealData}>Get Daily Meal Plan</button>
        </section>
        {mealData && <MealList mealData={mealData} />}
      </div>
    </MealWrapper>
  );
}

const MealWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    text-align: center;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export default MealPlanner;
