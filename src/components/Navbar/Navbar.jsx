import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo1.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {

    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}><img src={logo} alt="Logo Image" className='logo'/></Link>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Courses</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Our Centre</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Student Reviews</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
