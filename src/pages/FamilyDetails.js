import React from 'react';
import './FamilyDetails.css';
import fam1 from "../assets/images/image1.jpg";
import fam2 from "../assets/images/CoupleImage.jpg"

const FamilySection = () => {
    return (
        <section className="family-section">
            <div className="family-container">
                <h2>Our Families</h2>
                <div className="family-content">
                    {/* Bride's Family */}
                    <div className="family-box">
                        <img src={fam1} alt="Bride's Family" />
                        <h3>Samual's Family</h3>
                        <p><strong>John Smith</strong> - Father</p>
                        <p><strong>Mary Smith</strong> - Mother</p>
                        <p><strong>Emma Smith</strong> - Sister</p>
                    </div>
                    {/* Groom's Family */}
                    <div className="family-box">
                        <img src={fam2} alt="Groom's Family" />
                        <h3>Swapna's Family</h3>
                        <p><strong>Robert Johnson</strong> - Father</p>
                        <p><strong>Susan Johnson</strong> - Mother</p>
                        <p><strong>James Johnson</strong> - Brother</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FamilySection;