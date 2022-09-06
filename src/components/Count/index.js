import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, resetCount } from "../../utils/actions"

function Count() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="Count card">
      <h1>Hello I'm The Count Component</h1>
      <h2>Current Count: {counter}</h2>
      <h2>Your color: </h2>
      <div className="container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(resetCount())}>Reset</button>
      </div>
    </div>
  );
}

export default Count;
