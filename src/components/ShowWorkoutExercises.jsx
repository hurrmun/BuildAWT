import ExerciseContainer from "./ExerciseContainer";

const ShowWorkoutExercises = (props) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      {props.currentWorkout?.exercises?.map((exercise, index) => {
        return (
          <ExerciseContainer
            key={index}
            contents={exercise}
            categories={props.categories}
            equipment={props.equipment}
            openModal={props.openModal}
            workout={props.currentWorkout}
            removeExerciseButton={true}
            removeExercise={props.removeExercise}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default ShowWorkoutExercises;
