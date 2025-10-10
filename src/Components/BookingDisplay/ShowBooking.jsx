import React, { useEffect, useState } from 'react'
import './display.css'
const ShowBooking = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [mail,setMail] = useState('')
    const [city,setCity] = useState('')
    const [place,setPlace] = useState('')
    const [date,setDate] = useState('')
    
    useEffect(()=>{
        const GetName = localStorage.getItem("Name")
        if (GetName) {
        setName(GetName)}
        const GetPhone = localStorage.getItem("Phone")
        if (GetPhone) {
        setPhone(GetPhone)}
        const GetMail = localStorage.getItem("Mail")
        if (GetMail) {
        setMail(GetMail)}
        const GetCity = localStorage.getItem("City")
        if (GetCity) {
        setCity(GetCity)}
        const GetPlace = localStorage.getItem("Place")
        if (GetPlace) {
        setPlace(GetPlace)}
        const GetDate = localStorage.getItem("Date")
        if (GetDate) {
        setDate(GetDate)}

    },[])
    return (
    // <div>
    //         {name ? (<p>{name}</p>):(<p>No Name found on storage</p>)}
    //         {phone ? (<p>{phone}</p>):(<p>No phone found on storage</p>)}
    //         {mail ? (<p>{mail}</p>):(<p>No mail found on storage</p>)}
    //         {city ? (<p>{city}</p>):(<p>No city found on storage</p>)}
    //         {place ? (<p>{place}</p>):(<p>No place found on storage</p>)}
    //         {date ? (<p>{date}</p>):(<p>No date found on storage</p>)}
    // </div>
        <div className="result-container">
      <div className="result-card">
        <h1>🎉 Your Booking is Confirmed!</h1>
        <h2>
          Thank you for choosing <span className="brand">Ciniframes</span>
        </h2>

        {name && place && date ? (
          <div className="summary-card">
            <p>
              Hey <strong>{name}</strong>, your booking has been successfully
              confirmed! 🎬 Your event will take place at <strong>{place}</strong> in{" "}
              <strong>{city}</strong> on <strong>{date}</strong>.  
              We’ll reach out to you shortly at <strong>{mail}</strong> or{" "}
              <strong>{phone}</strong> with more details.
            </p>
          </div>
        ) : (
          <div className="summary-card">
            <p>⚠️ No booking details found in storage. Please return to the booking page.</p>
          </div>
        )}

        <p className="thanks">
          We appreciate your trust in <span className="brand">Ciniframes</span> —  
          where every frame tells your story. 🎥✨
        </p>

        <button className="home-btn" onClick={() => (window.location.href = "/")}>
          Back to Home
        </button>
      </div>
    </div>

  )
}

export default ShowBooking