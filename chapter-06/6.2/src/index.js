import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ColorProvider from './ColorProvider';

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
