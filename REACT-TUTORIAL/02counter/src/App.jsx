import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);
  //let counter = 10

  const addValue = () => {
    setCounter(counter + 1)
  };
  const subValue = () => {
    setCounter(counter - 1)
  };

  return (
    <>
      <h1>React practice</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}> Add Value</button>{" "}
      <button onClick={subValue}>Sub Value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
