import React, { useRef } from 'react'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import './Testimonials.css'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx> -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if(tx< 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'  onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempore! Illum, alias? Vel distinctio cum possimus modi provident magni soluta quos, eum minus, necessitatibus officia? Nisi earum quis sed error. Quos minima corporis voluptatibus nisi labore enim vero omnis voluptate consequatur impedit in deserunt distinctio, neque iste autem at iusto!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity, USA</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempore! Illum, alias? Vel distinctio cum possimus modi provident magni soluta quos, eum minus, necessitatibus officia? Nisi earum quis sed error. Quos minima corporis voluptatibus nisi labore enim vero omnis voluptate consequatur impedit in deserunt distinctio, neque iste autem at iusto!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Ben Stokes</h3>
                                <span>Edusity, USA</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempore! Illum, alias? Vel distinctio cum possimus modi provident magni soluta quos, eum minus, necessitatibus officia? Nisi earum quis sed error. Quos minima corporis voluptatibus nisi labore enim vero omnis voluptate consequatur impedit in deserunt distinctio, neque iste autem at iusto!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Philip Salt</h3>
                                <span>Edusity, USA</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempore! Illum, alias? Vel distinctio cum possimus modi provident magni soluta quos, eum minus, necessitatibus officia? Nisi earum quis sed error. Quos minima corporis voluptatibus nisi labore enim vero omnis voluptate consequatur impedit in deserunt distinctio, neque iste autem at iusto!</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
