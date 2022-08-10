import { useState } from 'react';

export const ButtonCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <button
      onClick={increment}
      className="text-3xl rounded bg-gray-100 border-2 p-3"
    >
      Count is {count}
    </button>
  );
};
