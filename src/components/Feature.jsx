export default function Feature() {
  return (
    <div className="px-10">
      <h1 className=" text-3xl text-gray-700 md:text-5xl text-center">
        How it <span className=" text-green-600 font-semibold">Work</span>
      </h1>
      <p className="mt-2 text-center text-lg text-gray-500">
        Explore the following these steps will help you to find a job easily.
      </p>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-between text-center md:text-start lg:px-10 py-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-green-600 text-3xl">
            Step <span className="text-6xl font-bold">1</span>
          </h2>
          <span className="text-2xl text-gray-700">Register Account</span>
          <p className="text-gray-500">First you need to create an account</p>
          <span className="text-green-600 underline ">Register Account</span>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-green-600 text-3xl">
            Step <span className="text-6xl font-bold">2</span>
          </h2>
          <span className="text-2xl text-gray-700">Find Job</span>
          <p className="text-gray-500">Second, search for the job you want</p>
          <span className="text-green-600 underline ">Find Job</span>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-green-600 text-3xl">
            Step <span className="text-6xl font-bold">3</span>
          </h2>
          <span className="text-2xl text-gray-700">Apply Job</span>
          <p className="text-gray-500">
            Apply to the company and sechdule the interview
          </p>
          <span className="text-green-600 underline ">Learn more</span>
        </div>
      </div>

      {/* why you contact us feature */}

      <h1 className="mt-8 text-center text-2xl md:text-4xl text-gray-600">
        Why You Contact Us
      </h1>
      <p className="text-gray-500 text-center mt-2">
        Reach out to us for personalized support and exclusive job opportunities
        tailored to your career goals.
      </p>
      <div className="mt-8 flex flex-col gap-8  items-center md:flex-row md:justify-between  md:text-start lg:px-10 py-8">
        <div className="flex flex-col w-[300px] md:w-[350px]  shadow-lg bg-gray-100 p-4 ">
          <h2 className="text-center text-2xl font-semibold text-gray-600">
            Over 10K+
          </h2>
          <span className="text-center text-green-600 text-xl font-bold">
            Jobs
          </span>
          <p className="mt-2 text-center text-gray-500 ">
            Explore over 10K+ job opportunities tailored to various skills and
            industries, all in one place
          </p>
        </div>
        <div className="flex flex-col w-[300px] md:w-[350px] shadow-lg bg-gray-100 p-4 ">
          <h2 className="text-center text-2xl font-semibold text-gray-600">
            Over 2.5K+
          </h2>
          <span className="text-center text-green-600 text-xl font-bold">
            Companies
          </span>
          <p className="mt-2 text-center text-gray-500">
            Connect with over 2.5K+ companies actively seeking talented
            professionals like you
          </p>
        </div>
        <div className="flex flex-col w-[300px] md:w-[350px] shadow-lg bg-gray-100   p-4 ">
          <h2 className="text-center text-2xl font-semibold text-gray-600">
            Over 40K+
          </h2>
          <span className="text-center text-green-600 text-xl font-bold">
            Members
          </span>
          <p className="mt-2 text-center text-gray-500">
            Join our community of over 40K+ members and take your career to the
            next level
          </p>
        </div>
      </div>
    </div>
  );
}
