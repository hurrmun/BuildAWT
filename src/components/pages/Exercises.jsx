import { Fragment, useRef, useState, useEffect } from "react";
import ShowExercises from "../ShowExercises";
import NextPreviousPageButtons from "../NextPreviousPageButtons";
import { Dialog, Transition } from "@headlessui/react";

function Exercises() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState("");
  const [checkedEquipment, setCheckedEquipment] = useState("");
  const [exercises, setExercises] = useState([]);
  //   Modal
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

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

  const fetchExercises = async (link) => {
    if (link) {
      try {
        const res = await fetch(link);
        const data = await res.json();
        //   console.log("json data", data);
        setExercises(data);
      } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e);
      }
    } else {
      try {
        const res = await fetch(
          `https://wger.de/api/v2/exercise/?format=json&language=2${checkedCategories}${checkedEquipment}`
        );
        const data = await res.json();
        //   console.log("json data", data);
        setExercises(data);
      } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e);
      }
    }
  };

  useEffect(() => {
    fetchAllEquipment();
    fetchAllCategories();
    fetchExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCategories, checkedEquipment]);

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
    // console.log("checked Items", checkedItems);
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
    // console.log("checked eq", checkedEquipment);
    // console.log("checked cat", checkedCategories);
  };

  const handleChange = (event) => {
    // console.log(event.target.type);
    if (event.target.type === "checkbox") {
      //   console.log("checked?", event.target.checked);
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

  const showModal = (str) => {
    setOpen(true);
    console.log("str", str);
  };

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
            <button className="font-bold text-white bg-blue p-4 rounded-lg my-4 hover:bg-darkblue">
              Search Exercises
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-2xl mx-auto pt-3 px-4 sm:pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <ShowExercises
          exercises={exercises}
          categories={categories}
          equipment={equipment}
          openModal={showModal}
        />
      </div>

      <div className="bg-white px-4 py-3 flex items-center justify-center sm:px-6">
        <NextPreviousPageButtons
          exercises={exercises}
          passFunction={fetchExercises}
        />
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden border-2 border-blue transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-bold text-blue"
                      >
                        Add Exercise to Workout
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-blue">
                          Please select a workout from your workouts list to add
                          this exercise to.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 flex flex-wrap sm:flex-nowrap">
                  <select
                    name="pets"
                    id="pet-select"
                    className="border border-blue rounded-md w-full inline-flex justify-center px-4 py-2 mb-3 sm:mb-0 text-base font-medium text-blue"
                  >
                    <option value="">Select Workout</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                  </select>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border-2 border-blue px-4 py-2 mb-3 sm:mb-0 bg-blue text-sm font-medium text-white hover:bg-darkblue sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-blue px-4 py-2 bg-white text-sm font-medium text-blue hover:bg-blue hover:text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Exercises;
