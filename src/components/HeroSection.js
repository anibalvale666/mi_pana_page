import React from "react";
import { Button } from "./Button";
import '../App.css'
import './HeroSection.css'
import video1  from '../assets/videos/video-1.mp4';
const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1>MANTENIMIENTO PREVENTIVO</h1>
      <p>Visitanos</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
