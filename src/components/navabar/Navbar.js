import React from "react";
import "./Navbar.scss";

//img 
import maleAvatar from '../../assets/icon/undraw_male_avatar_323b.svg';
import BookLogo from '../../assets/icon/bold.svg';
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-logo">
        <img src={BookLogo} className="navbar-logo-img" alt=""/>
      </div>
			<ul className="navbar-link">
				<li className="navbar-link-items">Home</li>
				<li className="navbar-link-items">Discover</li>
				<li className="navbar-link-items">My Collections</li>
			</ul>
      <div className="navbar-profile">
        <div className="navbar-profile-img">
					<img src={maleAvatar} className="navbar-profile-img-male" alt=""/>
				</div>
      </div>
		</div>
	);
};

export default Navbar;
