import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

      <div className="flex relative">
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <Sidebar isOpen={isOpen} />

        <div className="flex-1 p-4 sm:p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
