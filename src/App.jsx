import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPasswaord] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-[]{}|;':\",.<>/?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPasswaord(pass);
  }, [length, numberAllowed, charAllowed, setPasswaord]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPasswaord]);

  const copypasswordtoclipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("copypasswordtoclipboard");
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white-600 bg-gray-800 px-20 py-7">
        <h1 className="text-4xl text-center my-6">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypasswordtoclipboard}>Copy</button>
        </div>

        <div>
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="px-3">Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>

            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
