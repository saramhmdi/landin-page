import React from 'react';
import baner from '../imge/—Pngtree—original square diamond pure black_1140387.jpg'
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={baner} alt='baner'/>
            <div className={styles.containerText}>
                <h1>Botostart</h1>
                <p>we`re buy from <span>Botostart</span></p>
            </div>
        </div>
    );
};

export default Banner;