import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import ContextApiProvider from './context/contextApiProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </React.StrictMode>
);
