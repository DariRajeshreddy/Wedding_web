import React, { useState, useEffect } from 'react';
import './Gallery.css';

import image1 from "../assets/images/coupleBackGround.jpg";
import image2 from "../assets/images/CoupleImage.jpg";
import image3 from "../assets/images/image1.jpg";
import image4 from "../assets/images/image2.jpg";

const images = [image1, image2, image3, image4, image1, image2, image3, image4];

export default function Gallery() {
    const [showAll, setShowAll] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(null);
    const [autoScroll, setAutoScroll] = useState(true); // State to control auto-scroll
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);
    const [visibleImageIndex, setVisibleImageIndex] = useState(0);



    // const visibleImages = showAll ? images : images.slice(0, 3);
    const visibleImages = images;


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

    const handleTouchStart = (e) => {
        setTouchStartX(e.changedTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEndX(e.changedTouches[0].clientX);
    };

    useEffect(() => {
        if (touchStartX !== null && touchEndX !== null) {
            const distance = touchStartX - touchEndX;
            const minSwipeDistance = 50;

            if (Math.abs(distance) > minSwipeDistance) {
                if (modalImageIndex !== null) {
                    // Swipe in modal
                    if (distance > 0) {
                        goToNext();
                    } else {
                        goToPrevious();
                    }
                } else {
                    // Swipe in visible gallery
                    if (distance > 0) {
                        // Next image
                        setVisibleImageIndex((prev) =>
                            prev === images.length - 1 ? 0 : prev + 1
                        );
                    } else {
                        // Previous image
                        setVisibleImageIndex((prev) =>
                            prev === 0 ? images.length - 1 : prev - 1
                        );
                    }
                }
            }

            setTouchStartX(null);
            setTouchEndX(null);
        }
    }, [touchEndX]);

    // Auto-scroll visible images (used in main gallery view)
    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleImageIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup
    }, []);


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
            <div className="gallery-grid">
                {window.innerWidth <= 768 ? (
                    <img
                        src={images[visibleImageIndex]}
                        alt={`Wedding Photo ${visibleImageIndex + 1}`}
                        onClick={() => openModal(visibleImageIndex)}
                        className="gallery-img"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    />
                ) : (
                    // Optional desktop carousel-like effect
                    images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Wedding Photo ${index + 1}`}
                            onClick={() => openModal(index)}
                            className={`gallery-img ${index === visibleImageIndex ? 'active' : ''}`}
                        />
                    ))
                )}
            </div>


            {/* <button className="toggle-gallery-btn" onClick={toggleGallery}>
                {showAll ? 'Show Less' : 'See More'}
            </button> */}

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
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    />
                    <button className="modal-nav-btn right" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                        &#10095; {/* Right arrow */}
                    </button>
                </div>
            )}
        </section>
    );
}