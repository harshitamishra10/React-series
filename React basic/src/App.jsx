import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(5);

  const addvalue = () => {
     if (counter < 20) {
    setCounter(counter + 1);
  };
}

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </>
  );
}

export default App;

