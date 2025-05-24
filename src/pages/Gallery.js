import React, { useState, useEffect } from 'react';
import './Gallery.css';

import image1 from "../assets/images/coupleBackGround.jpg";
import image2 from "../assets/images/CoupleImage.jpg";
import image3 from "../assets/images/image1.jpg";
import image4 from "../assets/images/image2.jpg";

const images = [image1, image2, image3, image4];

export default function Gallery() {
    const [showAll, setShowAll] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(null);
    const [autoScroll, setAutoScroll] = useState(true); // State to control auto-scroll

    const visibleImages = showAll ? images : images.slice(0, 3);

    const toggleGallery = () => setShowAll(prev => !prev);

    const openModal = (index) => {
        setModalImageIndex(index);
        setAutoScroll(true); // Reset auto-scroll when opening modal
    };

    const closeModal = () => {
        setModalImageIndex(null);
        setAutoScroll(true); // Reset auto-scroll when closing modal
    };

    const goToPrevious = () => {
        setAutoScroll(false); // Pause auto-scroll on manual navigation
        setModalImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const goToNext = () => {
        setAutoScroll(false); // Pause auto-scroll on manual navigation
        setModalImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    // Auto-scroll effect
    useEffect(() => {
        if (modalImageIndex === null || !autoScroll) return;

        const interval = setInterval(() => {
            setModalImageIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount or when modal closes
    }, [modalImageIndex, autoScroll]);

    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className={`gallery-grid ${showAll ? 'expanded' : ''}`}>
                {visibleImages.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Wedding Photo ${index + 1}`}
                        onClick={() => openModal(index)}
                        className="gallery-img"
                    />
                ))}
            </div>
            <button className="toggle-gallery-btn" onClick={toggleGallery}>
                {showAll ? 'Show Less' : 'See More'}
            </button>

            {/* Modal Overlay */}
            {modalImageIndex !== null && (
                <div className="modal-overlay" onClick={closeModal}>
                    <button className="modal-nav-btn left" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
                        &#10094; {/* Left arrow */}
                    </button>
                    <img
                        src={images[modalImageIndex]}
                        alt="Enlarged"
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
                    />
                    <button className="modal-nav-btn right" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                        &#10095; {/* Right arrow */}
                    </button>
                </div>
            )}
        </section>
    );
}