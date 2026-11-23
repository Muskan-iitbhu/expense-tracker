import React, { useState } from 'react';
import { useAuth } from '../../context/authContext.jsx';

function Login() {
  const { login, register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: 'linear-gradient(135deg,rgb(171, 85, 164) 0%, #fda085 100%)',
      }}
    >
      <form
        onSubmit={isSignup ? handleSignup : handleLogin}
        className="p-4 bg-white rounded-4 shadow-lg"
        style={{ width: '350px' }}
      >
        <h3 className="text-center mb-4">{isSignup ? 'Sign Up' : 'Login'}</h3>

        {isSignup && (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>
        )}

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-center">
          {isSignup ? (
            <>
              Already have an account?{' '}
              <span
                style={{ color: '#0d6efd', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <span
                style={{ color: '#0d6efd', cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default Login;
