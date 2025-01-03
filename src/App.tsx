import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, toggleVisible} from "./reducers/CountReducer.ts";

function App() {

    // @ts-ignore
    const count = useSelector(state => state.counter.count);
    // // @ts-ignore
    const isVisible = useSelector(state => state.counter.isVisible);

  const dispatch = useDispatch();
  return (
      <>
          {isVisible && <div>{count}</div>}
          {/*{count}*/}
          <br/>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <br/>
          <button onClick={() => dispatch(toggleVisible())}>Toggle</button>
      </>
  )
}

export default App
