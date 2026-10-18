function SnackList() {
  const snacks = [
    { rank: 6, name: 'Apple slices' },
    { rank: 5, name: 'Greek yogurt' },
    { rank: 4, name: 'Crackers' },
    { rank: 3, name: 'Peanut butter sandwich' },
    { rank: 2, name: 'Banana' },
    { rank: 1, name: 'Meat sticks' },
  ];
  return (
    <ul>
      {snacks
        .toSorted((a, b) => a.rank - b.rank)
        .map((snack) => (
          <li key={snack.rank}>
            <strong>{snack.rank}.</strong> {snack.name}
          </li>
        ))}
    </ul>
  );
}

export default SnackList;
