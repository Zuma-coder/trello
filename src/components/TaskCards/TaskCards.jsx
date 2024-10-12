import TaskCard from "../TaskCard/TaskCard";
import "./TaskCards.css";
import PropTypes from "prop-types";

const TaskCards = (props) => {
  const { cards, addCard, addTask, deleteCard, deleteTask, editCardTitle } =
    props;

  return (
    <>
      <div className="TaskCards">
        {cards &&
          cards.map((card) => (
            <TaskCard
              key={card.id}
              card={card}
              deleteCard={deleteCard}
              addTask={addTask}
              deleteTask={deleteTask}
              editCardTitle={editCardTitle}
            />
          ))}
        <div className="TaskCards-button">
          <button onClick={addCard}>+</button>
        </div>
      </div>
    </>
  );
};

TaskCards.propTypes = {
  cards: PropTypes.array,
  addCard: PropTypes.func,
  deleteCard: PropTypes.func,
  deleteTask: PropTypes.func,
  addTask: PropTypes.func,
  editCardTitle: PropTypes.func,
};

export default TaskCards;
