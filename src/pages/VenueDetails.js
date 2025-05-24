import React from 'react';
import './VenueDetails.css';

const VenueDetails = () => {
    return (
        <div className="venue-details">
            <h1 style={{ color: "white" }}>Venue Details</h1>
            <div className="venue-cards">
                <div className="venue-card">
                    <h2 style={{ color: 'goldenrod' }}>Wedding Ceremony</h2>
                    <p>FATHICO BANQUET HALL <br /> 3-13-127/1, Chanikyapuri Colony, Chandrapuri Colony, Mallapur, Hyderabad, Secunderabad, Telangana 500076</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.328771954917!2d78.57952457369078!3d17.445431701133284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bcaa3c6e56b%3A0xd75feeee64287415!2sFATHICO%20BANQUET%20HALL!5e1!3m2!1sen!2sin!4v1748084245644!5m2!1sen!2sin" width="100%"
                        height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="venue-card">
                    <h2 style={{ color: 'goldenrod' }}>Reception</h2>
                    <p>FATHICO BANQUET HALL <br /> 3-13-127/1, Chanikyapuri Colony, Chandrapuri Colony, Mallapur, Hyderabad, Secunderabad, Telangana 500076</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.328771954917!2d78.57952457369078!3d17.445431701133284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bcaa3c6e56b%3A0xd75feeee64287415!2sFATHICO%20BANQUET%20HALL!5e1!3m2!1sen!2sin!4v1748084245644!5m2!1sen!2sin" width="100%"
                        height="250" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default VenueDetails;
