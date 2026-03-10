import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-gray-900 text-white w-64 min-h-screen p-6 
fixed md:static top-0 left-0 transform 
${isOpen ? "translate-x-0" : "-translate-x-full"} 
md:translate-x-0 transition-transform duration-300`}
    >
      <h2 className="text-xl font-bold mb-8">Menu</h2>

      <div className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-3 rounded">
          Dashboard
        </Link>

        <Link to="/products" className="hover:bg-gray-700 p-3 rounded">
          Products
        </Link>

        <Link to="/cart" className="hover:bg-gray-700 p-3 rounded">
          Cart
        </Link>

        <Link to="/profile" className="hover:bg-gray-700 p-3 rounded">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
