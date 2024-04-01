import React from 'react'
import about_img from '../../assets/about-img.jpg'
import play_icon from '../../assets/play-icon.png'
import './About.css'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h2>Aashutosh Mishra (Ashu)</h2>
        <p>With over a decade of teaching experience, I specialize in guiding school students through their academic journey, ensuring comprehensive understanding and growth.
As an experienced tutor for BCom students, I bring a wealth of knowledge and real-world insights to enhance their learning and prepare them for professional success.</p>
        <h3>Our Motto</h3>
        <br />
        <p><b>1.Doubt-clearing Sessions : </b>"Dive into clarity with our doubt-clearing classes, where questions find answers and understanding prevails."</p>
        <p><b>2.Individual Attention : </b>"Experience personalized learning and tailored guidance with our focus on individual attention in classes."</p>
        <p><b>3.Weekly Test : </b>"Sharpen your skills and track your progress with our weekly tests, paving the way for continuous improvement."</p>
        <p><b>4.Best Faculty : </b>"Learn from the best minds in the industry with our exceptional faculty, dedicated to nurturing your potential."</p>
      </div>
    </div>
  )
}

export default About
