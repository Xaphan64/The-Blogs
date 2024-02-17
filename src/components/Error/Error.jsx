// ASSETS

// STYLES
import "./Error.scss";
// LIBRARIES

// MISC

// COMPONENTS
import { Link } from "react-router-dom";

// CONFIGURATION
const Error = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="error-container">
      <h2>Sorry</h2>
      <p>This page does not exist</p>
      <Link to="/">Back to the homepage</Link>
    </div>
  );
};

export default Error;
