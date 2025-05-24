import React, { useRef, useState, useEffect } from 'react';
import CoupleStory from './pages/CoupleStory';
import WeddingDetails from './pages/WeddingDetails';
import Wishes from './pages/Wishes';
import Gallery from './pages/Gallery';
import './App.css';
import Home from './pages/Home';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import FamilySection from './pages/FamilyDetails';
import VenueDetails from './pages/VenueDetails';
import dev_logo from "../src/assets/images/dev_logo.png";


export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log('Autoplay blocked:', err.message);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Optional: Pause on tab change or visibility
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/vecteezy_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Audio Tag */}
      <audio ref={audioRef} loop src="/backgroundMusic.mp3" />

      {/* Toggle Button */}
      <button className="music-toggle-btn" onClick={toggleMusic}>
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>

      {/* Main Content */}
      <div className="content">
        <main style={{ padding: '1rem' }}>
          <Home />
          <CoupleStory />
          <FamilySection />
          <Gallery />
          <VenueDetails />
        </main>
      </div>
      <footer className="custom-footer">
        <div className="footer-content">
          {/* <img src={dev_logo} alt="Developer Logo" className="footer-logo" /> */}
          <p>Developed by <strong>RajeshReddy</strong></p>
        </div>
      </footer>
    </div>
  );
}
