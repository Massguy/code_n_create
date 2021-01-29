import React from "react";
import HomeImg from "../assets/cheshireHome.png";
import Button from "./Button";
import cheshireBushcroft from "../assets/cheshireBushcroft.png";
import cheshireSegway from "../assets/cheshireSegway.png";
import wedding from "../assets/wedding.png";
import cheshireWedding from "../assets/cheshireweddinglogo.png";
import "./HomePage.css";
import YoutubeVideo from "./YoutubeVideo";
import Visa from '../assets/visa.png';
import Paypal from '../assets/paypal.png'
import SagePay from '../assets/sagepay.png'
import MasterCard from '../assets/mastercard.png'

const HomePage = () => {
  return (
    <div>
    <div className="container">
      <img src={HomeImg} alt="HomeImage" className="HomeImg" />
      <div className="HomepageContainer">
        <div className="firstButton">
          <Button label="BUY TICKETS" />
        </div>
      </div>
      <div className="firstPara">
        <h1>LETS GO OUTSIDE</h1>
        <p>
          At Cheshire Outdoors we can’t get enough of the fresh air! So whether
          you’re looking for the thrill of a woodland glide on our Segway
          experience, testing your skill with archery and laser clay shooting or
          being amazed as you get hands-on and try birds of prey in a falconry
          encounter! We’ve got lots of adventures and activities all designed
          for small groups, families, schools, hen or stag parties or corporate
          away days. Get outside this year and get some fresh air and adventure.
        </p>
        <div className="secondButton">
          <Button label="READ MORE" />
        </div>
      </div>
      <div className="wrapper">
        <div className="vid">
      <YoutubeVideo />
      </div>
      <div className="cheshireAds">
        <img src={cheshireBushcroft} alt="cheshireBushcroft" width="100%"  className="cheshireAd1" />
        </div>
        <div className="cheshireAd2">
        <img
          src={cheshireSegway}
          alt="cheshireSegway"
          width="100%"
          style={{ marginTop: "70px", marginBottom: "50px" }}
        />
      </div>
      <div className="weddingContainer">
        <img src={wedding} alt="wedding" width="100%" className="wedding" />
        <img
          src={cheshireWedding}
          alt="cheshire"
          width="80%"
          className="cheshireWedding"
        />
        <div className="thirdButton">
          <Button label="Visit Website" />
        </div>
      </div>
      <div className="paymentSection">
    <div className="paymentContainer">
   
        <img src={Visa} alt="visa" height="30px" style={{marginTop:"100px"}}/>
        <img src={Paypal} alt="paypal" height="30px" style={{marginTop:"100px"}}/>
        <img src={SagePay} alt="paypal" height="30px" style={{marginTop:"100px"}}/>
        <img src={MasterCard} alt="paypal"  height="30px" style={{marginTop:"100px"}}/>

        <div className="address">
        <h4 className="paymentAddress">Cheshire Falconry Centre</h4>
        <p className="paymentAddress">Blakemere Village,Chester Road, Sandiway,Northwich, Cheshire, CW8 2EB</p>
        <h4 className="paymentAddress">01606 882223  events@cheshire-outdoors.info</h4>
        
        </div>
    </div>
 
    </div>
 
      </div>
      </div>
      <div className="footerContainer">
        <div className="footer">
        
          <h5>Terms & Conditions </h5>
          <h5>Privacy Policy</h5>
          <h5>Sitemap </h5>
          <h5>Secure Payment</h5>
          
          <h6>Registered in England and Wales: No 08881823</h6>
          <h6>Copyright Cheshire Bushcraft ltd © 2020</h6>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;
