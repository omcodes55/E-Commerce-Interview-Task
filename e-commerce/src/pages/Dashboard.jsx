import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />

      <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-4 md:p-8">
          <h1 className="text-xl md:text-3xl font-bold mb-8">
            Welcome back, {user?.name} 👋
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 md:p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold">Products</h2>
              <p className="text-sm mt-2">Browse available items</p>
              <Link
                to="/products"
                className="mt-4 inline-block bg-white text-blue-600 px-4 py-1 rounded"
              >
                View
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-5 md:p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold">Cart</h2>
              <p className="text-sm mt-2">Manage your shopping cart</p>
              <Link
                to="/cart"
                className="mt-4 inline-block bg-white text-green-600 px-4 py-1 rounded"
              >
                View
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-5 md:p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold">Profile</h2>
              <p className="text-sm mt-2">View or update profile</p>
              <Link
                to="/profile"
                className="mt-4 inline-block bg-white text-purple-600 px-4 py-1 rounded"
              >
                View
              </Link>
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-5 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Quick Overview
            </h2>

            <p className="text-gray-600 text-sm md:text-base">
              This dashboard allows you to explore products, manage your
              shopping cart, and update your user profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;