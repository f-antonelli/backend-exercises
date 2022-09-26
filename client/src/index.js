import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ProductsProvider } from './context/ProductsContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>,
);
