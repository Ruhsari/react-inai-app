import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './components/Header.css'
import './components/Counter_blok.css'
import './components/Greetings.css'
import './components/Reasons.css'
import './components/Presentation.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);