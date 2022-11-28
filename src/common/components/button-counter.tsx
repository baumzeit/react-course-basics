import { useState } from 'react';

export const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="flex gap-2">
      <button
        onClick={increment}
        className={`text-3xl rounded bg-gray-100 border-2 p-3`}
      >
        Count: {count}
      </button>
    </div>
  );
};
