import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Workouts from "./components/pages/Workouts";
import Exercises from "./components/pages/Exercises";
import WorkoutName from "./components/pages/WorkoutName";

//* change below to state that stores all current workouts
function App() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [workoutList, setWorkoutList] = useState([
    {
      name: "Workout 1 Name",
      href: "/workouts/Workout 1 Name",
      exercises: [
        {
          id: 345,
          uuid: "c788d643-150a-4ac7-97ef-84643c6419bf",
          name: "2 Handed Kettlebell Swing",
          exercise_base: 9,
          status: "2",
          description: "<p>Two Handed Russian Style Kettlebell swing</p>",
          creation_date: "2015-08-03",
          category: 10,
          muscles: [],
          muscles_secondary: [],
          equipment: [10],
          language: 2,
          license: 2,
          license_author: "deusinvictus",
          variations: [],
        },
        {
          id: 227,
          uuid: "53ca25b3-61d9-4f72-bfdb-492b83484ff5",
          name: "Arnold Shoulder Press",
          exercise_base: 20,
          status: "2",
          description:
            "<p>Very common shoulder exercise.</p>\n<p> </p>\n<p>As shown here: https://www.youtube.com/watch?v=vj2w851ZHRM</p>",
          creation_date: "2014-03-09",
          category: 13,
          muscles: [],
          muscles_secondary: [],
          equipment: [3],
          language: 2,
          license: 1,
          license_author: "trzr23",
          variations: [227, 329, 229, 190, 119, 123, 152, 155],
        },
        {
          id: 289,
          uuid: "6add5973-86d0-4543-928a-6bb8b3f34efc",
          name: "Axe Hold",
          exercise_base: 31,
          status: "2",
          description:
            "<p>Grab dumbbells and extend arms to side and hold as long as you can</p>",
          creation_date: "2014-11-02",
          category: 8,
          muscles: [],
          muscles_secondary: [],
          equipment: [3],
          language: 2,
          license: 1,
          license_author: "GrosseHund",
          variations: [],
        },
      ],
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Workout 1 Image",
    },
    {
      name: "Workout 2 Name",
      href: "/workouts/Workout 2 Name",
      exercises: [],
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Workout 2 Image",
    },
    {
      name: "Workout 3 Name",
      href: "/workouts/Workout 3 Name",
      exercises: [],
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Workout 3 Image",
    },
    {
      name: "Workout 4 Name",
      href: "/workouts/Workout 4 Name",
      exercises: [],
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: "Workout 4 Image",
    },
  ]);

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

  const createNewWorkout = () => {};

  const addExercise = (workout, exercise) => {
    console.log("workout", workout);
    console.log("exercise", exercise);
    const oldWorkoutList = [...workoutList];
    const newWorkoutList = oldWorkoutList.map((item) => {
      if (item.name === workout) {
        item.exercises.push(exercise);
      }
      return item;
    });
    setWorkoutList(newWorkoutList);
  };

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Workouts workouts={workoutList} />
        </Route>
        <Route path="/exercises">
          <Exercises
            equipment={equipment}
            categories={categories}
            workouts={workoutList}
            addExercise={addExercise}
          />
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/workouts/:workoutName">
          <WorkoutName
            workoutList={workoutList}
            categories={categories}
            equipment={equipment}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
