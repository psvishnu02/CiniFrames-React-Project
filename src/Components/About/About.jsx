import React from 'react'
import './About.css'
import abtimg from '../../assets/abtimg.jpg'

const About = () => {
  return (<>
  <div className="abt-main">
    <div className="mask">
      <h1>ABOUT US</h1>
    </div>
  </div>

  <div className="about">
    <div className="about-content">
      <div className="about-text">
        <h2>About us</h2>
        <p>
         At CiniFrames, we believe every moment tells a story worth remembering. From the joy of weddings to the laughter of birthdays and the beauty of every celebration
        in between, we capture emotions that last a lifetime. Our passion lies in turning fleeting moments into timeless memories through creative, high-quality 
        photography. Whether it’s a grand event or an intimate gathering, we focus on every detail, ensuring your photos reflect the love, happiness, and energy of your 
        special day. With a blend of artistry and modern mobile technology, we make booking easy and your experience unforgettable.
        </p>
      </div>

      <div className="about-image">
        <img src={abtimg} alt="abtimg" />
      </div>

      <div className="features">
        <h1>Our Key Features</h1>
          <ul>
          <li>✅Professional Mobile Photography</li>
          <li>✅All Event Coverage</li>
          <li>✅Instant Booking System</li>
          <li>✅Candid & Creative Shots</li>
          <li>✅Same-Day Previews</li>
          <li>✅Flexible Packages</li>
          <li>✅Editing & Retouching</li>
          <li>✅Friendly Team</li>
        </ul>
      </div>
    </div>
  </div>
  </>
    )
}

export default About