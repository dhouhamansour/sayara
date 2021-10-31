import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import padlock from "../images/padlock.png";
import logo from "../images/sayaratn final yellow.png"


function Navb() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <img src={logo} width="150px"/>
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"> 
              <Link to="/home" style={{color:"black"}}><b>HOME</b></Link>  
              <Link to ="/OurCars"  style={{color:"black"}}><b>OUR CARS</b></Link>
              <Link to="/aboutus"  style={{color:"black"}}><b>ABOUT US</b></Link>
              <Link to="/contactus" style={{color:"black"}}><b>CONTACT US</b></Link>
             
             
             
             
              {/* <NavDropdown title="PARTNER WITH US" id="collasible-nav-dropdown"  style={{color:"black"}}>
                <NavDropdown.Item href="#action/3.1" >
                  Self Drive
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Subcription
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown> */}
            </Nav>
            <Nav>
              <img
                src={padlock}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 10,
                  marginLeft: 100,
                  color: "7B959E",
                }}
              />
              <Nav.Link href="#deets"  style={{ color:"rgb(253,197,0)"}}><b>SIGN UP / REGISTER</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navb;
