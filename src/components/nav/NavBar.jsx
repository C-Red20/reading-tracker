import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file for styling

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="navbar-container">
            <h1 className="navbar-title">
                <Link to="/" className="navbar-title-link">Reading Tracker</Link>
            </h1>
            <nav className="navbar" style={{ backgroundColor: '#70757a' }}>
                <button className="navbar-toggler" onClick={toggle}>
                    Menu
                </button>
                <div className={`navbar-collapse ${isOpen ? 'open' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/books" className="nav-link">All Books</a>
                        </li>
                        <li className="nav-item">
                            <a href="/reading" className="nav-link">Currently Reading</a>
                        </li>
                        <li className="nav-item">
                            <a href="/finished" className="nav-link">Finished Books</a>
                        </li>
                        <li className="nav-item">
                            <a href="/not-started" className="nav-link">Not Started</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link" onClick={() => localStorage.removeItem("activeUser")}>
                                <strong>Logout</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

