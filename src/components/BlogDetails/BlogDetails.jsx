// ASSETS

// STYLES
import "./BlogDetails.scss";

// LIBRARIES
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// MISC
import useFetch from "../useFetch/useFetch";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

// COMPONENTS

// CONFIGURATION
const BlogDetails = () => {
  // PROPERTIES

  // LIBRARY CONSTANTS
  const { id } = useParams();
  const navigate = useNavigate();

  // API REQUESTS
  const { data: blog, error, isLoading } = useFetch("https://blog-data-9hab.onrender.com/blogs/" + id);

  // STATE CONSTANTS
  const [modal, setModal] = useState(false);

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleDelete = () => {
    fetch("https://blog-data-9hab.onrender.com/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="blog-details-container">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2 className="blog-details-title">{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blog-details-body">{blog.body}</div>
          <button onClick={handleModal}>Delete Blog</button>

          {modal && <ConfirmationModal handleDelete={handleDelete} handleModal={handleModal} />}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
