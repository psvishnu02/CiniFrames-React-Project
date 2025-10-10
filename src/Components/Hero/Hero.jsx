import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'
import { Link } from 'react-router-dom'
const Hero = ({heroData,hCount,setHcount,VdoStat,setVdoStat}) => {
  return (
    <div className='hero'>
      <div className="hero-txt">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Schedule with us</p>
        <Link to={'ser'}><img src={arrow_btn} alt="arrowbtn" /></Link>
      </div>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={()=>setHcount(0)} className={hCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHcount(1)} className={hCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHcount(2)} className={hCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
      <div className="hero-play">
        <img onClick={()=>setVdoStat(!VdoStat)} src={VdoStat?pause_icon:play_icon} alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Hero