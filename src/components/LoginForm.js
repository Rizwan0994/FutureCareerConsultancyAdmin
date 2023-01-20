import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory,Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
       // Send a request to the server to log in the user
            const loginResponse = await axios.post('https://freeconsltancyadminapi.onrender.com/api/auth/login', {
        email: formData.email,
        password: formData.password
      });
      // Handle the response
    if (loginResponse.data.token) {
        localStorage.setItem('token', loginResponse.data.token);
        // Redirect the user to the dashboard or display a success message
        history.push('/dashboard');
     
      } else {
        // Display an error message
        setErrorMessage(loginResponse.data.msg);
      }
    } catch (err) {
      console.error(err);
      // Display an error message
      setErrorMessage(err.message);
    }
  };

  return (
    <div class="form-container">
    <form onSubmit={handleSubmit}>
      <h1>Admin Login Form</h1>
      <br/>
      <label >
        Email~
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label class="form-label">
        Password~
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Log in</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <br/>
      <br/>
      <ul>
      <li><Link to="/signup">Registered Admin.</Link></li>
      
    </ul>
    </form>
    </div>
  );
};

export default LoginForm;
