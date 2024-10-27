import { useState } from "react";

const HOOK_useState = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
        prompt("Cannot Update value already is 0!")
        console.log("Cannot update counter value!")
    }
    
  };

  const makeZero = () => {
    setCounter((counter = 0));
  };

  return (
    <>
      <h1> 1. Hook: useState</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subValue}>Subtract value</button>
      <br />
      <br />
      <button onClick={makeZero}>RESET</button>
    </>
  );
};

export default HOOK_useState;
