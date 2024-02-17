// ASSETS

// STYLES

// LIBRARIES
import { Link } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const BlogList = (props) => {
  // PROPERTIES
  const blogs = props.blogs;
  const title = props.title;

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
