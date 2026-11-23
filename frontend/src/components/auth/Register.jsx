import React, { useState } from 'react';
import { useAuth } from '../context/authContext';

function Register() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '370px' }}>
      <h3 className="text-center mb-4" style={{ color: '#ff5c8d' }}>Register</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control shadow-sm"
          style={{ height: '40px' }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control shadow-sm"
          style={{ height: '40px' }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="password"
          className="form-control shadow-sm"
          style={{ height: '40px' }}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn d-flex align-items-center gap-2 shadow-sm rounded-pill w-100"
        style={{ backgroundColor: '#ff5c8d', color: '#fff' }}
      >
        <i className="fa-solid fa-user-plus"></i>
        Register
      </button>
    </form>
  );
}

export default Register;
