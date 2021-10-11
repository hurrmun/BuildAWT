import "./App.css";
// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Workouts from "./components/pages/Workouts";
import Exercises from "./components/pages/Exercises";

//* change below to state that stores all current workouts
const workoutList = [
  {
    id: 1,
    name: "Workout 1 Name",
    href: "#",
    exercises: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Workout 2 Name",
    href: "#",
    exercises: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Workout 3 Name",
    href: "#",
    exercises: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Workout 4 Name",
    href: "#",
    exercises: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Workout 5 Name",
    href: "#",
    exercises: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

// fetchAllCategories();

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <h1>Hello World</h1> */}
      <Switch>
        <Route exact path="/">
          <Workouts workouts={workoutList} />
        </Route>
        <Route path="/exercises">
          <Exercises />
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
