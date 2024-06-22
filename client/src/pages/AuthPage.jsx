import { useEffect, useState } from "react";
import Alert from "../components/ui/Alert";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router";
import FormRow from "../components/ui/FormRow";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });

  const navigate = useNavigate();

  const { displayAlert, showAlert, isLoading, user, setupUser } =
    useAppContext();

  useEffect(() => {
    if (user) {
      setTimeout(() => navigate("/"), 3000);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = formData;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
    }

    const currentUser = { name, email, password };

    if (isMember) {
      setupUser(currentUser, "login");
    } else {
      setupUser(currentUser, "register");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100/30  p-4 sm:p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600 tracking-wider">
          {formData.isMember ? "Login " : "Register "} for Jobify
        </h2>
        <form onSubmit={handleSubmit}>
          {showAlert && <Alert />}
          {!formData.isMember && (
            <FormRow
              handleChange={handleChange}
              type="text"
              name="name"
              labelText="Name"
              value={formData.name}
            />
          )}
          <FormRow
            handleChange={handleChange}
            type="email"
            name="email"
            labelText="Email"
            value={formData.email}
          />

          <FormRow
            handleChange={handleChange}
            type="password"
            name="password"
            labelText="Password"
            value={formData.password}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 mb-2 rounded-md hover:bg-green-700 transition duration-200  disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {formData.isMember ? "Login" : "Register"}
          </button>
        </form>
        <span className=" text-gray-600 ml-16">
          {formData.isMember
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            className="text-green-600 font-semibold"
            type="button"
            onClick={() =>
              setFormData({ ...formData, isMember: !formData.isMember })
            }
          >
            {formData.isMember ? "Register" : "Login"}
          </button>
        </span>
      </div>
    </div>
  );
}
