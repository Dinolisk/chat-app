import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Request CSRF token
      const csrfResponse = await axios.patch('https://chatify-api.up.railway.app/csrf');
      const csrfToken = csrfResponse.data.csrfToken;

      // Perform login request
      const response = await axios.post(
        'https://chatify-api.up.railway.app/auth/token',
        { username, password },
        { headers: { 'CSRF-Token': csrfToken } }
      );

      // Store token and mark as authenticated
      const { token } = response.data;
      localStorage.setItem('authToken', token); // Store token in localStorage
      setIsAuthenticated(true); // Update authentication state
      navigate('/chat'); // Redirect to Chat page after successful login
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Login failed');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 className="text-center">Login Chat 4 All</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="shared-btn">Log In</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
