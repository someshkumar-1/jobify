import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div className="md:h-4/5z mt-20 md:flex justify-center items-center px-10 lg:mt-0">
      <div className="md:flex-1 md:ml-20">
        <h1 className=" w-full mx-auto text-4xl sm:text-5xl  lg:text-6xl text-gray-700">
          Find a Job With Your Interest and Abilities
        </h1>
        <p className="mt-10 w-full sm:text-lg lg:text-xl text-gray-500">
          Find jobs that match your interests with us. Jobify provides a place
          to find your jobs.
        </p>
        <button className="mt-10 bg-green-600 hover:bg-green-800 px-4 py-2 text-white text-xl rounded-md">
          Get Started
        </button>
      </div>
      <div className="hidden md:flex md:flex-1">
        <img
          src={hero}
          alt="hero image"
          className="md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] "
        />
      </div>
    </div>
  );
}
