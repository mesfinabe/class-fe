import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://class-be-2-bc9r.onrender.com/register', { username, password });
    alert('User registered successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
      <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
      <button type='submit'>Register</button>
    </form>
  );
}

export default Register;
