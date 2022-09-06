import "./App.css";
import Count from "./components/Count";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <heaser>
        <h1>Hello I'm The App Component</h1>
      </heaser>
      <main class="container">
        <Count />
        <Color />
        {/* <div class="card">
          <h2>I have access to state too!</h2>
          <h3>Count: </h3>
          <h3>Color: </h3>
        </div> */}
      </main>
      <footer>
        <h1>Hello Still App Component</h1>
      </footer>
    </div>
  );
}

export default App;
