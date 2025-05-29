import { useState } from "react";

function AddToDo(props){

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange = (event)=>{
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
props.onNewItem(todoName,dueDate);
setDueDate("");
setTodoName("");
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onNewItem(todoName,dueDate);
setDueDate("");
setTodoName("");
    }
  };

  return(
    <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <input type="text" placeholder="Enter ToDo Here" value={todoName} onChange={handleNameChange} onKeyDown={handleKeyDown} />
            </div>
            <div className="col-4">
              <input type="date" value={dueDate} onChange={handleDateChange} />
            </div>
            <div className="col-2">
              <button type="button" class="btn btn-success " onClick={handleAddButtonClicked} >
                Add
              </button>
            </div>
          </div>
          </div>
  );
}

export default AddToDo;