// ASSETS

// STYLES
import "./Create.scss";

// LIBRARIES
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MISC

// COMPONENTS

// CONFIGURATION
const Create = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();

  // STATE CONSTANTS
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Daniel");
  const [isLoading, setIsLoading] = useState(false);

  // LIFE CYCLE

  // EVENT HANDLERS
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };

    setIsLoading(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      navigate("/");
    });
  };

  return (
    <div className="create-container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required value={title} onChange={handleChangeTitle}></input>

        <label>Blog content:</label>
        <textarea required value={body} onChange={handleChangeBody}></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={handleChangeAuthor}>
          <option value="Daniel">Daniel</option>
          <option value="Alex">Alex</option>
        </select>

        {!isLoading && <button type="submit">Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
