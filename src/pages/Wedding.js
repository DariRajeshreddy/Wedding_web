// src/pages/Wedding.js
import React from 'react';

function Wedding() {
    const groom = "Rahul";
    const bride = "Priya";
    const date = "25th December 2025";
    const time = "6:30 PM onwards";
    const venue = "Royal Palace Banquet Hall, Hyderabad";
    const mapLink = "https://www.google.com/maps?q=Royal+Palace+Banquet+Hall+Hyderabad";

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>💍 You're Invited!</h1>
            <h2>{groom} ❤️ {bride}</h2>
            <p>We are getting married and would love for you to celebrate with us!</p>
            <h3>📅 {date}</h3>
            <h3>🕕 {time}</h3>
            <h3>📍 <a href={mapLink} target="_blank" rel="noreferrer">{venue}</a></h3>

            <button
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Page link copied! 🎉 Share it with your loved ones.');
                }}
                style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}
            >
                📤 Share This Page
            </button>
        </div>
    );
}

export default Wedding;
