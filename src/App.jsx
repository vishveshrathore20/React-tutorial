import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("Red")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>

            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 rounded-full"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
