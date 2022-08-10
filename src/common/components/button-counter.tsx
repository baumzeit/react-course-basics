import { useState } from 'react';

type ButtonCounterProps = {
  label?: string;
  initialCount?: number;
};
export const ButtonCounter = ({
  initialCount = 0,
  label = 'Count is',
}: ButtonCounterProps) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);

  return (
    <button
      onClick={increment}
      className="text-3xl rounded bg-gray-100 border-2 p-3"
    >
      {label} {count}
    </button>
  );
};
