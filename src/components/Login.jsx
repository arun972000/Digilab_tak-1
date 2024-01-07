import  { useState } from 'react';
import './Login.css'; // Import your CSS file

const AnimatedLoginButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLogin = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000); 
  };

  return (
    <div className="login-container">
      <button
        className={`login-button ${isAnimating ? 'loading' : ''}`}
        onClick={handleLogin}
        disabled={isAnimating}
      >
        {isAnimating ? 'Logging...' : 'Login'}
      </button>
    </div>
  );
};

export default AnimatedLoginButton;