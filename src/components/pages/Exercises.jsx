import { useState, useEffect } from "react";

function Exercises() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState([]);

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

  useEffect(() => {
    fetchAllEquipment();
    fetchAllCategories();
  }, []);

  const filters = [
    {
      id: "equipment",
      name: "Equipment",
      options: equipment.map((item) => {
        return { equipmentId: item.id, equipmentName: item.name };
      }),
    },
    {
      id: "category",
      name: "Category",
      options: categories.map((item) => {
        return { categoryId: item.id, categoryName: item.name };
      }),
    },
  ];

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
        <form action="">
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
                            name={item.equipmentName}
                            id={item.equipmentName}
                            value={item.equipmentId}
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
                            name={item.categoryName}
                            id={item.categoryName}
                            value={item.categoryId}
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
    </>
  );
}

export default Exercises;
