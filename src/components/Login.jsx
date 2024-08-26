import React, { useEffect } from 'react';
import { getCsrfToken } from '../api';

const Login = () => {
    useEffect(() => {
      const fetchCsrfToken = async () => {
        const token = await getCsrfToken();
        console.log('CSRF Token:', token);
      };
  
      fetchCsrfToken();
    }, []);
  
    return (
      <div>
        <h2>Login</h2>
        {/* Login form goes here */}
      </div>
    );
  };
  
  export default Login;