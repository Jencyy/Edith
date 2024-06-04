import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content justify-between d-flex  text-center">
                    <div className="footer-column">
                        <h3>About Us</h3>
                        <p>We are an educational institute dedicated to providing quality education and training to students worldwide.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Info</h3>
                        <p className='mb-2'>
                            <a href='https://maps.app.goo.gl/qV6mdXRGmPpmxGP26' className='contact-link'>

                                <FontAwesomeIcon icon={faMapMarkerAlt} /> 414, 4th Floor, Pavitraa Point, Opp. BBC, Near Savaliya Circle, Surat, Gujarat 395010
                            </a>
                        </p>
                        <p className='mb-2'>
                            <a href="tel:+919601175985" className="contact-link">
                                <FontAwesomeIcon icon={faPhone} /> +91 96011 75985
                            </a>
                        </p>
                        <p className='mb-2'>
                            <a href="mailto:edithtech01@gmail.com" className="contact-link">
                                <FontAwesomeIcon icon={faEnvelope} /> edithtech01@gmail.com
                            </a>
                        </p>
                    </div>
                    {/* <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#why-choose-us">About Us</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div> */}
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a> */}
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Education Institute || Designed By: JENCY</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
