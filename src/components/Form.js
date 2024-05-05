import React ,{useRef} from 'react'
import '../form.css'
import emailjs from '@emailjs/browser';



function Form() {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
      // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
    emailjs.sendForm('service_odjunrm', 'template_xgmtiw7', form.current,
    'XF3fYsjaKmD_fGf9o')
    .then((result) => {
    console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    };
  return (
    <section id="contacts">

      <div className="footer__img">
          <div className="hero-cover">
        <img src = "./media/Footer.png" alt = "Sapari">
          </img>
            </div>
            </div>
      <center>
      <div className="background-main">
            <h1>
            คาเฟ่ตกแต่งแบบเรียบง่ายสไตล์ญี่ปุ่น <br />
            ให้บริการทั้งไอศกรีมโฮมเมด, <br/>
            เบเกอรี่, เครื่องดื่ม <br/>
            และอาหารจานเดียว <br/>
            ร้านมีทั้งส่วน indoor และ outdoor <br/>
            แบบสวนญี่ปุ่น มีมุมน้ำตกเล็กๆ <br />
          </h1>
          
        </div>
        </center>
  
      <center>
        <div className="lower-sections">
          <form ref={form} onSubmit={sendEmail} className="form-div">
            <input
              id="email address"
              type="email"
              name="from_email"
              placeholder="Your email address to get our message."
            
            />
            <br></br>
            <label htmlFor="name"></label>
            <br></br>
            <input
              id="name"
              type="text"
              name="from_name"
              placeholder="Tell us your name."
            />
            <br></br>
            <label htmlFor="message"></label>
            <br>
            </br>
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Leave your message here, we will get back to you."
            />
            <br />
            <br />
            <center>
              <button type="submit" >ส่งจดหมาย</button>
            </center>
        
          </form>
          </div>
      </center>
      <div className="background-main">
            <h1>CONTACT</h1>
              <h2>address</h2>
              <p>Sappari Chiangmai 77 แม่ขัวมุง 
                ช้างเผือก เมืองเชียงใหม่ เชียงใหม่</p>
              <h2>call us</h2>
              <p>0839879688</p>
              <h2>Email us</h2>
              <p></p>
              <h2>Social Media</h2>
              </div>
          <div className="background-main">
            <h2>Feel free to contact us anytime. We will get back to you as soon as we can!</h2>
        <br></br>
        </div>
      
    </section>
    
  )
}
export default Form