import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from '../../assets/logo.png';
import {Button } from '@material-ui/core';


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img src={Logo} alt=""  style={{width:'190px'}} />
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Stories"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                STORIES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                LOG IN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Button style={{backgroundColor: '#FF5C00'}}>SIGN UP</Button>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <hr/>  
      <div className="nav-container"style={{fontSize:'1rem'}}>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Marketplace"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                MARKETPLACE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Wholesalecenter"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                WHOLESALE CENTER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Sellercenter"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SELLER CENTER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Internship"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                INTERNSHIPS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Event"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                EVENTS
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div> 
    </>
  );
}

export default NavBar;
