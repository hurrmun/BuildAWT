import ExerciseContainer from "./ExerciseContainer";

const ShowExercises = (props) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      {props?.exercises?.results?.map((exercise, index) => {
        return (
          <ExerciseContainer
            key={index}
            contents={exercise}
            categories={props.categories}
            equipment={props.equipment}
          />
        );
      })}
    </div>
  );
};

export default ShowExercises;
