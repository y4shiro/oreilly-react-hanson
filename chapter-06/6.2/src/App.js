import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList';

function App() {
  const [colors] = useState(colorData);
  return <ColorList colors={colors} />;
}

export default App;
