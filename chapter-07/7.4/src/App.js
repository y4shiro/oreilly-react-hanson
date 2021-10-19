import React, { useState, memo } from 'react';

const Cat = ({ name }) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
};

const PureCat = memo(Cat);

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Oullaw']);
  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} />
      ))}
      <button onClick={() => setCats([...cats, prompt('Name a cat')])}>
        Add a Cat
      </button>
    </>
  );
}

export default App;
