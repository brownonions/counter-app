// Import the 'useState' hook from React to manage state within the component
import { useState } from 'react';

const Counter = () => {
  // Declare a state variable 'count' and a function to update it called 'setCount'
  // 'useState(0)' initializes 'count' to 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count by 1, but only if count is greater than 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div className='counter'>
      <h1>Simple Counter</h1>
      {/* Display the current count */}
      <p>Count: {count}</p>
      {/* Button to increment the count */}
      <button className='button' onClick={increment}>
        Increment
      </button>
      {/* Button to decrement the count, ensuring it won't go below zero */}
      <button className='button' onClick={decrement}>
        Decrement
      </button>
      {/* Button to reset the count */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
