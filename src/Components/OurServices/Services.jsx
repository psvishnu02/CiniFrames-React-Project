import React from 'react'
import './services.css'
import { NavLink } from 'react-router-dom'
const Services = () => {
  return (
    <>
  <div className="offer-section">
    <div className="container">
      <p className="small-title">OUR SERVICE</p>
      <h2 className="main-title">WHAT WE OFFER</h2>

      <div className="offer-grid">
        <div className="offer-card light-card">
          <div className="icon"><i className="fa-solid fa-photo-film"></i></div>
          <h3>FASHION PHOTOGRAPHY</h3>
          <p>we capture the essence of style and individuality through striking visuals that blend creativity, elegance, and storytelling. We specialize in producing
            high-quality images that highlight your unique personality or brand, transforming fashion into timeless works of art. Whether it’s editorial, commercial, or
            personal style photography, our focus is on delivering captivating imagery that inspires confidence and leaves a lasting impression</p>
        </div>

        <div className="offer-image large">
        <img src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg" alt="" srcset="" />
        </div>

        <div className="offer-image small">
            <img src="https://images.pexels.com/photos/302552/pexels-photo-302552.jpeg" alt="" srcset="" />
        </div>

        <div className="offer-card light-card wide">
          <div className="icon"><i className="fa-solid fa-cake-candles"></i></div>
          <h3>BIRTHDAY PHOTOGRAPHY</h3>
          <p>
           We capture the joy, laughter, and unforgettable moments of your special day through vibrant and heartfelt birthday photography. Our goal is to turn every 
           smile, surprise, and celebration into timeless memories that you can cherish for years to come. Whether it’s an intimate gathering or a grand party, we bring
            creativity, warmth, and attention to detail to every shot, ensuring your birthday story is told beautifully and authentically.
          </p>
        </div>
      </div>
      <div className="offer-grid">
        <div className="offer-card light-card">
          <div className="icon"><i className="fa-solid fa-heart"></i></div>
          <h3>ENGAGEMENT PHOTOGRAPHY</h3>
          <p>We capture the magic of your love story through elegant and heartfelt engagement photography that celebrates connection, emotion, and genuine moments. With a blend
            of creativity and authenticity, we turn every glance, touch, and smile into timeless images that reflect your unique bond. Whether it’s a romantic outdoor session
            or a styled shoot that tells your story, we ensure your engagement memories are preserved beautifully and meaningfully.</p>
        </div>

        <div className="offer-image large">
        <img src="https://images.pexels.com/photos/1026390/pexels-photo-1026390.jpeg" alt="" srcset="" />
        </div>

        <div className="offer-image small">
            <img src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg" alt="" srcset="" />
        </div>

        <div className="offer-card light-card wide">
          <div className="icon"><i className="fas fa-ring"></i></div>
          <h3>WEDDING PHOTOGRAPHY</h3>
          <p>
           We capture the beauty, emotion, and timeless elegance of your special day through artistic and heartfelt wedding photography. Every glance, smile, and detail
           is preserved with care, turning fleeting moments into lasting memories that tell the story of your love. From intimate ceremonies to grand celebrations, we 
           blend creativity and authenticity to create images that reflect the true essence of your wedding day.
          </p>
        </div>
      </div>
    </div>
  </div>

 {/* pricing section  */}
    <div className="pricing-section">
    <h2 className="section-title">Pricing Plan</h2>
    <h1 className="m-title">Choose Your Package</h1>

    <div className="pricing-container">
      <div className="pricing-card">
        <h3 className="plan-title">Fashion</h3>
        <h2 className="price">₹4000</h2>
        <ul className="features">
          <li>✓No of photos-150</li>
          <li>✓No of videos-5</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
        </ul>
        <NavLink to={'/book'}><button className="btn">Book Now</button></NavLink>
      </div>

      <div className="pricing-card">
        <h3 className="plan-title">Birthday</h3>
        <h2 className="price">₹5000</h2>
        <ul className="features">
          <li>✓No of photos-150</li>
          <li>✓No of videos-10</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
        </ul>
        <NavLink to={'/book'}><button className="btn">Book Now</button></NavLink>
      </div>

      <div className="pricing-card">
        <h3 className="plan-title">Engagement</h3>
        <h2 className="price">₹5000</h2>
        <ul className="features">
          <li>✓No of photos-200</li>
          <li>✓No of photos-20</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
        </ul>
        <NavLink to={'/book'}><button className="btn">Book Now</button></NavLink>
      </div>
      <div className="pricing-card">
        <h3 className="plan-title">Wedding</h3>
        <h2 className="price">₹8000</h2>
        <ul className="features">
          <li>✓No of photos-250</li>
          <li>✓No of photos-50</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
          <li>✓No of photos-150</li>
        </ul>
        <NavLink to={'/book'}><button className="btn">Book Now</button></NavLink>
      </div>
    </div>
  </div>
  </>
)
}

export default Services