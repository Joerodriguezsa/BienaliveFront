import React from 'react';
import { Link } from 'react-router-dom';
import PageTitleBg from '../assets/images/bg/page-title-bg.jpg';

function HeroPageTitle({ title, breadcrumb = [] }) {
    return (
        <section className="page-title" style={{ backgroundImage: `url(${PageTitleBg})` }}>
            <div className="auto-container">
                <div className="title-outer text-center">
                    <h1 className="title"><br></br><br></br></h1>
                        {breadcrumb.length > 0 && (
                        <ul className="page-breadcrumb">
                            {breadcrumb.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.title}</Link>
                                </li>
                            ))}
                            <li>{title}</li>
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HeroPageTitle;