import AppName from "./component/AppName";
import AddToDo from "./component/AddToDo";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const initialTodoItems = [];

  const [todoItem, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added :${itemName} Date${itemDueDate}`);
    const newTodoItem = [
      ...todoItem,
      { Name: itemName, todoDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItem.filter((item) => item.Name !== todoItemName);
    setTodoItems(newTodoItem);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <div>
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      <TodoItems items={todoItem} onDeleteClick={handleDeleteItem} />
      {todoItem.length === 0 && <WelcomeMessage />}
    </div>
  );
}

export default App;
