// import './style.css';

function Color() {
  return (
    <div className="Color card">
      <h1>Hello I'm The Color Component</h1>
      <h2>Your color: </h2>
      <div className="container">
        <label for="color">Pick a color: </label>
        <input type="color" name="color"></input>
      </div>
    </div>
  );
}

export default Color;
