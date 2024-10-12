import { useState } from "react";
import TaskCardTitle from "../TaskCardTitle/TaskCardTitle";
import "./TaskCard.css";
import PropTypes from "prop-types";

const TaskCard = (props) => {
  const { card, deleteCard, addTask, deleteTask, editCardTitle } = props;
  const [task, setTask] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      addTask(card, task);
      setTask("");
    }
  };

  return (
    <>
      <div className="TaskCard">
        <div className="TaskCard-header">
          <TaskCardTitle
            card={card}
            text={card.title}
            editCardTitle={editCardTitle}
          />
          <button onClick={() => deleteCard(card)}>×</button>
        </div>

        <div className="TaskCard-input">
          <input
            type="text"
            placeholder="タスクを入力"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {card.tasks &&
          card.tasks.map((task) => {
            return (
              <div key={task.id} className="TaskCard-item">
                <p>{task.name}</p>
                <button onClick={() => deleteTask(card, task)}>削除</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

TaskCard.propTypes = {
  card: PropTypes.object,
  deleteCard: PropTypes.func,
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
  editCardTitle: PropTypes.func,
};

export default TaskCard;
