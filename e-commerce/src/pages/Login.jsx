import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUser } from "../utils/localStorageHelper";
import { createSession } from "../utils/sessionManager";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = getUser();

    if (!user) {
      alert("Please register first");
      return;
    }

    if (user.email === email && user.password === password) {
      createSession(email);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">
          Welcome E-Commerce
        </h1>

        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
          Login
        </h3>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-500 hover:bg-green-600 text-white w-full p-3 rounded transition">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don't have an account?
          <Link to="/" className="text-blue-500 ml-1">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;