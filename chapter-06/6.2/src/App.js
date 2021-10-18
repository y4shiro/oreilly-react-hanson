import React, { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './ColorList';
import AddColorForm from './AddColorForm';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];
          setColors(newColors);
        }}
      />
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
    </>
  );
}

export default App;
