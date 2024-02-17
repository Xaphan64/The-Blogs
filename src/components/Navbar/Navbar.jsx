// ASSETS

// STYLES
import "./Navbar.scss";

// LIBRARIES
import { Link, useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const Navbar = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();
  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <h1 onClick={handleHome}>The Blogs</h1>

      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
