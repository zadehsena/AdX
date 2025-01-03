import React from 'react';
import styles from './Hero.module.css';
import adImage from '../../assets/ad.webp'; // Adjust the path based on your folder structure

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Connect Advertisers with Publishers</h1>
                <p className={styles.description}>
                    Create ads, set your price, and get them featured on top websites. 
                    Website owners can browse ads, choose what to display, and earn money effortlessly.
                </p>
                <button className={styles.ctaButton}>Get Started</button>
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src={adImage} 
                    alt="Marketplace Illustration" 
                    className={styles.image} 
                />
            </div>
        </div>
    );
}

export default Hero;
