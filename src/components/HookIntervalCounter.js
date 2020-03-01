import React, { useState, useEffect } from "react";

const HookIntervalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(prev => prev + 1);
  };

  useEffect(() => {
    setInterval(tick, 1000);
    return () => {
      clearInterval(tick, 1000);
    };
  }, []);

  return <div>{count}</div>;
};

export default HookIntervalCounter;
