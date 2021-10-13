function FilterExercises(props) {
  const filters = [
    {
      id: "equipment",
      name: "Equipment",
      options: props.equipment.map((item) => {
        return {
          equipmentId: item.id,
          equipmentName: item.name,
          type: "equipment",
        };
      }),
    },
    {
      id: "category",
      name: "Category",
      options: props.categories.map((item) => {
        return {
          categoryId: item.id,
          categoryName: item.name,
          type: "category",
        };
      }),
    },
  ];

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="grid grid-cols-1 gap-1">
        <h1 className="text-xl font-bold text-blue w-full sm:text-2xl pb-2">
          Filter Exercises
        </h1>
        <div className="border-blue border-solid border-2 rounded-md pb-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div>
              <h3 className="text-lg font-bold text-blue p-5">Equipment</h3>
              <div className="grid grid-cols-2 flex-wrap px-5">
                {filters[0]?.options?.map((item, index) => {
                  // console.log("equipments", item);
                  return (
                    <div key={item.equipmentName} className="flex items-center">
                      <input
                        type="checkbox"
                        name={item.type}
                        id={index}
                        value={item.equipmentId}
                        onChange={props.handleChange}
                        className="text-blue"
                      />
                      <label
                        htmlFor={item.equipmentName}
                        className="text-md font-medium text-blue py-1 px-3"
                      >
                        {item.equipmentName}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue p-5">Target Area</h3>
              <div className="grid grid-cols-2 flex-wrap px-5">
                {filters[1]?.options?.map((item, index) => {
                  // console.log("category", item);
                  return (
                    <div key={item.categoryName} className="flex items-center">
                      <input
                        type="radio"
                        name={item.type}
                        id={index}
                        value={item.categoryId}
                        onChange={props.handleChange}
                        className="text-blue"
                      />
                      <label
                        htmlFor={item.categoryName}
                        className="text-md font-medium text-blue py-1 px-3"
                      >
                        {item.categoryName}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <button className="font-bold text-white bg-blue p-4 rounded-lg my-4 hover:bg-darkblue">
          Search Exercises
        </button>
      </div>
    </form>
  );
}

export default FilterExercises;
