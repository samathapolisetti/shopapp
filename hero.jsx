import React from 'react'
import './hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow_icon.png'
import hero_image from '../assets/hero_image.png'
    const hero =() => {
        
    return ( 
        <div className='hero'>
         <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2> 
        <div className="hero-hand-icon">
       </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>   
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
    )
    }
    export default hero
    