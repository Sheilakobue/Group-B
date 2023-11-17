import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Here you would make a request to your authentication API
    // or SideChef's authentication endpoint
    try {
      // Simulating a fetch to an authentication endpoint
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful sign-in
        console.log('Sign-in successful');
      } else {
        // Handle sign-in error
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
