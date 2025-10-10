import React, { useState } from 'react'
import './booking.css'
import { useNavigate } from 'react-router-dom'
const Booking = () => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [mail,setMail] = useState('')
    const [city,setCity] = useState('')
    const [place,setPlace] = useState('')
    const [date,setDate] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();

        localStorage.setItem("Name",name);
        localStorage.setItem("Phone",phone);
        localStorage.setItem("Mail",mail);
        localStorage.setItem("City",city);
        localStorage.setItem("Place",place);
        localStorage.setItem("Date",date);

        alert("submit Success")
        navigate('/dis')
        
        setName('')
        setPhone('')
        setMail('')
        setCity('')
        setPlace('')
        setDate('')
    }
  return (
    <div className="back">
      <div className='booking'>
        <h1>Book Your Event</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' placeholder='Enter Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor="">Phone:</label>
            <input type="text" name='phone' placeholder='Enter Your Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
            <label htmlFor="">Mail:</label>
            <input type="text" name='mail' placeholder='Enter Your Email' value={mail} onChange={(e)=>{setMail(e.target.value)}} />
            <label htmlFor="">City:</label>
            <input type="text" name='city' placeholder='Enter Your City' value={city} onChange={(e)=>{setCity(e.target.value)}} />
            <label htmlFor="">Place:</label>
            <input type="text" name='place' placeholder='Enter Your Place' value={place} onChange={(e)=>{setPlace(e.target.value)}} />
            <label htmlFor="">Date:</label>
            <input type="date" name='date' placeholder='Enter Event Date' value={date} onChange={(e)=>{setDate(e.target.value)}} />
            <button type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Booking