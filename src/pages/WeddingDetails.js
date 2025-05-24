import { useState, useEffect, useRef } from 'react';
import './weddingDetails.css';
import { QRCodeCanvas } from 'qrcode.react';

export default function WeddingDetails() {
    const calculateTimeLeft = () => {
        const weddingDate = new Date('June 10, 2025 17:00:00');
        const now = new Date();
        const difference = weddingDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const audioRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Play audio on user interaction
    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log('Autoplay prevented:', error);
            });
        }
    };

    // Pause audio
    const handlePauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    useEffect(() => {
        handlePlayAudio();
    }, []);

    // WhatsApp Wishes Handler
    const sendWhatsAppWishes = () => {
        const message = encodeURIComponent('Dear Suresh & Anjali, Wishing you a lifetime of love and happiness on your wedding day! - [Your Name]');
        const phone = '+919876543210'; // Replace with your contact number
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <section className="wedding-details bg-white bg-opacity-80 rounded-lg shadow-2xl p-8 m-4 max-w-5xl mx-auto text-center fade-in relative">
            <h2 className="text-4xl font-semibold text-rose-600 mb-8 great-vibes">Our Wedding</h2>

            {/* Bride and Groom Details with Photos */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-6 md:space-y-0 md:space-x-8">
                {/* Groom Section */}
                <div className="flex-1 text-left">
                    <img
                        src="https://via.placeholder.com/300x400?text=Groom+Photo"
                        alt="Groom Suresh"
                        className="w-full max-w-xs mx-auto md:mx-0 rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-2xl font-serif text-rose-600">Suresh Kumar</h3>
                    <p className="text-gray-700">
                        Suresh is a passionate software engineer who loves hiking and cooking. He’s excited to start this new chapter with Anjali.
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Family:</strong> Mr. Rajesh Kumar (Father), Mrs. Sunita Kumar (Mother)
                    </p>
                </div>
                {/* Bride Section */}
                <div className="flex-1 text-left md:text-right">
                    <img
                        src="https://via.placeholder.com/300x400?text=Bride+Photo"
                        alt="Bride Anjali"
                        className="w-full max-w-xs mx-auto md:mx-0 rounded-lg shadow-md mb-4"
                    />
                    <h3 className="text-2xl font-serif text-rose-600">Anjali Sharma</h3>
                    <p className="text-gray-700">
                        Anjali is a talented graphic designer with a love for travel and music. She can’t wait to build a future with Suresh.
                    </p>
                    <p className="text-gray-600 mt-2">
                        <strong>Family:</strong> Mr. Anil Sharma (Father), Mrs. Priya Sharma (Mother)
                    </p>
                </div>
            </div>

            {/* Courtship Story (Enhanced Love Story) */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-rose-600 mb-6 great-vibes">Our Courtship Journey</h3>
                <div className="timeline relative space-y-8">
                    {/* Milestone 1 */}
                    <div className="timeline-item flex items-center">
                        <div className="timeline-icon bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <span>2018</span>
                        </div>
                        <div className="timeline-content bg-white rounded-lg shadow-md p-4 ml-6 flex-1">
                            <h4 className="text-lg font-semibold text-rose-600">The First Spark</h4>
                            <p className="text-gray-700">
                                Suresh and Anjali met at a college festival during a lively karaoke night. Their shared love for music sparked an instant connection.
                            </p>
                            <img
                                src="https://via.placeholder.com/100x100?text=Karaoke+Night"
                                alt="Karaoke Night"
                                className="mt-2 rounded"
                            />
                        </div>
                    </div>
                    {/* Milestone 2 */}
                    <div className="timeline-item flex items-center">
                        <div className="timeline-icon bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <span>2019</span>
                        </div>
                        <div className="timeline-content bg-white rounded-lg shadow-md p-4 ml-6 flex-1">
                            <h4 className="text-lg font-semibold text-rose-600">First Date</h4>
                            <p className="text-gray-700">
                                A cozy coffee shop date turned into hours of laughter and storytelling, marking the beginning of their romantic journey.
                            </p>
                            <img
                                src="https://via.placeholder.com/100x100?text=Coffee+Date"
                                alt="Coffee Date"
                                className="mt-2 rounded"
                            />
                        </div>
                    </div>
                    {/* Milestone 3 */}
                    <div className="timeline-item flex items-center">
                        <div className="timeline-icon bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <span>2020</span>
                        </div>
                        <div className="timeline-content bg-white rounded-lg shadow-md p-4 ml-6 flex-1">
                            <h4 className="text-lg font-semibold text-rose-600">Growing Closer</h4>
                            <p className="text-gray-700">
                                Despite distance, late-night calls and virtual movie nights deepened their bond, proving love knows no boundaries.
                            </p>
                            <img
                                src="https://via.placeholder.com/100x100?text=Virtual+Date"
                                alt="Virtual Date"
                                className="mt-2 rounded"
                            />
                        </div>
                    </div>
                    {/* Milestone 4 */}
                    <div className="timeline-item flex items-center">
                        <div className="timeline-icon bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                            <span>2023</span>
                        </div>
                        <div className="timeline-content bg-white rounded-lg shadow-md p-4 ml-6 flex-1">
                            <h4 className="text-lg font-semibold text-rose-600">The Proposal</h4>
                            <p className="text-gray-700">
                                Under a starry beach sky, Suresh proposed with a heartfelt letter. Anjali’s tearful “Yes” sealed their forever.
                            </p>
                            <img
                                src="https://via.placeholder.com/100x100?text=Proposal"
                                alt="Proposal"
                                className="mt-2 rounded"
                            />
                        </div>
                    </div>
                    <p className="text-gray-700 italic mt-4">
                        In 2025, Suresh and Anjali are ready to tie the knot and begin their happily ever after.
                    </p>
                </div>
            </div>

            {/* Core Details */}
            <div className="space-y-4 text-lg text-gray-700 mb-12">
                <h3 className="text-2xl font-semibold text-rose-600">Wedding Details</h3>
                <p><strong className="text-rose-500">Date:</strong> Tuesday, June 10, 2025</p>
                <p><strong className="text-rose-500">Time:</strong> 5:00 PM IST</p>
                <p><strong className="text-rose-500">Venue:</strong> Rose Garden Banquet Hall, Springfield</p>
                <p className="italic">
                    We invite you to join us in celebrating our special day surrounded by family and friends.
                </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800">Countdown to Our Big Day</h3>
                <div className="flex justify-center space-x-4 mt-2 text-rose-600">
                    <div>
                        <span className="block text-2xl font-bold">{timeLeft.days || 0}</span>
                        <span className="text-sm">Days</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold">{timeLeft.hours || 0}</span>
                        <span className="text-sm">Hours</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold">{timeLeft.minutes || 0}</span>
                        <span className="text-sm">Minutes</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold">{timeLeft.seconds || 0}</span>
                        <span className="text-sm">Seconds</span>
                    </div>
                </div>
            </div>

            {/* Additional Details */}
            <div className="mb-12 space-y-4 text-lg text-gray-700">
                <p><strong className="text-rose-500">Dress Code:</strong> Formal / Traditional Attire (Shades of Red, Gold, or White)</p>
                <p><strong className="text-rose-500">RSVP By:</strong> May 31, 2025</p>
                <p><strong className="text-rose-500">Contact:</strong> Suresh (+91 98765 43210) | Anjali (+91 87654 32109)</p>
                <p className="text-sm italic">
                    Kindly RSVP by the date above so we can ensure a delightful experience for all our guests.
                </p>
            </div>

            {/* Google Maps */}
            <div className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Us on the Map</h3>
                <div className="w-full h-96">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31792.18859277612!2d-89.67741032761423!3d39.7817213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875a6f2b8f2b5d3%3A0x5f5f5e5f5e5f5e5f!2sSpringfield%2C%20IL%2C%20USA!5e0!3m2!1sen!2sus!4v1697664321098!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        title="Rose Garden Banquet Hall Location"
                    ></iframe>
                </div>
            </div>

            {/* QR Code */}
            <div className="mb-12">
                <h3 className="text-xl font-serif text-rose-600 mb-2">Scan to Visit Our Wedding</h3>
                <QRCodeCanvas
                    value="https://your-wedding-site.com"
                    size={128}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="H"
                    includeMargin={true}
                    className="mx-auto"
                />
                <p className="mt-2 text-sm">Share this with your friends!</p>
            </div>

            {/* Audio Player */}
            <div className="fixed bottom-4 right-4 z-50 flex space-x-2">
                <button
                    onClick={handlePlayAudio}
                    className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition duration-300"
                >
                    Play
                </button>
                <button
                    onClick={handlePauseAudio}
                    className="px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition duration-300"
                >
                    Pause
                </button>
            </div>
            <audio ref={audioRef} loop>
                <source
                    src="https://cdn.pixabay.com/audio/2023/08/07/audio_8f6b6c7e9b.mp3"
                    type="audio/mp3"
                />
                Your browser does not support the audio element.
            </audio>

            {/* WhatsApp Wishes Button */}
            <div className="fixed bottom-4 left-4 z-50">
                <button
                    onClick={sendWhatsAppWishes}
                    className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 flex items-center space-x-2"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.669-.916-.983-.246-.313-.492-.398-.669-.398-.173-.001-.547-.001-.747.148-.297.297-1.143.891-1.143 2.171 0 1.281.842 2.518 1.015 2.716.173.198 2.379 3.842 5.77 5.39.814.364 1.452.586 1.948.772.496.186.892.297 1.337.223.444-.074 1.379-.595 1.573-.991.197-.396.346-.694.297-.892-.05-.198-.198-.347-.495-.496z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.133.558 4.133 1.53 5.874L0 24l6.315-1.658C8.067 23.442 10.033 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.314c-1.815 0-3.585-.558-5.103-1.612l-.363-.21-3.744.983.998-3.648-.235-.375C2.558 16.133 2 14.133 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                    <span>Send WhatsApp Wishes</span>
                </button>
            </div>
        </section>
    );
}