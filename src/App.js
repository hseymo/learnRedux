import "./App.css";
import Count from "./components/Count";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <h1>Hello I'm The App Component</h1>
      <div class="container">
        <Count />
        <Color />
      </div>
      <h1>Hello Still App Component</h1>
    </div>
  );
}

export default App;
