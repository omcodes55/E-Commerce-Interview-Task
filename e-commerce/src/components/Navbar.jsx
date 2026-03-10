import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("session");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 shadow px-4 md:px-8 py-4">
      {/* Mobile menu button */}
      <button onClick={toggleSidebar} className="md:hidden text-2xl">
        ☰
      </button>

      <h1 className="text-lg md:text-2xl font-bold text-white">
        E-Commerce Dashboard
      </h1>

      <div className="flex items-center gap-2 md:gap-4">
        <span className="hidden sm:block text-white">{user?.name}</span>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
