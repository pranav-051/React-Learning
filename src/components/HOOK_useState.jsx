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
      <br />
      <br />
      <h2 className='font-thin forced-color-adjust-auto'>Counter value:  {counter}</h2>
      <br />
      <br />
      <button onClick={addValue} className="bg-green-500">
        Add Value
      </button>
      <br />
      <br />
      <button onClick={subValue} className="bg-green-500">
        Subtract value
      </button>
      <br />
      <br />
      <button onClick={makeZero} className="bg-red-500">
        RESET
      </button>
    </>
  );
};

export default HOOK_useState;
