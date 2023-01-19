import axios from "axios";
import { useState } from "react";
import "./Exercises.css";
const Exercises = () => {
  const [error, setError] = useState(false);
  const [muscle, setMuscle] = useState("");
  const [exerciseData, setExerciseData] = useState([]);
  const url = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises";
  const options = {
    params: { muscle: muscle },
    headers: {
      "X-RapidAPI-Key": "85014b4612msh93b17daeb881a0fp1a4cdejsn73e5031d26ac",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  const findExercise = () => {
    if (muscle.length == 0) {
      setError(true);
    } else {
      axios
        .get(url, options)
        .then((response) => {
          setExerciseData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
      setMuscle("");
    }
  };
  return (
    <>
      <div className="input-box">
        <div className="input">
          <input
            placeholder="muscle group ex: lats"
            value={muscle}
            onChange={(e) => setMuscle(e.target.value)}
          />
          <button onClick={findExercise}>FIND!</button>
        </div>
        <div className="exercise-info">
          {exerciseData.map((data) => (
            <div className="info-box">
              <div className="muscle-group">
                <h3>
                  <span>Exercise name:</span> {data.name}
                </h3>
                <h3>
                  <span>Exercide type:</span> {data.type}
                </h3>
                <h3>
                  <span>Mucle: </span> {data.muscle}
                </h3>
                <h3>
                  <span>Equipment: </span>
                  {data.equipment}
                </h3>
              </div>
              <div className="instruction">
                <h4>{data.instructions}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercises;
