import React from 'react';
import {Link} from 'react-router-dom'
import '../css/components/Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">

            <div className="navbar_center">
                <div className="navbar_logo_container">
                    <h1 className="navbar_logo">Fast<span className="complementary">Link</span></h1>
                </div>
                <div className="navbar_links">

                    <Link to="/" className="navbar_link">Home</Link>
                    <Link to="/login" className="navbar_link">Login</Link>
                    <Link to="/register" className="navbar_link">Register</Link>

                </div>
            </div>
            
        </div>
    )
}
