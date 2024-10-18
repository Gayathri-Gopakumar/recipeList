import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Create a root and render your App
const root = ReactDOM.createRoot(document.getElementById('root')); // New in React 18
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


