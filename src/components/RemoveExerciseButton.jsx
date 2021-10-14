const RemoveExerciseButton = (props) => {
  return (
    <button
      onClick={() => props.removeExercise(props.workout, props.index)}
      className="bg-white font-medium text-blue text-lg border border-blue my-4 ml-4 py-1 px-4 rounded-lg hover:bg-red hover:border-red hover:text-white inline-block"
    >
      Remove
    </button>
  );
};

export default RemoveExerciseButton;
