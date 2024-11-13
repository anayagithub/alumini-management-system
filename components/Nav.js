import React from 'react';
import "./Nav.css"

const Nav = () => {
  return (
    <div>
			<nav className="navbar">
		<div className="navdiv">
			<div className="logo"><a href="#">ALUMINI MANAGEMENT</a> </div>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Services</a></li>
				<button><a href="#">SignUp</a></button>
			</ul>
		</div>
	</nav>
	</div>
  )
}

export default Nav
