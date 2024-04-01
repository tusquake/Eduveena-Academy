import React from 'react'
import facebook_icon from '../../assets/facebook-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....")
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ece4475a-fb82-4203-8704-0301dda11337");
    
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setResult(res.message+"✅");
          event.target.reset();
          setTimeout(() => {
            setResult("");
          }, 3000);
        }
        else{
            console.log("Error", res);
          setResult(res.message);
        }
      };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>For any queries regarding admission or course structures, please don't hesitate to reach out. We're here to assist you every step of the way and provide clarity on all aspects of our programs.</p>
        <br />
        <p><b>Certificate No.</b>&#160;&#160; 6719</p>
        <ul>
            <li><img src={mail_icon} alt="" />Mishra1510mom@outlook.com</li>
            <li><img src={phone_icon} alt="" />91+ 9073760020/6291257874</li>
            <li><img src={location_icon} alt="" />2/59, Tanavar Colony,Kol- 74<br/> (Near 2 No. Shiv Mandir) </li>
            <li><img src={facebook_icon} alt="" /><a href="https://www.facebook.com/eduveenaacademy/" target='_blank'>Reach Us at Facebook</a></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number'/>
            <label> Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
