import React, { Component } from "react";
import { MenuItems } from "./MenuItem";
import Logo from "../assets/cheshireLogo.png";
import "./header.css";


class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
        <>
        <div className="topHeader">
        <p>01606 88223 events@cheshire-outdoors.info</p>
    </div>
      <nav className="NavbarItems">
       
        <h1 className="navbar-logo">
          <img src={Logo} alt="logo" width="70px" />
        </h1>
        <p className="headerIcon">
          <i className="fas fa-phone"></i>
        </p>
        <p className="headerIcon">
          <i className="fas fa-envelope"></i>
        </p>
        <p className="headerIcon">
          <i className="fas fa-shopping-bag"></i>
        </p>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
  
                <li key={index}>
                    <a className={item.cName} href={item.url}>
                    {item.title }
                    
                    </a>
                    
                </li>
                 
            
            )
            
        })}
           

        </ul>
        <p className="basket"><i className="fas fa-shopping-bag"></i>Basket</p>
        <button className="bookbtn">BOOK NOW</button>
      </nav>
      </>
    );
  }
}

export default Header;
