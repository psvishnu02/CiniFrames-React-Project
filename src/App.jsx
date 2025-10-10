import React from 'react'
import { useState } from 'react'
import Background from './Components/Background/Background'
import Nav from './Components/Navbar/Nav'
import Hero from './Components/Hero/Hero'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Whyto from './Components/ChooseUs/Whyto'
import Testimonial from './Components/Testimonial/Testimonial'
import Display from './Components/Display'
import Services from './Components/OurServices/Services'
import Booking from './Components/BookingForm/Booking'
import ShowBooking from './Components/BookingDisplay/ShowBooking'
 
const App = () => {
  let heroData = [
    {text1:"Let’s capture",text2:"your love story"},
    {text1:"Your love",text2:"our lens"},
    {text1:"Turn moments",text2:"into memories"},
  ]
  const  [hCount,setHcount] = useState(1)
  const [VdoStat,setVdoStat] = useState(false)
useEffect(() => {
  const interval = setInterval(() => {
    setHcount((count) => (count === 2 ? 0 : count + 1));
  }, 5000);

  return () => clearInterval(interval); // cleanup on unmount
}, []);

  return (
    <div>
      <BrowserRouter>
         <Nav/> 
      <Routes>
        <Route path='/' element={<Display/>}>
        <Route index element={<><Background hCount={hCount} VdoStat={VdoStat}/>
        <Hero heroData={heroData[hCount]} hCount={hCount} setHcount={setHcount} VdoStat={VdoStat} setVdoStat={setVdoStat}/>
        <Whyto/>
        <Testimonial/>
        <Footer/>
        </>}></Route>
        <Route path='gal' element={<Gallery/>}/>
        <Route path='abt' element={<About/>}/>
        <Route path='ser' element={<Services/>}/>
        <Route path='book' element={<Booking/>}/>
        <Route path='dis' element={<ShowBooking/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App