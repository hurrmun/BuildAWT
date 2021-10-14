import ExerciseContainer from "./ExerciseContainer";
import RemoveExerciseButton from "./RemoveExerciseButton";

const ShowWorkoutExercises = (props) => {
  const RestBlock = (props) => {
    return (
      <div className="border-blue border-solid border-2 bg-blue rounded-md my-1 pr-4">
        <h3 className="font-bold text-white text-lg p-4 ml-4 inline-block">
          Rest
        </h3>
        <RemoveExerciseButton
          removeExercise={props.removeExercise}
          workout={props.workout}
          index={props.index}
        />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-1">
      {props.currentWorkout?.exercises?.map((exercise, index) => {
        if (exercise.name === "rest") {
          return (
            <RestBlock
              workout={props.currentWorkout}
              removeExercise={props.removeExercise}
              index={index}
            />
          );
        } else {
          return (
            <ExerciseContainer
              key={index}
              contents={exercise}
              categories={props.categories}
              equipment={props.equipment}
              openModal={props.openModal}
              workout={props.currentWorkout}
              workoutNamePage={true}
              removeExercise={props.removeExercise}
              index={index}
              addRestBlock={props.addRestBlock}
            />
          );
        }
      })}
    </div>
  );
};

export default ShowWorkoutExercises;
