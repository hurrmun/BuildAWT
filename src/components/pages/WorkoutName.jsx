import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExerciseContainer from "../ExerciseContainer";

function WorkoutName(props) {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const params = useParams();
  const workoutName = params.workoutName;
  console.log("workout name", workoutName);
  useEffect(() => {
    for (const workout of props.workoutList) {
      if (workout.name === workoutName) {
        setCurrentWorkout(workout);
      }
    }
  }, [workoutName, props.workoutList]);
  console.log("current workout", currentWorkout);

  const ShowWorkoutExercises = () => {
    return (
      <div className="grid grid-cols-1 gap-1">
        {currentWorkout?.exercises?.map((exercise, index) => {
          return (
            <ExerciseContainer
              key={index}
              contents={exercise}
              categories={props.categories}
              equipment={props.equipment}
              openModal={props.openModal}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-1">
          <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
            {workoutName}
          </h1>
          <button className="bg-blue text-white justify-self-end px-4 rounded hover:bg-red hover:border-red">
            Delete Workout
          </button>
        </div>
      </div>
      <div className="max-w-2xl mx-auto pt-3 px-4 sm:pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <ShowWorkoutExercises />
      </div>
    </>
  );
}

export default WorkoutName;
