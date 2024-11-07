import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contactUs">
            <h2><strong>Contact Us</strong></h2>
            <div className="contactContainer">
                <div className="contactInfo">
                    <div className="infoItem">
                        <i className="fas fa-map-marker-alt"></i>
                        <p><strong>Our Office Address</strong><br />
                        Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064</p>
                    </div>
                    <div className="infoItem">
                        <i className="fas fa-envelope"></i>
                        <p><strong>General Enquiries</strong><br />
                        websupport@justdial.com</p>
                    </div>
                    <div className="infoItem">
                        <i className="fas fa-phone"></i>
                        <p><strong>Call Us</strong><br />
                        +91-8888888888</p>
                    </div>
                    <div className="infoItem">
                        <i className="fas fa-clock"></i>
                        <p><strong>Our Timing</strong><br />
                        Mon - Sun: 10:00 AM - 07:00 PM</p>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="contact" placeholder="Your Contact No." required />
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
