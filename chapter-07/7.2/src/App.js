import React, { useEffect, useLayoutEffect } from 'react';

function App() {
  useEffect(() => console.log('useEffect'));
  useLayoutEffect(() => console.log('useLayoutEffect'));
  return <div>ready</div>;
}

export default App;
