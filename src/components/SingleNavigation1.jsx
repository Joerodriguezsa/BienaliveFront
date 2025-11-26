import React from 'react';

function SingleNavigation() {
    return (
        <ul className="navigation onepage-nav">
            <li className="current"><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#news">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    );
}

export default SingleNavigation;