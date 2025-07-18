import './signupPage.css';
import { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Add your signup logic here (e.g. API call)
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSubmit}>
        <h2 className="signup-title">Sign Up</h2>
        <input
          type="text"
          name="firstName"
          placeholder="Enter Your First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter Your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          value={formData.username}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
