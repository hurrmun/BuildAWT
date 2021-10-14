import AddExerciseButton from "./AddExerciseButton";
import RemoveExerciseButton from "./RemoveExerciseButton";

function ExerciseContainer(props) {
  //   console.log(props.contents.name);

  //   console.log("item", props.contents);
  //   console.log("eq", props.equipment);
  //   console.log("cat", props.categories);

  const category = props?.categories?.filter(
    (item) => item.id === props.contents.category
  );
  const categoryName = category?.[0]?.name;

  const equipment = props?.contents?.equipment;
  const equipmentNames = equipment.map((item) => {
    for (const eq of props.equipment) {
      //   console.log("eq in props", eq);
      if (item === eq.id) {
        return eq.name;
      }
    }
    return "eq not found";
  });

  const AddRestButton = (props) => {
    return (
      <button
        onClick={() => props.addRestBlock(props.workout, props.index)}
        className="bg-white font-medium text-blue text-lg border border-blue mt-4 ml-4 py-1 px-4 rounded-lg hover:bg-darkblue hover:border-darkblue hover:text-white inline-block"
      >
        Add Rest Block
      </button>
    );
  };

  const showButtons = () => {
    if (props.showAddExerciseButton) {
      return (
        <AddExerciseButton
          openModal={props.openModal}
          contents={props.contents}
        />
      );
    } else if (props.workoutNamePage) {
      return (
        <>
          <AddRestButton
            addRestBlock={props.addRestBlock}
            workout={props.workout}
            index={props.index}
          />
          <RemoveExerciseButton
            removeExercise={props.removeExercise}
            workout={props.workout}
            index={props.index}
          />
        </>
      );
    }
  };

  return (
    <>
      <div className="border-blue border-solid border-2 rounded-md my-1 pr-4">
        <h3 className="bg-blue font-bold text-white text-lg mt-4 ml-4 py-1 px-4 rounded-lg inline-block">
          {props.contents.name}
        </h3>
        {showButtons()}
        <div className="mx-5 mb-2 mt-2">
          <p className="text-md text-blue py-1">
            Target Area: <span className="font-bold">{categoryName}</span>
          </p>
          <p className="text-md text-blue py-1">
            Equipment:{" "}
            {equipmentNames.map((item, index) => {
              return (
                <span key={index}>
                  <span className="font-medium">{" | "}</span>
                  <span className="font-bold">{item}</span>
                  {/* <span key={index} className="font-medium">
                    {" | "}
                  </span> */}
                </span>
              );
            })}
          </p>
          <div className="text-md text-blue py-1">
            {/* {props.contents.description} */}
            {props.contents.description.replace(
              /<p>|<\/p>|<ol>|<\/ol>|<li>|<\/li>|<em>|<\/em>|<ul>|<\/ul>|<strong>|<\/strong>/g,
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExerciseContainer;
