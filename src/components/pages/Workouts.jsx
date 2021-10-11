function Workouts(props) {
  return (
    <>
      <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-1">
          <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
            My Workouts
          </h1>
          <button className="bg-blue text-white justify-self-end px-4 rounded">
            New Workout
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Workouts</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.workouts.map((workout) => (
              <a key={workout.id} href={workout.href} className="group">
                <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={workout.imageSrc}
                    alt={workout.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-700">{workout.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {workout.exercises}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workouts;
