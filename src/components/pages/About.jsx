function About() {
  return (
    <div className="max-w-2xl mx-auto pt-7 px-4 sm:pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 w-2/3 gap-1 items-center text-blue">
        <h1 className="text-3xl font-bold text-blue w-full sm:text-4xl justify-self-start">
          About
        </h1>
        <p className="mb-2 mt-5">
          BuildAWT (pronounced “build-out”) is a workout building tool used to
          compile personal workouts that you can re-use, edit or delete. It is
          your number one companion to figure out what you want to do at the gym
          or anywhere you plan to train.
        </p>

        <p className="my-2">
          Search from the list of exercises available in the exercises page
          (exercises are curated and obtained from the wger API) and add them to
          your very own workout routine. Devise multiple workouts for different
          days or muscle groups. You can also add various tags to each exercise
          to customise the intensity for the way you want to train.
        </p>

        <p className="my-2">
          Great for beginners just starting on their gym journey and even
          veterans who know exactly what they need. BuildAWT is a versatile yet
          simple tool that will be essential in every athlete’s toolbox.
        </p>
        <p className="my-2">
          Link to API:{" "}
          <a
            href="https://wger.de/en/software/api"
            className="font-bold hover:underline"
          >
            https://wger.de/en/software/api
          </a>
        </p>
      </div>
    </div>
  );
}
export default About;
