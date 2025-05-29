import PrintItem from "./PrintItem";

const TodoItems = ({ items, onDeleteClick }) => {
  return (
    <div className="item-container">
      {items.map((todoItem, index) => (
        <PrintItem
          key={index}
        
          todoDate={todoItem.todoDate}
          todoName={todoItem.Name} onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
