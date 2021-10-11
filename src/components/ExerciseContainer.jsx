function ExerciseContainer(props) {
  console.log(props.contents.name);
  return (
    <>
      <div className="border-blue border-solid border-2 rounded-md my-1">
        <h3 className="bg-blue font-bold text-white text-lg m-4 py-1 px-4 rounded-lg inline-block">
          {props.contents.name}
        </h3>
        <div className="mx-5 mb-2">
          <p className="text-md text-blue py-1">
            Category:{" "}
            <span className="font-bold">{props?.contents?.category?.name}</span>
          </p>
          <p className="text-md text-blue py-1">
            Equipment:{" "}
            {props?.contents?.equipment?.map((item) => {
              return <span className="font-bold">{item.name + " "}</span>;
            })}
          </p>
          <div className="text-md text-blue py-1">
            {/* {props.contents.description} */}
            {props.contents.description.replace(
              /<p>|<\/p>|<ol>|<\/ol>|<li>|<\/li>|<em>|<\/em>|<ul>|<\/ul>/g,
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExerciseContainer;
