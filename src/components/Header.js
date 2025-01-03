import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.title}>AdX</div>
            <nav className={styles.nav}>
                <button className={styles.navButton}>Browse Ads</button>
                <button className={styles.navButton}>Create Ads</button>
                <button className={styles.navButton}>My Dashboard</button>
                <button className={styles.navButton}>Login/Signup</button>
            </nav>
        </header>
    );
}

export default Header;
