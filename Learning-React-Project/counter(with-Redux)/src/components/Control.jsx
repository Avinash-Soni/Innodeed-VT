import { useRef } from "react";
import { useDispatch } from "react-redux";

const Control=()=>{

  const inputElement = useRef();

  const dispatch = useDispatch();

  const handleIncrement =()=>{
    return(
      dispatch({type: "INCREMENT"})
    );
  }

  const handleDecrement =()=>{
    return(
      dispatch({type: "DECREMENT"})
    );
  }

    const handleAdd = () => {
  dispatch({
    type: "Add",
    payload: {
      num: inputElement.current.value,
    }
  });
  inputElement.current.value = "";
};

const handleSub = () => {
  dispatch({
    type: "Sub",
    payload: {
      num: inputElement.current.value,
    }
  });
  inputElement.current.value = "";
};

const handlePrivacyToggle=()=>{
  dispatch({type:"PRIVACY"})
}



  return (
    <>
<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" onClick={handleIncrement} className="btn btn-primary ">
              +1
            </button>
            <button
              type="button" onClick={handleDecrement}
              className="btn btn-success"
            >
              -1
            </button>
            <button
              type="button" 
              className="btn btn-warning" onClick={handlePrivacyToggle}
            >
              Privacy Toggle
            </button>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
            <input type="text" ref={inputElement} className="number-input" placeholder="Enter Number"/>
            
            <button
              type="button" 
              className="btn btn-info" onClick={handleAdd}
            >
              Add
            </button>
             <button
              type="button" 
              className="btn btn-danger"onClick={handleSub}
            >
              Subtract
            </button>
          </div>
          </>
  );
}

export default Control;