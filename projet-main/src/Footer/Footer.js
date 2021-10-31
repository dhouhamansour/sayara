import React from "react";
import "./Footer.css";
import logo from "../images/logo-final.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Footer() {
  return (
    <Router>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <img src={logo} width="100px" />
              <h1 className="list-unstyled">
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
                <AiOutlineWhatsApp />
                {/* <li>Moscow, Russia</li>
              <li>123 Streeet South North</li> */}
              </h1>
            </div>
            {/* Column2 */}
            <div className="col">
              <h4>Company</h4>
              <ui className="list-unstyled">
                <li>
                  <Link to="/Myles">What is Myles ?</Link>
                </li>
                <li>
                  <Link to="/Offers">Offers</Link>
                </li>
                <li>
                  <Link to="/Blog">Blog</Link>
                </li>
                <li>
                  <Link to="/">Pickup Locations</Link>
                </li>
                <li>
                  <Link to="/">Site Map</Link>
                </li>
                <li>
                  <Link to="/Alliance">Alliance</Link>
                </li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>We Are Available Here</h4>
              <ui className="list-unstyled">
                <li>
                  <Link to="/Myles">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()}  Myles Automotive
              Technologies Private Limited All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Footer;
