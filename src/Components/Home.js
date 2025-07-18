// Components/HomePage.js
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Welcome to My App</h1>
        <nav className="home-nav">
          <Link to="/login" className="home-link">Login</Link>
          <span className="separator">|</span>
          <Link to="/signup" className="home-link">Sign Up</Link>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
