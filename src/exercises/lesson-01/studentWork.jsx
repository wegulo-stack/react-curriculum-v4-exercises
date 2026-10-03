//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Allan Wafula';
  const age = 37;
  const hobbies = [
    'Reading manga',
    'Coding',
    'Traveling',
    'Playing video games',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>About {name}</h1>
      <p>
        {' '}
        Hello! My name is {name}, and I am {age} years old.{' '}
      </p>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
