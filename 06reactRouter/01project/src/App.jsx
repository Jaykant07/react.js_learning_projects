import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;
  const addValue = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    /*Batching in React means grouping multiple state updates into a single render to optimize performance.
    1. setCounter(counter + 1) always uses the stale value of counter at the time the function runs.
    2. It doesn’t consider that the state has changed before the next update.
    3. So, React processes them as "overwrite" updates rather than sequential increments. */

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    /*1. Each setCounter call uses the latest state (prevCounter).
    2. React batches these updates together but applies them sequentially using the previous value.*/
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React project with Jay {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
