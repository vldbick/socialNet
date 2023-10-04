import React from "react";
import './Nav.css';

export default function Nav() {
    return (
        <nav className='nav'>
            <div>
                <a href='#'>Profile</a>
            </div>
            <div>
                <a href='#'>Messages</a>
            </div>
            <div>
                <a href='#'>Music</a>
            </div>
            <div>
                <a href='#'>News</a>
            </div>
            <div>
                <a href='#'>Setting</a>
            </div>
        </nav>
    )
}