import React, { useState } from 'react';
import axios from 'axios';
import { useHistory,Link  } from 'react-router-dom';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
        // Send a request to the server to create a new user
        const signupResponse = await axios.post('https://freeconsltancyadminapi.onrender.com/api/signup/admin', formData);
  
        // Handle the response
        if (signupResponse.data.token) {
          localStorage.setItem('token', signupResponse.data.token);
          // Redirect the user to the dashboard or display a success message
          history.push('/');
        } else {
          // Display an error message
          setErrorMessage(signupResponse.data.msg);
        }
      } catch (err) {
        console.error(err);
        // Display an error message
        setErrorMessage(err.message);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
       <h1>Admin Signup Form</h1>
      <br/>
      <label>
        Name~
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email~
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password~
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          />
        </label>
        <button type="submit">Sign up</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <br></br>
        <li><Link to="/">Already Registered.</Link></li>
      </form>
    );
  };
  
  export default SignupForm;
  