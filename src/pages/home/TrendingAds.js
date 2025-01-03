import React from 'react';
import styles from './TrendingAds.module.css';

const trendingAds = [
    {
        id: 1,
        title: 'Ad 1',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 2,
        title: 'Ad 2',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 3,
        title: 'Ad 3',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 4,
        title: 'Ad 4',
        image: 'https://via.placeholder.com/300',
    },
    {
        id: 5,
        title: 'Ad 5',
        image: 'https://via.placeholder.com/300',
    },
];

function TrendingAds() {
    return (
        <section className={styles.trendingAdsSection}>
            <h2 className={styles.title}>Trending Ads</h2>
            <div className={styles.gallery}>
                {trendingAds.map((ad) => (
                    <div
                        key={ad.id}
                        className={`${styles.card} ${
                            styles[`card-${ad.id}`] || ''
                        }`}
                    >
                        <img
                            src={ad.image}
                            alt={ad.title}
                            className={styles.image}
                        />
                        <div className={styles.cardContent}>
                            <h3 className={styles.adTitle}>{ad.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrendingAds;
