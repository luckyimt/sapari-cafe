import '../form.css'
import emailjs from '@emailjs/browser';
import React ,{useRef} from 'react'

const Order = (props) => {
    const form = useRef();
    const { cartItems } = props;

    const sendEmail = (e) => {
        e.preventDefault();
    cartItems.map((item)=>( emailjs.sendForm('service_odjunrm', 'template_xgmtiw7', form.current ,
                'XF3fYsjaKmD_fGf9o')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })))
            // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
           
    };

    return (
        <>
                {/* <strong>${totalPrice.toFixed(2)}</strong> */}

            <center>
            {cartItems.map((item) => (
            <div key= {item.id} >
                    <form ref= {form} onSubmit={sendEmail} className="order__form">
                    <div className="products__img">
                     <img src= {item.imageUrl} alt="Sapari" className="products__img"></img>  </div>
                        <input
                            id= {item.id}
                            type= "text"
                            name= "item-name"
                            value= {item.title}
                        />
                         <input
                            id={item.id}
                            type= "text"
                            name= "amount"
                            value= {item.qty}
                        />
                         <input
                            id= {item.id}
                            type= "text"
                            name= "totalPrice"
                            value= {item.price * item.qty}
                        />
                         <center>
                            <button type="submit" > take order </button>
                        </center> 
                    </form>     
                </div>
                  ))}
      </center>

        </>
  )

}

export default Order