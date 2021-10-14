import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ExerciseContainer from "../ExerciseContainer";

function WorkoutName(props) {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const params = useParams();
  const workoutName = params.workoutName;
  // console.log("workout name", workoutName);
  useEffect(() => {
    for (const workout of props.workoutList) {
      if (workout.name === workoutName) {
        setCurrentWorkout(workout);
      }
    }
  }, [workoutName, props.workoutList]);
  // console.log("current workout", currentWorkout);

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
              workout={currentWorkout}
              removeExerciseButton={true}
              removeExercise={props.removeExercise}
              index={index}
            />
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-1 items-center">
          <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
            {workoutName}
          </h1>
          <Link
            to={"/"}
            onClick={() => {
              props.deleteWorkout(currentWorkout);
            }}
            className=" bg-blue text-white justify-self-end px-4 py-2 rounded hover:bg-red hover:border-red"
          >
            Delete Workout
          </Link>
        </div>
      </div>
      <div className="max-w-2xl mx-auto pt-3 px-4 sm:pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <ShowWorkoutExercises />
        <div className="flex flex-1 justify-center">
          <Link to="/exercises" className="">
            <button className="font-bold text-white bg-blue py-4 px-10 rounded-lg my-4 hover:bg-lightblue">
              + Add exercises to workout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WorkoutName;
