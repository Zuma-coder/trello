import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TaskCards from "./components/TaskCards/TaskCards";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      title: "today",
      tasks: [
        {
          id: uuidv4(),
          name: "読書",
        },
        {
          id: uuidv4(),
          name: "ランニング",
        },
        {
          id: uuidv4(),
          name: "洗濯",
        },
      ],
    },
    {
      id: uuidv4(),
      title: "tommorow",
      tasks: [
        {
          id: uuidv4(),
          name: "読書",
        },
        {
          id: uuidv4(),
          name: "洗濯",
        },
      ],
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: uuidv4(),
      title: "title",
      tasks: [],
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (targetCard) => {
    setCards(cards.filter((card) => card.id !== targetCard.id));
  };

  const addTask = (targetCard, taskName) => {
    setCards(
      cards.map((card) =>
        card.id === targetCard.id
          ? {
              ...card,
              tasks: [
                ...card.tasks,
                {
                  id: uuidv4(),
                  name: taskName,
                },
              ],
            }
          : card
      )
    );
  };

  const deleteTask = (targetCard, targetTask) => {
    setCards(
      cards.map((card) =>
        card.id === targetCard.id
          ? {
              ...card,
              tasks: card.tasks.filter((task) => task.id !== targetTask.id),
            }
          : card
      )
    );
  };

  const editCardTitle = (targetCard, newText) => {
    setCards(
      cards.map((card) =>
        card.id === targetCard.id
          ? {
              ...card,
              title: newText,
            }
          : card
      )
    );
  };

  return (
    <>
      <Header />
      <TaskCards
        cards={cards}
        addCard={addCard}
        deleteCard={deleteCard}
        addTask={addTask}
        deleteTask={deleteTask}
        editCardTitle={editCardTitle}
      />
    </>
  );
}

export default App;
