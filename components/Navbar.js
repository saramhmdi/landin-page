import React from 'react';
import styles from './Navbar.module.css'
import Logo from '../imge/images.png'
const Navbar = () => {
    return (
        <div className={styles.header}>
                <ul className={styles.listcontainer}>
                    <li>Home page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            <div>
                <img alt='logo' src={Logo} className={styles.logo}/>      
            </div>
        </div>
    );
};

export default Navbar;