import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import './FormSignUp.css';
import logo from '../../components/assets/Logo.svg';
import google from '../assets/Google.png';
import rectangle from '../assets/Rectangle 81.png';




export default function FormSignUp() {
  let name = useRef()
  let email = useRef()
  let password = useRef()
  let confirmPassword = useRef()
  let notification = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    notification: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aquí debes hacer la petición POST al servidor
   // console.log(name.current.value)
   // console.log(email.current.value)
    //console.log(password.current.value)
    //console.log(confirmPassword.current.value)
   // console.log(notification.current.checked)
    let data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      notification: notification.current.checked
      
    }
    console.log(data)
    try {
      await axios.post('http://localhost:8080/users/', data)}
    catch (error) {
      console.log(error)
    }
  } ;

  return (
    <section className="form-container">
      <div id="form-container">
        <div className="register-title">
          <img src={logo} alt="logo" id="register-logo" />
          <h2 className="welcome-title">Welcome!</h2>
          <p id="discover">
            Discover manga, manhua and manhwa, track your progress, have fun, read manga.
          </p>
        </div>

        <form id="signup-form" className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            ref = {name}
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            ref = {email}
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Password</label>
          <input
            ref = {password}
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleInputChange}
          />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            ref = {confirmPassword}
            type="password"
            id="confirm-password"
            name="confirmPassword"
            className="form-input"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />

          <div className="form-group">
            <input
              ref = {notification}
              type="checkbox"
              id="notification"
              name="notification"
              value="send-notification"
              className="form-checkbox"
              checked={formData.notification}
              onChange={handleInputChange}
            />
            <label htmlFor="notification" className="form-label" id='notification-label'>
              Send notification to my email
            </label>
          </div>

          <button type="submit" id="signup-btn" className="form-btn">
            Sign Up
          </button>
          <button type="button" id="google-signin-btn" className="form-btn">
            {' '}
            <img src={google} alt="" /> Sign In with Google
          </button>
        </form>
        <p className="aw">
          Already have an account? <a href="#">Log in
</a>
        </p>
        <p className="aw">
          Go back to <a href="#">Home page</a>
        </p>
      </div>
      <div>
        <img src={rectangle} alt="" className="register-image" />
      </div>
    </section>
  );
}

