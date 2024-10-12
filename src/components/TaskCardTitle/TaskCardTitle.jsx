import { useEffect, useRef, useState } from "react";
import "./TaskCardTitle.css";
import PropTypes from "prop-types";

const TaskCardTitle = (props) => {
  const { card, text, editCardTitle } = props;
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setIsEditMode(false);
    }
  };

  return (
    <>
      {isEditMode ? (
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => editCardTitle(card, e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={(e) => e.target.value && setIsEditMode(false)}
        />
      ) : (
        <p onClick={() => setIsEditMode(true)}>{text}</p>
      )}
    </>
  );
};

TaskCardTitle.propTypes = {
  card: PropTypes.object,
  text: PropTypes.string,
  editCardTitle: PropTypes.func,
};

export default TaskCardTitle;
