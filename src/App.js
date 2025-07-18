// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';

function App() {
  const handleLogin = (email, password) => {
    if (email === "uzairkashif180@gmail.com" && password === "Abcd#123") {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
