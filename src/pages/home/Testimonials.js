import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: 'Jane Doe',
        role: 'Advertiser',
        text: 'This platform helped me reach thousands of potential customers quickly. The process was seamless!',
        image: 'https://via.placeholder.com/100'
    },
    {
        name: 'John Smith',
        role: 'Website Owner',
        text: 'I love how easy it is to find ads that align with my website content. I’m making consistent revenue!',
        image: 'https://via.placeholder.com/100'
    },
    {
        name: 'Sarah Lee',
        role: 'Advertiser',
        text: 'The ability to control pricing and target specific audiences is fantastic. Highly recommend!',
        image: 'https://via.placeholder.com/100'
    },
    {
        name: 'Emily Davis',
        role: 'Website Owner',
        text: 'This marketplace made it so easy for me to find ads and monetize my website effectively.',
        image: 'https://via.placeholder.com/100'
    },
    {
        name: 'Michael Brown',
        role: 'Advertiser',
        text: 'The best platform for creating ads and seeing immediate results!',
        image: 'https://via.placeholder.com/100'
    },
    {
        name: 'Lisa Johnson',
        role: 'Website Owner',
        text: 'I’ve increased my earnings significantly thanks to this platform. Highly recommended!',
        image: 'https://via.placeholder.com/100'
    }
];

function Testimonials() {
    return (
        <section className={styles.testimonialsSection}>
            <h2 className={styles.title}>What Our Users Say</h2>
            <div className={styles.testimonialsContainer}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.testimonialCard}>
                        <img 
                            src={testimonial.image} 
                            alt={`${testimonial.name}'s profile`} 
                            className={styles.image} 
                        />
                        <h3 className={styles.name}>{testimonial.name}</h3>
                        <p className={styles.role}>{testimonial.role}</p>
                        <p className={styles.text}>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
