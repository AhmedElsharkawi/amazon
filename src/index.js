import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Globalprovider from './components/Context/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

   <Globalprovider>

    <App />
    
    </Globalprovider>
  
  </React.StrictMode>
  
);


