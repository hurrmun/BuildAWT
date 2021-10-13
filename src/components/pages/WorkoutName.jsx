import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function WorkoutName() {
  const [workout, setWorkout] = useState(null);
  const params = useParams();

  const workoutName = params.workoutName;

  return (
    <>
      <h2>Hello!!</h2>
      <h2>{workoutName}</h2>
    </>
  );
}

export default WorkoutName;
