// ASSETS

// STYLES
import "./ConfirmationModal.scss";
// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const ConfirmationModal = (props) => {
  // PROPERTIES
  const handleDelete = props.handleDelete;
  const handleModal = props.handleModal;

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2>Are you sure do you want to delete this blog?</h2>

        <button type="button" className="button-red" onClick={handleDelete}>
          Yes
        </button>

        <button type="button" onClick={handleModal}>
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
