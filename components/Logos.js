import React from 'react';
import hp from '../imge/z1LgsA.jpg'
import dell from '../imge/UN49Ma.jpg'
import apple from '../imge/phMH25.jpg'
import styles from './Logos.module.css'
const Logos = () => {
    return (
        <div className={styles.container}>
            <p>Who Support Us?</p>
            <div>
                <img src={dell} alt='logo'/>
                <img src={hp} alt='logo'/>
                <img src={apple} alt='logo'/>
            </div>
            
        </div>
    );
};

export default Logos;