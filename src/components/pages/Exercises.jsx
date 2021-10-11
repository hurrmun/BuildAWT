import { useState, useEffect } from "react";
import ExerciseContainer from "../ExerciseContainer";

function Exercises() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [exercises, setExercises] = useState([]);

  const fetchAllCategories = async () => {
    try {
      const res = await fetch(
        "https://wger.de/api/v2/exercisecategory/?format=json"
      );
      const data = await res.json();
      setCategories(data.results);
      // console.log(data.results);
    } catch (e) {
      console.log("SOMETHING WENT WRONG!!!", e);
    }
  };

  const fetchAllEquipment = async () => {
    try {
      const res = await fetch("https://wger.de/api/v2/equipment/?format=json");
      const data = await res.json();
      setEquipment(data.results);
      // console.log(data.results);
    } catch (e) {
      console.log("SOMETHING WENT WRONG!!!", e);
    }
  };

  const fetchExercises = async () => {
    try {
      const res = await fetch(
        "https://wger.de/api/v2/exerciseinfo?format=json&language=2"
      );
      const data = await res.json();
      setExercises(data);
    } catch (e) {
      console.log("SOMETHING WENT WRONG!!!", e);
    }
  };

  useEffect(() => {
    fetchAllEquipment();
    fetchAllCategories();
    fetchExercises();
  }, []);

  const showExercises = () => {
    return exercises?.results?.map((exercise) => {
      return <ExerciseContainer contents={exercise} />;
    });
  };

  const filters = [
    {
      id: "equipment",
      name: "Equipment",
      options: equipment.map((item) => {
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
      options: categories.map((item) => {
        return {
          categoryId: item.id,
          categoryName: item.name,
          type: "category",
        };
      }),
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("event", event);
    console.log("checked items", checkedItems);
  };

  const handleChange = (event) => {
    console.log("checked?", event.target.checked);
    event.target.checked
      ? setCheckedItems([
          ...checkedItems,
          {
            type: event.target.name,
            value: event.target.value,
            name: event.target.id,
          },
        ])
      : setCheckedItems(
          checkedItems.filter((item) => {
            return item.name !== event.target.id;
          })
        );
    // setCheckedItems("");
  };

  //   console.log("options", filters[0].options, filters[1].options);

  return (
    <>
      <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-1">
          <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
            Exercises
          </h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-1">
            <h1 className="text-xl font-bold text-blue w-full sm:text-2xl pb-2">
              Filter Exercises
            </h1>
            <div className="border-blue border-solid border-2 rounded-md pb-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                <div>
                  <h3 className="text-lg font-bold text-blue p-5">Equipment</h3>
                  <div className="grid grid-cols-2 flex-wrap px-5">
                    {filters[0]?.options?.map((item) => {
                      // console.log("equipments", item);
                      return (
                        <div
                          key={item.equipmentName}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            name={item.type}
                            id={item.equipmentName}
                            value={item.equipmentId}
                            onChange={handleChange}
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
                  <h3 className="text-lg font-bold text-blue p-5">
                    Target Area
                  </h3>
                  <div className="grid grid-cols-2 flex-wrap px-5">
                    {filters[1]?.options?.map((item) => {
                      // console.log("category", item);
                      return (
                        <div
                          key={item.categoryName}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            name={item.type}
                            id={item.categoryName}
                            value={item.categoryId}
                            onChange={handleChange}
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
            <button className="font-bold text-white bg-blue p-4 rounded-lg my-4">
              Search Exercises
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-2xl mx-auto pt-3 px-4 sm:pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-1">{showExercises()}</div>
      </div>
    </>
  );
}

export default Exercises;
