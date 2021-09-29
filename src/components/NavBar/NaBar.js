import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NaBar = () => {
              
    const navStyle = {
        background:"white",
    fontWeight: "bold",
        color: "black",
    borderRadius:"8px"
  }
    return (
        <div>
                 <div className="menu">
                          <div>
                           <h1>Mealdb with react router</h1>
                        </div>
                        <nav  className="navbar">
                                <ul>
                                        <li><NavLink to="/home" activeStyle={navStyle}>Home</NavLink></li>
                                        <li><NavLink to="/about" activeStyle={navStyle}>About</NavLink></li>
                                        <li><NavLink to="/rastruant" activeStyle={navStyle}>Rastruant</NavLink></li>
                                        <li><NavLink to="/contact" activeStyle={navStyle}>Contact</NavLink></li>
                                </ul>
                        </nav>
                  </div>
        </div>
    );
};

export default NaBar;