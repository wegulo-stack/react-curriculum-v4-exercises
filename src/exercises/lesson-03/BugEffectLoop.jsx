//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The component first mounts and initializes the count to 0.
// Then the useEffect hook runs and and calls setCount(count + 1) updating the count to 1.
// Then the component re-renders and since the useEffect has no dependency array ([]), it runs again after every render and updates the count again.
// The component ends up in an infinite loop of re-rendering and updating the count without reaching the unmount phase.
// Adding the dependency array prevents the effect from running after every update.
