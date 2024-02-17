// ASSETS

// STYLES

// LIBRARIES
import { Outlet } from "react-router-dom";

// MISC

// COMPONENTS
import Navbar from "../Navbar/Navbar";

// CONFIGURATION
const Layout = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="layout-container">
      <div className="layout-header">
        <Navbar />
      </div>

      <div className="layout-body">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
