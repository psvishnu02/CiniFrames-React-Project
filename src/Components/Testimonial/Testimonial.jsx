import React, { useEffect, useState } from 'react'
import './testimonial.css'
import axios from 'axios'
const Testimonial = () => {
    const [data,setData] = useState([])
    const [index,setIndex] = useState(0)

    const fetchTest = async () => {
        try {
            const response = await axios.get("./Testimonial.json")
            setData(response.data)
        } catch (error) {
            console.log("err");
            
        }
    }
useEffect(()=>{
    fetchTest()
})

const nextText = ()=>{
    setIndex((nxt)=>(nxt + 1) % data.length)
}
const prevText = ()=>{
    setIndex((nxt)=> nxt === 0 ? data.length - 1 : nxt - 1)
}
  // Auto-switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextText();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [data.length]);

  return (
    <div className='testimonial-section'>

      <div className="blank"></div>

      {data.map((test, i) =>
        i === index ? (
          <div className="testimonial-content" key={i}>
                  <h2 className="testimonial-heading">What Our Customers Says</h2>
            <div className="quote-icon">“</div>
            <p className="testimonial-text">{test.text}</p>

            <div className="testimonial-user">
              <img src={test.image} alt={test.name} className="user-image" />
              <div>
                <h3 className="user-name">{test.name}</h3>
                <p className="user-title">{test.place}</p>
              </div>
            </div>

            <div className="testimonial-nav">
              <button className="nav-btn" onClick={prevText}>
                ←
              </button>
              <span>
                {index + 1} / {data.length}
              </span>
              <button className="nav-btn" onClick={nextText}>
                →
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}

export default Testimonial