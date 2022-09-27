import React from 'react';
import Play from '../img/hero/play.png';
import HeroImg from '../img/hero/hero-img.png';

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h2>The Design Thinking Superpowers</h2>
                    <p>Tools tutorials, design and innovation experts, all
                        in one place! The most intuitive way to imagine
                        your next user experience.</p>
                    <button >Get Started</button>
                    <img src={Play} alt="" />
                </div>
                <div className="hero-img">
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </>
    )
    
}


export default Hero;