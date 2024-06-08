import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100/30  p-4 sm:p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600 tracking-wider">
          Jobify
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className=" text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 p-2 w-full border text-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 p-2 w-full text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-2 p-2 w-full text-gray-600 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 mb-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Register
          </button>
        </form>
          <span className=" text-gray-600 ml-16">Already have an account? <Link to={'/login'} className="text-green-600 font-semibold">Login</Link></span>
      </div>
    </div>
  );
}
