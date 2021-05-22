//nmp -v pour voir la version
//pour installer react => npx create-react-app cours-react

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

