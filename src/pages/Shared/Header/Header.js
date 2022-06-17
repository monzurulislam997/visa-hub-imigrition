import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/home" >Home</Link>
            <Link to="/service" >Service</Link>
            <Link to="/blogs" >Blogs</Link>
            <Link to="/about" >About Me</Link>
        </nav>
    );
};

export default Header;