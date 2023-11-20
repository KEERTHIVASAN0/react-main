import React, { useState } from 'react';

const TernaryExample = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome, User!' : 'Please Log In'}</h1>

      {/* Ternary operation in JSX for rendering different components */}
      {isLoggedIn ? (
        <p>You are logged in. Enjoy your stay!</p>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default TernaryExample;