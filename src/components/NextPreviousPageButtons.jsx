const NextPreviousPageButtons = (props) => {
  const createPreviousPage = () => {
    return (
      <button
        onClick={() => props.passFunction(props?.exercises.previous)}
        className="w-40 m-2 relative px-4 py-2 border border-blue text-sm text-center font-medium rounded-md text-blue bg-white hover:bg-darkblue hover:text-white"
      >
        Previous page
      </button>
    );
  };

  const createNextPage = () => {
    return (
      <button
        onClick={() => props.passFunction(props?.exercises.next)}
        className="w-40 m-2 relative px-4 py-2 border border-blue text-sm text-center font-medium rounded-md text-blue bg-white hover:bg-darkblue hover:text-white"
      >
        Next page
      </button>
    );
  };

  const showNoMoreExercises = () => {
    return (
      <p className="w-40 m-2 relative px-4 py-2 text-sm text-center font-medium rounded-md text-white bg-blue">
        No More Exercises
      </p>
    );
  };
  // console.log("exercises", exercises);
  return (
    <div className="flex-1 flex justify-center">
      {props?.exercises?.previous
        ? createPreviousPage(props?.exercises?.previous)
        : null}
      {props?.exercises?.next
        ? createNextPage(props?.exercises?.next)
        : showNoMoreExercises()}
    </div>
  );
};

export default NextPreviousPageButtons;
