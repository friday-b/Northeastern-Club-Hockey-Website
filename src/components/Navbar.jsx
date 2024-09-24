 import './Navbar.css'
 import {Team} from "./Team"
 import React, {useState} from 'react'

export function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownHovered, setDropdownHovered] = useState(false);

    const toggleDropdownOpen = () => {
      setDropdownOpen(true);
    }

    const toggleDropdownClosed = () => {
        setDropdownOpen(false);
      }

      const toggleHovered = () => {
        setDropdownHovered(true);
      }

      const toggleNotHovered = () => {
        setDropdownHovered(false);
      }

    return <nav className="nav"> 
        <a href="/"> <img src="/images/Husky.png" /> </a>
        <ul>
            <li className = "dropdown-holder">
                <span className= "team-link"
             onMouseEnter={toggleDropdownOpen}
             onMouseLeave ={toggleDropdownClosed}>
            <a>Team</a>
            </span>
            {(isDropdownOpen || isDropdownHovered)  && (
                 <Team 
            onMouseEnter={toggleHovered} 
            onMouseLeave={toggleNotHovered}/> )}
            </li>
            <li>
            <a href ="/schedule"> Schedule</a>
            </li>
            <li>
            <a href ="/aboutUs"> About Us</a>
            </li>
            <li>
            <a href ="/contact"> Contact</a>
            </li>
        
        </ul>
    </nav>
}
