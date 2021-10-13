const AddExerciseButton = (props) => {
  return (
    <button
      onClick={() => props.openModal(props.contents)}
      className="bg-white font-medium text-blue text-lg border border-blue mt-4 ml-4 py-1 px-4 rounded-lg hover:bg-lightblue hover:border-lightblue hover:text-white inline-block"
    >
      + Add to Workout
    </button>
  );
};

export default AddExerciseButton;
