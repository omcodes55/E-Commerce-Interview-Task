import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "../utils/localStorageHelper";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(user);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-r from-purple-500 to-blue-500">

      {/* Website Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide drop-shadow-lg">
        E-Commerce Store
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Create Account
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          onChange={handleChange}
        />

        <button className="bg-purple-500 hover:bg-purple-600 text-white w-full p-3 rounded transition">
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-500 ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;