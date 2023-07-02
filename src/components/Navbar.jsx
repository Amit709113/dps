import React from 'react';
import './navbar_style.css';

const Navbar = () =>{

    return(
        <>
        <nav className='main-nav'>
            <div className='menu-link'>
                <ul className='menu-link-list'>
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">About Us</a>
                    </li>

                    <li>
                        <a href="#">Notice</a>
                    </li>
                    <li>
                        <a href="#">Faclities</a>
                    </li>
                    <li>
                        <a href="#">Infrastructure</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">News and Event</a>
                    </li>
                </ul>

            </div>

        </nav>

        </>
    )
}
export default Navbar;