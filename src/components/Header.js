import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Header (props) {
    return (
        <>    
        <Helmet>
       <title>ร้านไอศรีมโฮมเมดเชียงใหม่</title>
       <meta name='description' content='ไอศรีมโฮมเมด ร้านชิวๆสไตล์บ้านญี่ปุ่น มีสวนน้ำตกเล็กๆน่ารักสำหรับถ่ายรูปสวยๆ' />
       <link rel='canonical' href='https://sapari-cafe-de9df.web.app' />
        </Helmet>
            <header className="header" id = "header">
                    <nav className="nav">
                    <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link active__link">Sappari</Link>
                            </li>
                            <li className="nav__item">
                                <Link to ="/cart" className="nav__link active__link">Cart{''}{props.countCartItems ? (
                            <button className="badge">{props.countCartItems}</button>
                                ) : (''
                                )}
                            </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/contact" className="nav__link active__link">Contact</Link>
                            </li>
                    </ul>
                </nav>    
            </header>
        </>
    )
}
export default Header