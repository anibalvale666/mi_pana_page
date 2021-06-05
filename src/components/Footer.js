import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="foter-container">
            <section
                className="footer-subscription"
            >
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe at any time.
                </p>

                <div className="input-areas">
                    <form>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Tu email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/contact'>How it works</Link>
                        <Link to='/contact'>testimonials</Link>
                        <Link to='/contact'>Careers</Link>
                        <Link to='/contact'>Investors</Link>
                        <Link to='/contact'>terms of Service</Link>
                        
                    </div>
                
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/contact'>How it works</Link>
                        <Link to='/contact'>testimonials</Link>
                        <Link to='/contact'>Careers</Link>
                        <Link to='/contact'>Investors</Link>
                        <Link to='/contact'>terms of Service</Link>
                        
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to='/contact'>How it works</Link>
                        <Link to='/contact'>testimonials</Link>
                        <Link to='/contact'>Careers</Link>
                        <Link to='/contact'>Investors</Link>
                        <Link to='/contact'>terms of Service</Link>
                        
                    </div>
                
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/contact'>How it works</Link>
                        <Link to='/contact'>testimonials</Link>
                        <Link to='/contact'>Careers</Link>
                        <Link to='/contact'>Investors</Link>
                        <Link to='/contact'>terms of Service</Link>
                        
                    </div>
                </div>
            </div>


            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo" to="/">
                            MyPana <i className="fas fa-oil-can" />
                        </Link>
                    </div>
                    <small className="website-rights">MyPana © 2020</small>

                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
