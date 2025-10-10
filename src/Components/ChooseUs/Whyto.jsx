import React from 'react'
import './whyto.css'

const Whyto = () => {
  return (
    <div>
  <div className="why-choose-us">
    <div className="overlay">
      <div className="content">
        <h2>Why to  Choose Us</h2>

        <div className="features">
          <div className="feature">
            <i class="fa-solid fa-user-group"></i>
            <div>
              <h3>Creative Expertise</h3>
              <p>Our team combines technical skill with artistic vision to capture moments that tell a story.</p>
            </div>
          </div>

          <div className="feature">
            <i class="fa-solid fa-face-smile"></i>
            <div>
              <h3>Customer Satisfaction</h3>
              <p>We focus on your needs from start to finish, ensuring every client leaves with a smile.</p>
            </div>
          </div>
          <div className="feature">
            <i class="fa-solid fa-wallet"></i>
            <div>
              <h3>Customized Packages</h3>
              <p>Choose from flexible plans designed to match your budget, event type, and preferences.</p>
            </div>
          </div>
          <div className="feature">
            <i class="fa-solid fa-gauge-high"></i>
            <div>
              <h3>Faster Output</h3>
              <p>We respect your time and guarantee fast, reliable delivery of your final work.</p>
            </div>
          </div>

          <div className="feature">
            <i class="fa-solid fa-mobile"></i>
            <div>
              <h3>Post-Production Excellence</h3>
              <p>Our expert editors enhance every photo and video with professional retouching and color grading.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Whyto