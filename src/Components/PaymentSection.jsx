import React from 'react';
import Visa from '../assets/visa.png';
import Paypal from '../assets/paypal.png'
import SagePay from '../assets/sagepay.png'
import MasterCard from '../assets/mastercard.png'
import './PaymentSection.css'
const PaymentSection = () => {
    return (
        <>
    <div className="paymentSection">
    <div className="paymentContainer">
        <img src={Visa} alt="visa" height="50px"/>
        <img src={Paypal} alt="paypal" height="50px"/>
        <img src={SagePay} alt="paypal" height="50px"/>
        <img src={MasterCard} alt="paypal"  height="50px"/>
        <h4 className="paymentAddress">Cheshire Falconry Centre</h4>
        <p className="paymentAddress">Blakemere Village,Chester Road, Sandiway,Northwich, Cheshire, CW8 2EB</p>
        <h4 className="paymentAddress">01606 882223  events@cheshire-outdoors.info</h4>
        <h4 className="paymentAddress">events@cheshire-outdoors.info</h4>
    </div>
 
    </div>
</>
      );
}
 
export default PaymentSection;