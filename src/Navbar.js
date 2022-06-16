import React from "react";
import {Link} from "react-router-dom";
import './navbar.css';
import './App.css';
import Logo from "./photo/Logo.png";


const Navbar = () => (
    <nav>
        <header id="header">
            <div >
                <img id="logo" src={Logo} />
            </div>
            <ul>
                <li>
                    <Link to='/'> Home</Link>
                </li>
                <li>
                    <Link to='/about'> About</Link>
                </li>
                <li>
                    <Link to='/Article-List'>Articles</Link>
                </li>
                <li>
                    <Link to='/Project-list'>Project</Link>
                </li>
            </ul>
            <div className="toggle" ></div>
        </header>

    </nav>

);


export default Navbar;