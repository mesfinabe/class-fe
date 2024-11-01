import React, { useState } from 'react';
   import axios from 'axios';

   function Login() {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = async (e) => {
       e.preventDefault();
       const response = await axios.post('http://localhost:5000/login', { username, password });
       localStorage.setItem('token', response.data.token);
       alert('Login successful');
     };

     return (
       <form onSubmit={handleSubmit}>
         <input type='text' onChange={(e) => setUsername(e.target.value)} placeholder='Username' required />
         <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
         <button type='submit'>Login</button>
       </form>
     );
   }

   export default Login;
