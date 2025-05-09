import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/user/login', {
        email,
        password
      });

      if (res.status === 200) {
        setSuccess("Login successful");
        localStorage.setItem('token', res.data.token); // Save token
        setTimeout(() => {
          navigate('/'); // Redirect to home
        }, 1000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      console.error("Login Error:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div className="form-container">
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Enter valid email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button type='submit' className='btn'>Login</button>
          
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </form>

        <p>Don't have an account? <a href='/register'>Register</a></p>
        <p>Forgot your password? <a href='/reset-password'>Reset Password</a></p>
      </div>
    </div>
  );
}

export default Login;
