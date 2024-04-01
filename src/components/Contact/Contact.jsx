import React from 'react'
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
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius recusandae sint sed? Labore assumenda vel nihil velit tenetur, at, placeat voluptatibus doloribus, rerum dolor doloremque porro cupiditate delectus error non. Quod reiciendis ex expedita modi nesciunt saepe necessitatibus pariatur tenetur voluptatem aperiam? Quidem quia rem dolorum consequatur explicabo, adipisci sapiente!</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@gGreatStack.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/> mA 02139, United States</li>
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
