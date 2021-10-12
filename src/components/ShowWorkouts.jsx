import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/solid";

const ShowWorkouts = (props) => {
  return props.workouts.map((workout) => (
    <div key={workout.name}>
      <Link to={workout.href} className="group">
        <div className="w-full aspect-w-16 aspect-h-9 bg-blue rounded-lg overflow-hidden">
          <img
            src={workout.imageSrc}
            alt={workout.imageAlt}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <h3 className="mt-4 text-xl text-blue font-bold inline-block">
          {workout.name}
        </h3>
        <button>
          <TrashIcon className="h-6 mt-4 text-blue" />
        </button>
      </div>
      <p className="mt-1 text-sm font-medium text-blue truncate">
        {workout.exercises.map((exercise, index) => {
          return (
            <span key={index}>
              {" | "}
              <span>{exercise.name}</span>
            </span>
          );
        })}
      </p>
    </div>
  ));
};

export default ShowWorkouts;
