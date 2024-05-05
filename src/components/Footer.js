import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import React from 'react';

export const Footer = () => {
    return (
        <>
            <Fade top>
                <center>
                    <div className="background-main">  
                        <h1>คาเฟ่ตกแต่งแบบเรียบง่ายสไตล์ญี่ปุ่น <br />
                            ให้บริการทั้งไอศกรีมโฮมเมด, <br />
                            เบเกอรี่, เครื่องดื่ม <br />
                            และอาหารจานเดียว <br />
                            ร้านมีทั้งส่วน indoor และ outdoor <br />
                            แบบสวนญี่ปุ่น มีมุมน้ำตกเล็กๆ <br /></h1>
                    </div>
                </center>
                <button className="hero__button">Order Now</button>
            </Fade>
            <div className="footer-background">
                <div className="base__container">
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
                    </div>
                    <div className="footer__img">
                        <div className="hero-cover">
                            <img src="./media/Footer.png" alt="Sapari">
                            </img>
                        </div>
                    </div>
                    <center>
                        <div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.121982554368!2d99.03952063947891!3d18.837243259498408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da258b16c69ee9%3A0xeb918330c7c7ccc8!2sCivilize%20Clinic!5e0!3m2!1sth!2sth!4v1703909435853!5m2!1sth!2sth" width="600" height="500" title="Civilize Clinic Google Map"></iframe>
                        </div>
                    </center>
                    <center>
                        <Link to='/contact' ><button>contact us</button></Link>
                    </center>
                </div>
            </div>
        </>
    )
}
