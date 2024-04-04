// ASSETS

// STYLES
import "./Home.scss";

// LIBRARIES

// MISC
import useFetch from "../useFetch/useFetch";

// COMPONENTS
import BlogList from "../BlogList/BlogList";

// CONFIGURATION
const Home = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const { data: blogs, isLoading, error } = useFetch("https://blog-data-9hab.onrender.com/blogs");

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS

  return (
    <div className="home-container">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
