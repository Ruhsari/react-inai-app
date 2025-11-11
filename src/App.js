import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Counter_blok from "./components/Counter_blok";
import Reasons from "./components/Reasons";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Greetings/>
      <Counter_blok/>
      <Reasons/>
    </div>
  );
}

export default App;
