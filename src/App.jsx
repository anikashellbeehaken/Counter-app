import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={decrease}>-</button>

        <button onClick={reset}>Reset</button>

        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;