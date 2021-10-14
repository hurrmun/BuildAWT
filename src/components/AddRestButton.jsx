const AddRestButton = (props) => {
  return (
    <button
      onClick={() => props.addRestBlock(props.workout, props.index)}
      className="bg-white font-medium text-blue text-lg border border-blue mt-4 ml-4 py-1 px-4 rounded-lg hover:bg-lightblue hover:border-lightblue hover:text-white inline-block"
    >
      Add Rest Block
    </button>
  );
};

export default AddRestButton;
