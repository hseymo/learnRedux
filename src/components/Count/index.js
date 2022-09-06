import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, resetCount } from "../../utils/actions"


function Count() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const colorSelect = useSelector((state) => state.colorSelect);
  const stylin = {
    background: colorSelect
  }

  return (
    <div className="Count card" style={stylin}>
      <h1>Hello I'm The Count Component</h1>
      <h2>Current Count: {counter}</h2>
      <div className="container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </div>
      <h2>Your color: {colorSelect}</h2>
    </div>
  );
}

export default Count;
