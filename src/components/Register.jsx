import React, { useState } from 'react';
<<<<<<< HEAD
import { registerUser } from '../api';  // Importera registerUser

const Register = () => {
=======
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../global.css'; // Import global styles

function Register() {
>>>>>>> main
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
<<<<<<< HEAD
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();  // Förhindra att formuläret skickas på traditionellt sätt

    try {
      const result = await registerUser(username, email, password);
      setSuccessMessage('Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Failed to register. Please try again.');
=======
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Get CSRF token first
      const csrfResponse = await axios.patch('https://chatify-api.up.railway.app/csrf');
      const csrfToken = csrfResponse.data.csrfToken;

      // Register the user
      const response = await axios.post(
        'https://chatify-api.up.railway.app/auth/register',
        {
          username,
          email,
          password,
        },
        {
          headers: {
            'CSRF-Token': csrfToken,
          },
        }
      );

      if (response.status === 201) {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after success
        }, 2000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Registration failed');
      } else {
        setError('Registration failed. Please try again.');
      }
>>>>>>> main
    }
  };

  return (
<<<<<<< HEAD
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};
=======
    <div className="page-container">
      <div className="form-container">
        <h2 className="text-center">Register Chat 4 All</h2>
        <form onSubmit={handleRegister}>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
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
          <button type="submit" className="shared-btn">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
}
>>>>>>> main

export default Register;
