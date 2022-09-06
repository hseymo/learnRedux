import { useSelector, useDispatch } from "react-redux";
import { changeColor, resetColor } from "../../utils/actions";

function Color() {
  const colorSelect = useSelector((state) => state.colorSelect);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const stylin = {
    background: colorSelect,
  };

  return (
    <div className="Color card" style={stylin}>
      <h1>Hello I'm The Color Component</h1>
      <h2>Your color: {colorSelect} </h2>
      <div className="container">
        <div>
          <label htmlFor="color">Pick a color: </label>
          <input
            type="color"
            name="color"
            value={colorSelect}
            onChange={(e) => dispatch(changeColor(e.target.value))}
          />
        </div>
        <button onClick={() => dispatch(resetColor())}>Reset Color</button>
      </div>
      <h2>Current Count: {counter} </h2>
    </div>
  );
}

export default Color;
