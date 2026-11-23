import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'; //for creating components.
import ReactDOM from 'react-dom/client';  //for rendering app into the actual HTML page.
import App from './App.jsx'; //main App component
import { GlobalProvider } from './context/globalContext.jsx';
import { AuthProvider } from './context/authContext';
import { GlobalStyle } from './styles/GlobalStyle.jsx';

const root = ReactDOM.createRoot(document.getElementById('root')); // find <div id="root"> in index.html
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </AuthProvider>
  </React.StrictMode>
);