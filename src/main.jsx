import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import ContextApi from './context/contextApiProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <App />
    </ContextApi>
  </React.StrictMode>
);
