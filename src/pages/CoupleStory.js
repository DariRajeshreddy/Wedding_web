import './CoupleStory.css';

export default function CoupleStory() {
    const groomName = "Samual";
    const brideName = "Swapna";
    const whatsappNumber = "9848680844";
    const message = encodeURIComponent(`Hi ${groomName} & ${brideName}, Wishing you a joyful and blessed married life! 💐🎊`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <div className="couple-story">
            <h1>Our Story</h1>
            <p>
                Their journey began in the most unexpected way — through a mutual connection of a friend's girlfriend. One day, <strong>{groomName}</strong> came across <strong>{brideName}</strong>'s profile on Instagram, and something about her smile just clicked.
            </p>
            <p>
                What started with a simple "Hello" in the DMs soon turned into long conversations, frequent calls, and a growing sense of comfort that neither of them could ignore. From virtual chats to real-world connections, their bond deepened with every passing day.
            </p>
            <p>
                Laughter, late-night talks, and countless shared moments built the foundation of a beautiful love story. Now, after a journey filled with sweet surprises and heartfelt memories, they're stepping into forever — hand in hand, heart with heart.
            </p>


            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>
                    Send Your Wishes via WhatsApp 💬
                </button>
            </a>
        </div>
    );
}
