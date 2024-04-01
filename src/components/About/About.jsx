import React from 'react'
import about_img from '../../assets/about.png'
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
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda nesciunt est reprehenderit, commodi odio nemo vitae error, a deserunt suscipit, sed autem hic dolorum vel consectetur. Illum saepe, molestias debitis at neque accusamus placeat sapiente corporis quam voluptate, deserunt veniam? Libero autem commodi praesentium, obcaecati a consequuntur. Assumenda, reprehenderit?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda nesciunt est reprehenderit, commodi odio nemo vitae error, a deserunt suscipit, sed autem hic dolorum vel consectetur. Illum saepe, molestias debitis at neque accusamus placeat sapiente corporis quam voluptate, deserunt veniam? Libero autem commodi praesentium, obcaecati a consequuntur. Assumenda, reprehenderit?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda nesciunt est reprehenderit, commodi odio nemo vitae error, a deserunt suscipit, sed autem hic dolorum vel consectetur. Illum saepe, molestias debitis at neque accusamus placeat sapiente corporis quam voluptate, deserunt veniam? Libero autem commodi praesentium, obcaecati a consequuntur. Assumenda, reprehenderit?</p>
      </div>
    </div>
  )
}

export default About
