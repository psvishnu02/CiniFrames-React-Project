import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <div className="footer" id="ftr">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Enquery</a></li>
  	 				<li><a href="#">Feedback</a></li>
  	 				<li><a href="#">Booking Status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
        <div className="footer-col">
  	 			<h4>contact us</h4>
  	 			<ul className="contact-info">
  	 				<li><a href="tel:+0498 2556897"><span style={{color:'azure'}}>phone:</span> +0498 2556897</a></li>
  	 				<li><a href="tel:9023556789"><span style={{color:'azure'}}>Mobile:</span>9023556789</a></li>
  	 				<li><a href="mailto:ciniframes@gmail.com"><span style={{color:'azure'}}>Email:</span>ciniframes@gmail.com</a></li>
  	 			</ul>
  	 		</div>       
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-x-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 				<a href="#"><i className="fa-brands fa-youtube"></i></a>
  	 				<a href="#"><i className="fa-brands fa-reddit"></i></a>
  	 			</div>
  	 		</div>
        <div className="footer-col">
  	 			<h4>Branches</h4>
  	 			<ul className="branches">
  	 				<li>2nd Floor XP-Plazza,Chevayoor,Calicut</li>
  	 				<li>RP Arcade,Kalpatta,Wayanad</li>
  	 				<li>Sundaram arcade,Kondotti,Malappuram</li>
  	 			</ul>
  	 		</div> 
  	 	</div>
      <div className="footer-bottom">
        <p>All rights reserved by &copy;CiniFrames@2025</p>
      </div>
  	 </div>
  </div>
    )
}

export default Footer