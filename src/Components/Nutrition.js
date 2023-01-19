import axios from "axios";
import { useState } from "react";
import "./Nutrition.css";

const FoodNutrition = () => {
  const [food, setFood] = useState("");
  const [foodData, setFoodData] = useState([]);
  const url = "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition";
  const options = {
    params: { query: food },
    headers: {
      "X-RapidAPI-Key": "85014b4612msh93b17daeb881a0fp1a4cdejsn73e5031d26ac",
      "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
    },
  };

  const findFoodNutrition = () => {
    axios
      .get(url, options)
      .then(function (response) {
        setFoodData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setFood("");
  };
  return (
    <>
      <main>
        <div className="inputbox">
          <div className="input">
            <input
              placeholder="Food name"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
            <button onClick={findFoodNutrition}>FIND!</button>
          </div>
        </div>
        <div className="food-info">
          {foodData.map((data) => (
            <div className="info-box-food">
              <h3>
                <span>Name:</span>
                {data.name}
              </h3>
              <h3>
                <span>Calories:</span>
                {data.calories}
              </h3>
              <h3>
                <span>Total Fat:</span>
                {data.fat_total_g}
              </h3>
              <h3>
                <span>Gram-protein: </span>
                {data.protein_g}
              </h3>
              <h3>
                <span>Gram-Fiber: </span>
                {data.fiber_g}
              </h3>
              <h3>
                <span>Gram-Sugar: </span>
                {data.sugar_g}
              </h3>
              <h3>
                <span>MiliGram-Cholesterol : </span>
                {data.cholesterol_mg}
              </h3>
              <h3>
                <span>Gram-Carbohydrates : </span>
                {data.carbohydrates_total_g}
              </h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default FoodNutrition;

// {foodData.map((data) => (
//     <div className="info-box">
//       <div className="muscle-group">
//         <h3>
//           <span>Exercise name:</span> {data.name}
//         </h3>
//         <h3>
//           <span>Exercide type:</span> {data.type}
//         </h3>
//         <h3>
//           <span>Mucle: </span> {data.muscle}
//         </h3>
//         <h3>
//           <span>Equipment: </span>
//           {data.equipment}
//         </h3>
//       </div>
//       <div className="instruction">
//         <h4>{data.instructions}</h4>
//       </div>
//     </div>
//   ))}
