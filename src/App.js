import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Workouts from "./components/pages/Workouts";
import Exercises from "./components/pages/Exercises";
import WorkoutName from "./components/pages/WorkoutName";
import logoWhite from "./images/ba-logo-white.png";
import fakeData from "./fakeData";

//* change below to state that stores all current workouts
function App() {
  const [categories, setCategories] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [workoutList, setWorkoutList] = useState(fakeData);

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

  const createNewWorkout = (workoutName, imageLink) => {
    const newWorkout = {
      name: workoutName,
      href: `/workouts/${workoutName}`,
      exercises: [],
      imageSrc: imageLink ? imageLink : logoWhite,
      imageAlt: `${workoutName} image`,
    };
    setWorkoutList([...workoutList, newWorkout]);
  };

  const addExercise = (workout, exercise) => {
    // console.log("workout", workout);
    // console.log("exercise", exercise);
    const oldWorkoutList = [...workoutList];
    const newWorkoutList = oldWorkoutList.map((item) => {
      if (item.name === workout) {
        item.exercises.push(exercise);
      }
      return item;
    });
    setWorkoutList(newWorkoutList);
  };

  const deleteWorkout = (workout) => {
    const newWorkoutList = [...workoutList];
    console.log(newWorkoutList.indexOf(workout));
    newWorkoutList.splice(newWorkoutList.indexOf(workout), 1);
    setWorkoutList(newWorkoutList);
  };

  const removeExercise = (workout, exerciseIndex) => {
    // console.log("index", exerciseIndex);
    const newWorkoutList = [...workoutList];
    newWorkoutList[newWorkoutList.indexOf(workout)].exercises.splice(
      exerciseIndex,
      1
    );
    setWorkoutList(newWorkoutList);
  };

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Workouts
            workouts={workoutList}
            createNewWorkout={createNewWorkout}
            deleteWorkout={deleteWorkout}
          />
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
            deleteWorkout={deleteWorkout}
            removeExercise={removeExercise}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
