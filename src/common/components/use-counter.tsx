import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Remove</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
