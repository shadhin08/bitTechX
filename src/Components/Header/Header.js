import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid text_center">
                    <a className="navbar-brand" href="#">
                    <img src="#" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                    HootStory
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;