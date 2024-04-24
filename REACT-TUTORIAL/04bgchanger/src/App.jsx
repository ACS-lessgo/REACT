import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // const changeColor = () => {};

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0  px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              onClick={() => setColor("red")} 
              style={{backgroundColor:'red'}}
            >
              {" "}
              RED{" "}
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              onClick={() => setColor("green")}
              style={{backgroundColor:'green'}}
            >
              {" "}
              GREEN{" "}
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              onClick={() => setColor("blue")}
              style={{backgroundColor:'blue'}}
            >
              {" "}
              BLUE{" "}
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              onClick={() => setColor("purple")}
              style={{backgroundColor:'purple'}}
            >
              {" "}
              PURPLE{" "}
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
              onClick={() => setColor("grey")}
              style={{backgroundColor:'grey'}}
            >
              {" "}
              GREY{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
