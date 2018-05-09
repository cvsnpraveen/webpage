import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <tt><Link className="navbar-brand" to="/">Praveen CHINTA</Link></tt>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                {/* <ul className="nav navbar-nav">
                </ul> */}
                <ul className="nav navbar-nav navbar-right">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle" data-toggle="dropdown" to="">Profile
                        <span className="caret"></span></Link>
                        <ul className="dropdown-menu">
                        <li><Link to="/test">Test Link</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default NavBar;
