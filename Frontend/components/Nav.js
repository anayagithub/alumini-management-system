import React from 'react';
import "./Nav.css";

const Nav = ({ setCurrentPage }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navdiv">
          <div className="logo">
            <a href="#">ALUMNI MANAGEMENT</a>
          </div>
          <ul>
            <li><a href="#" onClick={() => setCurrentPage("home")}>Home</a></li>
            <li><a href="#" onClick={() => setCurrentPage("about")}>About</a></li>
            <li><a href="#" onClick={() => setCurrentPage("contact")}>Contact</a></li>
            <li><a href="#" onClick={() => setCurrentPage("services")}>Services</a></li>
            <button onClick={() => setCurrentPage("login")}>
              <a href="#">Login</a> {/* Navigate to Login Page */}
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
