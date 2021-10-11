import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Workouts from "./components/pages/Workouts";

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
    fetchAllCategories();
    fetchAllEquipment();
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

  console.log("options", filters[0].options, filters[1].options);

  return (
    <div className="App">
      <Navigation />
      {/* <h1>Hello World</h1> */}
      <Switch>
        <Route path="/workouts">
          <Workouts workouts={workoutList} />
        </Route>
        <Route path="/exercises">
          <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-1">
              <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
                Exercises
              </h1>
            </div>
          </div>
          <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-1">
              <h1 className="text-xl font-bold text-blue w-full sm:text-2xl justify-self-start">
                Filter Exercises
              </h1>
            </div>
          </div>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
