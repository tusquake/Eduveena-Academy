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
                                <h3>Riya Sharma</h3>
                                <span><b>NKPHS,Dum Dum</b></span>
                            </div>
                            <br />
                            <p>"Eduveena Academy in Kolkata has been my academic home for years, and I couldn't be happier with my experience. The faculty here is not only knowledgeable but also incredibly supportive. They go above and beyond to ensure that students like me have the resources and guidance needed to succeed. Eduveena's focus on holistic development has helped me grow not just academically but also personally. I'm grateful for the opportunities and learning experiences I've had here."</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Satyam Mishra</h3>
                                <span><b>St. Stephen,Dum Dum</b></span>
                            </div>
                                <br />
                            <p>"Being a student at Eduveena Academy in Kolkata has been a transformative journey for me. The academy's emphasis on practical learning and real-world applications has helped me develop a strong foundation in my chosen field. The faculty members are approachable and dedicated, always encouraging us to think critically and push our boundaries. I appreciate the hands-on projects and industry exposure Eduveena provides, preparing me for a successful career ahead."</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Keshav Maurya</h3>
                                <span><b>IGMHS, NagarBazar</b></span>
                            </div>
                            <br />
                            <p>"My time at Eduveena Academy in Kolkata has been nothing short of phenomenal. The academy's commitment to academic excellence and student success is truly commendable. The supportive learning environment and collaborative atmosphere have fostered a sense of community among students. I appreciate the career-oriented approach of Eduveena, which has helped me develop industry-relevant skills and connections. I'm proud to be a part of such a prestigious institution."</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Shreya Prasad</h3>
                                <span><b>Loreto Girls, Park Street</b><b></b></span>
                            </div>
                            <br />
                            <p>"Eduveena Academy in Kolkata has exceeded my expectations in every way. The academy's modern facilities and innovative teaching methods have made learning engaging and enjoyable. The faculty members are not just teachers but mentors who guide us with valuable insights and encourage us to explore our passions. Eduveena's strong focus on practical skills and experiential learning has equipped me with the confidence and knowledge to face any challenge in the future."</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
