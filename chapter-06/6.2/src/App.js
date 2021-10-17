import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColor = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColor);
      }}
      onRemoveColor={(id) => {
        const newColor = colors.filter((color) => color.id !== id);
        setColors(newColor);
      }}
    />
  );
}

export default App;
