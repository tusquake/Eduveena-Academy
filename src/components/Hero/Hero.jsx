import React from 'react'
import { Link } from 'react-scroll'
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our innovative curriculum is crafted to equip students with the knowledge, skills, and practical experience required to thrive in the ever-evolving realm of education.</p>
        <Link to='programs' smooth={true} offset={-260} duration={500}><button className='btn'>Explore more<img src={dark_arrow} alt="" /></button></Link>
      </div>
    </div>
  )
}

export default Hero
