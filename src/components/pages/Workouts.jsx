import { useState } from "react";
import ShowWorkouts from "../ShowWorkouts";
import NewWorkoutModal from "../NewWorkoutModal";

function Workouts(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-1">
          <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
            My Workouts
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue text-white justify-self-end px-4 rounded hover:bg-lightblue hover:border-blue"
          >
            New Workout
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Workouts</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* {props.workouts.map((workout) => (
            <Link key={workout.name} to={workout.href} className="group">
              <div className="w-full aspect-w-16 aspect-h-9 bg-blue rounded-lg overflow-hidden">
                <img
                  src={workout.imageSrc}
                  alt={workout.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg text-blue font-bold">
                {workout.name}
              </h3>
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
            </Link>
          ))} */}
          <ShowWorkouts workouts={props.workouts} />
          <NewWorkoutModal
            open={open}
            setOpen={setOpen}
            createNewWorkout={props.createNewWorkout}
          />
        </div>
      </div>
    </>
  );
}

export default Workouts;
