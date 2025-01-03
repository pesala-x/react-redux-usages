import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

    const count = useSelector(state => state.count);
    const isVisible = useSelector(state => state.isVisible);

  const dispatch = useDispatch();
  return (
      <>
          {isVisible && <div>{count}</div>}
          <br/>
          <button onClick={() => dispatch({ type: 'ADD_COUNT' })}>Increment</button>
          <button onClick={() => dispatch({ type: 'DELETE_COUNT' })}>Decrement</button>
          <br/>
          <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle</button>
      </>
  )
}

export default App
