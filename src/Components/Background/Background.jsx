import "./Bg.css"
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
const Background = ({hCount,VdoStat}) => {
 if(VdoStat){
  return(
    <video className='bg fade-in' autoPlay loop muted>
      <source src={video1} type="video/mp4" />
    </video>
  )
 }
 else if(hCount===0){
  return <img src={image1} alt="img1" className='bg fade-in' />
 }
 else if(hCount===1){
  return <img src={image2} alt="img2" className='bg fade-in' />
 }
 else if(hCount===2){
  return <img src={image3} alt="img3" className='bg fade-in' />
 }
}

export default Background