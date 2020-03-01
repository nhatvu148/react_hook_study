import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(prev => prev + 5)}>
        Increase by Five
      </button>
    </div>
  );
};

export default HookCounterTwo;
