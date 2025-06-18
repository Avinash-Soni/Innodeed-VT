import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Control from "./components/Control";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="counter">
        <Container>
          <Header />
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Control />
        </Container>
      </div>
    </>
  );
}

export default App;
