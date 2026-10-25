export default function Child({ updateCounter }) {
  return (
    <button
      onClick={() => {
        updateCounter();
      }}
    >
      Increment Counter
    </button>
  );
}
