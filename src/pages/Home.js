import React, { useState, useEffect } from 'react';
import './Home.css';
import coupleImage from "../assets/images/Wedding_Image.png";
import frames from "../assets/images/ssframe.png";

// Set the wedding date to June 5, 2025
const weddingDate = new Date('2025-06-05');
weddingDate.setHours(0, 0, 0, 0); // Reset time to midnight

function Home() {
    const [daysToGo, setDaysToGo] = useState(0);

    useEffect(() => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Reset time to midnight
        const diff = weddingDate - now;
        console.log(diff, "fffffff");

        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        setDaysToGo(days);
    }, []);

    return (
        <>
            <h2 className="invitation-heading">Wedding-Invitation</h2>
            <div className="frame-overlay-container">
                <div className="couple-wrapper">
                    <img src={coupleImage} alt="Decorative Frame" className="decor-frame" />
                </div>

                <img src={frames} alt="Couple" className="couple" />

                {/* <div className="frame-text-overlay">
                    <h1 className="animated-text bride">Samual</h1>
                    <h2 className="animated-text weds">weds</h2>
                    <h1 className="animated-text groom">Swapna</h1>

                </div> */}

            </div>
            <div className="countdown-wrapper">
                <div className="countdown-number">{daysToGo}</div>
                <div className="countdown-label">Days to Go</div>
            </div>

        </>
    );
}

export default Home;