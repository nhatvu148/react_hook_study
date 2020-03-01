import React, { useState, useEffect } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${name} times`;
    console.log("Name is pressed");
  }, [name]);

  useEffect(() => {
    document.title = `Count: ${count} times`;
    console.log("Count is pressed");
  }, [count]);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button onClick={increment}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
