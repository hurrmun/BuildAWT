import { useState, useEffect } from "react";
import ShowExercises from "../ShowExercises";
import NextPreviousPageButtons from "../NextPreviousPageButtons";
import FilterExercises from "../FilterExercises";
import AddToWorkoutModal from "../AddToWorkoutModal";

function Exercises(props) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState("");
  const [checkedEquipment, setCheckedEquipment] = useState("");
  const [exercises, setExercises] = useState([]);
  //   Modal
  const [selectedExercise, setSelectedExercise] = useState({});
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [open, setOpen] = useState(false);

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
    fetchExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedCategories, checkedEquipment]);

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

  const handleSelect = (event) => {
    event.preventDefault();
    // console.log("value", event.target.value);
    setSelectedWorkout(event.target.value);
  };

  const showModal = (contents) => {
    setSelectedExercise(contents);
    setOpen(true);
    // console.log("contents", contents);
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
        <FilterExercises
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          equipment={props.equipment}
          categories={props.categories}
        />
      </div>
      <div className="max-w-2xl mx-auto pt-3 px-4 sm:pt-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <ShowExercises
          exercises={exercises}
          categories={props.categories}
          equipment={props.equipment}
          openModal={showModal}
        />
      </div>

      <div className="bg-white px-4 py-3 flex items-center justify-center sm:px-6">
        <NextPreviousPageButtons
          exercises={exercises}
          passFunction={fetchExercises}
        />
      </div>
      <AddToWorkoutModal
        selectedExercise={selectedExercise}
        selectedWorkout={selectedWorkout}
        handleSelect={handleSelect}
        workouts={props.workouts}
        addExercise={props.addExercise}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default Exercises;
