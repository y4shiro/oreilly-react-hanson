import React, { useState } from 'react';
import colorData from './color-data.json';

function App() {
  const [colors] = useState(colorData);
  return <div className="App"></div>;
}

export default App;
