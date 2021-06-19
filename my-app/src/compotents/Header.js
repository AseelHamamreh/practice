import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import headerImage from './images/headerImage.jpg';
import './Header.css';
export class Header extends Component {
  render() {
    return (
      <div >
        <Navbar style={{backgroundColor:'rgba(0,0,0,0.3)', paddingTop:'0px',position: 'fixed',top: '0' ,width: '100%'}} >
          <img style={{width:'180px', paddingRight:'10px', paddingTop:'5px'}} src ={logo} alt=''/>
          <Navbar.Brand id='name'style={{paddingRight:'700px'}} href="/">BeautiFly</Navbar.Brand>
          <Nav style={{color:'black!important'}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar>
        <div id='headerH'>
          <img style={{width:'100%', height:'650px'}} src={headerImage} alt=''/>
          <h1>“If you’re sad, add more lipstick and attack.”</h1>
        </div>
      </div>
    );
  }
}

export default Header;
