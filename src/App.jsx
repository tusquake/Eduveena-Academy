import React, { useState } from 'react'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials'
import Title from './components/Title/Title'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Courses' title='What we Offer'></Title>
      <Programs></Programs>
      <Title subTitle='About Us' title='Our Faculty'></Title>
      <About setPlayState={setPlayState}></About>
      <Title subTitle='Gallery' title='Centre Photos'></Title>
      <Campus></Campus>
      <Title subTitle='TESTIMONIALS' title='What Student Says'></Title>
      <Testimonials></Testimonials>
      <Title subTitle='Contact Us' title='Get in Touch'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App
