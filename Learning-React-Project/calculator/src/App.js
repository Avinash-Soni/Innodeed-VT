import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calval, setcalval] = useState("");

  const onButtonclick = (buttonText) => {
    if (buttonText === "c") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };

  return (
    <>
      <center>
        <div className="calculator">
          <Display displayValue={calval} />
          <ButtonContainer onButtonclick={onButtonclick} />
        </div>
      </center>
    </>
  );
}

export default App;
