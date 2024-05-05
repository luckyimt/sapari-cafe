// import {Fade} from 'react-reveal'
import data from '../json/data';
import { useState } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
function Hero(props) {
  const { onAdd } = props;
  const [filter , setFilter] = useState('main-menu');
  return (
      
    <section>
       <Helmet>
       <title>ร้านไอศรีมโฮมเมดเชียงใหม่</title>
       <meta name='description' content='ไอศรีมโฮมเมด ร้านชิวๆสไตล์บ้านญี่ปุ่น มีสวนน้ำตกเล็กๆน่ารักสำหรับถ่ายรูปสวยๆ' />
       <link rel='canonical' href='https://sapari-cafe-de9df.web.app' />
      </Helmet>
      
        <div className="hero-cover">
        <img src = "./media/Cover.png" width="400" height="400" alt = "Sapari">
          </img>
        </div>
        <div className="special__container">
          <div className="special__title">
            <h1>ร้านไอศรีมในเชียงใหม่</h1>
            <p>ร้านเล็กๆ บรรยากาศฟีลญี่ปุ๊นญี่ปุ่น เรียบง่ายและสงบ ตั้งอยู่ในชุมชนช่างเคี่ยน จุดเด่นของร้านคือไอศครีมเจลาโต้โฮมเมด ที่ใช้วัตถุดิบตามฤดูกาลจากเกษตรกรในท้องถิ่น เช่น สตอเบอรี่ กระท้อน นำเสริฟแบบตกแต่งรูปสัตว์น่ารัก แต่มื้อเที่ยงนี้มาชิมอาหารกัน สั่งข้าวแกงกะหรี่หมู+กุ้ง (159 บาท) จานใหญ่จานโตมาก ว่าตัวเองกินเก่งแล้วนะ...ก็ยังจุก อีกเมนูข้าวหน้าสเต็กหมูคุโรบูตะ (159 บาท) หมูนุ่มหมักซอสหอมๆ เครื่องดื่มเข้าธีมสั่ง มัทฉะน้ำผึ้งมะนาวยูสุ (79 บาท) และ คาปูชิโน่เย็น สดชื่นดีงาม</p>
            </div>
            <div className="hero-cover">
            <img src="./media/itim.jpg" width="400" height="400" alt="" className="special__img">
              </img>
            </div>
          </div>

        
          <div className="hero-cover">
        <img src = "./media/Body.jpg" width="400" height="400" alt = "Sapari">
          </img>
        </div>


        <div className="special__box">

       

          <div className="special__body">
            <br/><br/>
            <h2>Sappari Cafe</h2><br/>
        <p>สัป ปะ หริ เป็นร้านคาเฟ่ที่ตกแต่งสไตล์ญี่ปุ่นน่ารักกรุบกริบ เมนูของที่ร้านมีทั้งอาหารญี่ปุ่นนิดหน่อย เครื่องดื่ม ขนมแบบโฮมเมด และไอศครีมโฮมเมดด้วยค่ะ ใครคิดถึงประเทศญี่ปุ่นลองมาถ่ายรูปเล่นที่นี่ไปก่อนก็พอให้ได้หายคิดถึงอยู่ค่ะ </p>
        </div>
        <center><img src="./media/logo.jpg" alt="" width="400" height="400" className="special__logo">
              </img></center>
          </div>
        

          <div className="products__container">
          <Fade Left delay={500}>
            <h3 className="products__title">
              Shop
            </h3>
          </Fade>
          <ul className="products__filters"> 
            <li
              className={`products__item  ${filter === 'main-menu' && 'active-product'}`}
              onClick={() => setFilter('main-menu')}
              data-filter=".delicacies"
            >
              <h4 className="products__title">Ice Creams</h4>
            </li>
            <li className={`products__item  ${filter === 'view' && 'active-product'}`}
                    onClick={() => setFilter('view')}
                    data-filter=".view">
              <h4 className="products__title">Desserts</h4>
            </li>
            <li className={`products__item ${filter === 'view2' && 'active-product'}`}
                  onClick={() => setFilter('view2')}
                    data-filter=".view">
              <h4 className="products__title">Drinks</h4>
            </li>
          </ul>
          <div className="products__content grid">
            {data.categories.map((category, index) => {
              return (
                category.category === filter && 
                  <Fade key={index} bottom delay={100 * index}>
                    <article className="products__card main-menu">

                      <img
                        src={category.imageUrl}
                        alt=""
                        className="products__img"
                      />
                    <div className="products__data">
                      <h5 className="products__price">{category.price}</h5>
                      <h5 className="products__name">{category.title}</h5>
                    </div>
                    <div>
                      <center>
                      <button onClick={() => onAdd(category)}>add</button></center>
                  </div>
                  </article>
                  </Fade>
              )
            })}
          </div>
         
          <center> 
            <div className="background-main">
                        <h2>
                            คาเฟ่ตกแต่งแบบเรียบง่ายสไตล์ญี่ปุ่น <br />
                            ให้บริการทั้งไอศกรีมโฮมเมด, <br />
                            เบเกอรี่, เครื่องดื่ม <br />
                            และอาหารจานเดียว <br />
                            ร้านมีทั้งส่วน indoor และ outdoor <br />
                            แบบสวนญี่ปุ่น มีมุมน้ำตกเล็กๆ <br />
              </h2>
              </div>
          </center> 
          <div className="footer-background">
            <div className="base__container">
          <div className="background-main">
            <h3>CONTACT</h3>
              <h2>address</h2>
              <p>Sappari Chiangmai 77 แม่ขัวมุง 
                ช้างเผือก เมืองเชียงใหม่ เชียงใหม่</p>
              <h3>call us</h3>
              <p>0839879688</p>
              <h3>Email us</h3>
              <p></p>
              <h4>Social Media</h4>
              </div>
          <div className="background-main">
            <h3>Feel free to contact us anytime. We will get back to you as soon as we can!</h3>
            <br></br>
            <center>
              <Link to='/contact' ><button>contact us</button>
                </Link>
            </center></div>
            <div className="footer__img">
          <div className="hero-cover">
        <img src = "./media/Footer.png" alt = "Sapari">
          </img>
            </div>
            </div>
          </div>
        </div>
        </div>
        </section>
    )
}
export default Hero