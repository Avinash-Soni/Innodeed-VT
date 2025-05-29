import Clocklogo from "./component/Clocklogo";
import Clockslogan from "./component/Clockslogan";
import Clocktime from "./component/Clocktime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center>
      <Clocklogo />
      <Clockslogan />
      <Clocktime />
    </center>
  );
}

export default App;
