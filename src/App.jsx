import "./App.css";
import { useCallback, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasswaord] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "012345679";

    if (charAllowed) str += "!@#$%^&*()-_=+[{]};:'\",<.>/?";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1),
        pass = str.chatAt(char);
    }
  });
  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
    </>
  );
}

export default App;
