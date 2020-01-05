import React from 'react';

export const LoginPage = () => (
  <div>
    <h1>Login To Your Expense Dashboard</h1>
    <form>
      <input type="text" name="username" placeholder="username" required={true}></input>
      <input type="password" name="password" placeholder="password" required={true}></input>
      <button>Login</button>
    </form>
  </div>
);
