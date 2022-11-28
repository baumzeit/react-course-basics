import { useState } from 'react';

export type ButtonCounterProps = {
  label?: string;
};

export const ButtonCounter = ({ label = 'Count is:' }: ButtonCounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const resetCount = () => setCount(0);

  return (
    <div className="flex gap-2">
      <button
        onClick={increment}
        className={`text-3xl rounded ${
          count === 0 ? 'bg-green-400' : 'bg-gray-100'
        }  border-2 p-3`}
      >
        {label} {count}
      </button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};
