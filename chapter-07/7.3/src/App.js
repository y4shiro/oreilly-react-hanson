import React, { useReducer } from 'react';

function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  );
}

function Number() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return <h1 onClick={() => setNumber(1)}>{number}</h1>;
}

export default function App() {
  return (
    <>
      <Checkbox />
      <Number />
    </>
  );
}
