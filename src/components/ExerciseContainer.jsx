function ExerciseContainer(props) {
  //   console.log(props.contents.name);

  //   console.log("item", props.contents);
  //   console.log("eq", props.equipment);
  //   console.log("cat", props.categories);

  const category = props.categories.filter(
    (item) => item.id === props.contents.category
  );
  const categoryName = category[0].name;

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

  return (
    <>
      <div className="border-blue border-solid border-2 rounded-md my-1">
        <h3 className="bg-blue font-bold text-white text-lg m-4 py-1 px-4 rounded-lg inline-block">
          {props.contents.name}
        </h3>
        <div className="mx-5 mb-2">
          <p className="text-md text-blue py-1">
            Category: <span className="font-bold">{categoryName}</span>
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
