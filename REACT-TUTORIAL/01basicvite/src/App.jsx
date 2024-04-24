import { useState } from "react";
import Youtube from "./Youtube"



function App() {
  const [count, setCount] = useState(0);

  
  return (
    <> 
      <h1>Hello First Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Youtube/>
    </>
  );
}

export default App;
