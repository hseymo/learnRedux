import { useSelector, useDispatch } from "react-redux";
import { changeColor, resetColor } from "../../utils/actions";

function Color() {

  const colorSelect = useSelector((state) => state.colorSelect);
  const dispatch = useDispatch();

  const change = (e) => {
    let target = e.target.value;
    dispatch({
      type: changeColor(),
      payload:{target}
    })
  }

  return (
    <div className="Color card">
      <h1>Hello I'm The Color Component</h1>
      <h2>Your color: {colorSelect} </h2>
      <h2>Current Count: </h2>
      <div className="container">
        <div>
          <label htmlFor="color">Pick a color: </label>
          <input
            type="color"
            name="color"
            onChange={change}
          />
        </div>
        <button onClick={() => dispatch(resetColor())}>Reset Color</button>
      </div>
    </div>
  );
}

export default Color;
