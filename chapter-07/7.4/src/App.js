import React, { useState, useCallback, memo } from 'react';

const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

const PureCat = memo(Cat);

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Oullaw']);
  const meow = useCallback((name) => {
    console.log(`${name} has meowd`);
  }, []);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat key={i} name={name} meow={meow} />
      ))}
      <button onClick={() => setCats([...cats, prompt('Name a cat')])}>
        Add a Cat
      </button>
    </>
  );
}

export default App;
