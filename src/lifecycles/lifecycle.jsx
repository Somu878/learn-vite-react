import React, { useState, useEffect } from 'react';

function LifecycleExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifecycleExample;
