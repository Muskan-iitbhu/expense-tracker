import React, { useState } from 'react';
import bg from './img/bg.png';
import Navigation from './components/navigation/Navigation.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Income from './components/income/Income.jsx';
import Expenses from './components/expenses/Expenses.jsx';
import Login from './components/auth/Login.jsx';
import { useAuth } from './context/authContext.jsx';
import { useGlobalContext } from './context/globalContext.jsx';

function App() {
  const { user, loading } = useAuth();
  const [active, setActive] = useState(1);
  const global = useGlobalContext(); // if you use it elsewhere

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Login />;
  }

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div
      className="app position-relative vh-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-fluid h-100 d-flex flex-row p-3">
        <Navigation active={active} setActive={setActive} />
        <main
          className="flex-grow-1 bg-white border border-3 border-white rounded-4 overflow-auto"
          style={{
            background: 'rgba(252, 246, 249, 0.78)',
            backdropFilter: 'blur(4.5px)',
          }}
        >
          {displayData()}
        </main>
      </div>
    </div>
  );
}

export default App;
