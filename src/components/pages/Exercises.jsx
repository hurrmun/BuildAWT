import { useState, useEffect } from "react";
import ExerciseContainer from "../ExerciseContainer";

function Exercises() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState("");
  const [checkedEquipment, setCheckedEquipment] = useState("");
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
        `https://wger.de/api/v2/exercise/?format=json&language=2${checkedCategories}${checkedEquipment}`
      );
      const data = await res.json();
      console.log("json data", data);
      setExercises(data);
    } catch (e) {
      console.log("SOMETHING WENT WRONG!!!", e);
    }
  };

  useEffect(() => {
    fetchAllEquipment();
    fetchAllCategories();
    fetchExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCategories, checkedEquipment]);

  useEffect(() => {}, []);

  const showExercises = () => {
    return exercises?.results?.map((exercise, index) => {
      return (
        <ExerciseContainer
          key={index}
          contents={exercise}
          categories={categories}
          equipment={equipment}
        />
      );
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
    console.log("checked Items", checkedItems);
    const categoryValues = [];
    const equipmentValues = [];
    for (let i = 0; i < checkedItems.length; i++) {
      if (checkedItems[i].type === "equipment") {
        equipmentValues.push(checkedItems[i].value);
      } else if (checkedItems[i].type === "category") {
        categoryValues.push(checkedItems[i].value);
      }
    }
    setCheckedEquipment("&equipment=" + equipmentValues.toString());
    setCheckedCategories("&category=" + categoryValues.toString());
    console.log("checked eq", checkedEquipment);
    console.log("checked cat", checkedCategories);
  };

  const handleChange = (event) => {
    console.log(event.target.type);
    if (event.target.type === "checkbox") {
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
    } else if (event.target.type === "radio") {
      const removeCategory = checkedItems.filter(
        (item) => item.type !== "category"
      );
      setCheckedItems([
        ...removeCategory,
        {
          type: event.target.name,
          value: event.target.value,
          name: event.target.id,
        },
      ]);
      //   console.log("checked items", checkedItems);
    }
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
                    {filters[0]?.options?.map((item, index) => {
                      // console.log("equipments", item);
                      return (
                        <div
                          key={item.equipmentName}
                          className="flex items-center"
                        >
                          <input
                            type="checkbox"
                            name={item.type}
                            id={index}
                            value={item.equipmentId}
                            onChange={handleChange}
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
                  <h3 className="text-lg font-bold text-blue p-5">
                    Target Area
                  </h3>
                  <div className="grid grid-cols-2 flex-wrap px-5">
                    {filters[1]?.options?.map((item, index) => {
                      // console.log("category", item);
                      return (
                        <div
                          key={item.categoryName}
                          className="flex items-center"
                        >
                          <input
                            type="radio"
                            name={item.type}
                            id={index}
                            value={item.categoryId}
                            onChange={handleChange}
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
            <button className="font-bold text-white bg-blue p-4 rounded-lg my-4">
              Search Exercises
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-2xl mx-auto pt-3 px-4 sm:pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-1">{showExercises()}</div>
      </div>

      <div className="bg-white px-4 py-3 flex items-center justify-center sm:px-6">
        <div className="flex-1 flex justify-center">
          <button className="w-40 m-2 relative px-4 py-2 border border-blue text-sm text-center font-medium rounded-md text-blue bg-white hover:bg-darkblue hover:text-white">
            Previous page
          </button>
          <button
            href="#"
            className="w-40 m-2 relative px-4 py-2 border border-blue text-sm text-center font-medium rounded-md text-blue bg-white hover:bg-darkblue hover:text-white"
          >
            Next page
          </button>
        </div>
        {/* <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-blue bg-white text-sm font-medium text-blue hover:bg-darkblue hover:text-white">
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-blue bg-white text-sm font-medium text-blue hover:bg-darkblue hover:text-white">
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Exercises;
