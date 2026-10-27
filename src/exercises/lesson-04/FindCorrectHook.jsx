// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const clickCount = useRef(0);
  const buttonRef = useRef(null);

  function handleClick() {
    clickCount.current++;
    buttonRef.current.textContent = `${clickCount.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick} ref={buttonRef}>
        {clickCount.current} Clicks
      </button>
    </div>
  );
}

// The useRef hook helps to keep the value of clickCount without causing a re-render of the component.
