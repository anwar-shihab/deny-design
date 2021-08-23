import React, { Component } from 'react';

import Navbar from './Navbar'
import '../images/deny_designs.svg';
import '../Styles/Home.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends Component {
  render() {
    return (
      <div class="container-fluid">
        <Navbar/>

        <div className="row">
          <div className="slideshows">
            <Carousel autoPlay="true" infiniteLoop="true" interval={"2000"} showThumbs={false} width="100%" swipeable={true}
              dynamicHeight={true} showIndicators={false}
            >
              <div>
                <img src="../images/slide-image-1-new.jpg" />
              </div>
              <div>
                <img src="../images/slide-image-2-new.jpg" />
              </div>
              <div>
                <img src="../images/slide-image-3-new.jpg" />
              </div>
            </Carousel>
          </div>
        </div>

        <div className="row footer-container">
          <div className="col-lg-3 col-sm-12">
            <label className="footer-title">COMPANY</label>
            <ul className="inner-list">
              <li>
                <a href="#shipping">Shipping</a>
              </li>
              <li>
                <a href="#Return-Policy">Return Policy</a>
              </li>
              <li>
                <a href="#work-with-us">Work With Us</a>
              </li>
              <li>
                <a href="#T&C">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-12">
            <label className="footer-title">FOLLOW US OUT THERE</label>
            <ul className="inner-list">
              <li>
                <a href="#" className="fab	fa fa-facebook-official">
                  <label href="#facebook">Facebook</label>
                </a>
              </li>
              <li>
                <a href="#twitter" className="fab fa fa-twitter"><label>Twitter</label></a>
              </li>
              <li>
                <a href="#pinterest" className="fab fa fa-pinterest"><label>Pinterest</label></a>
              </li>
              <li>
                <a href="#instagram" className="fab fa fa-instagram"><label>Instagram</label></a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-12">
            <label className="footer-title">THANK YOU</label>
            <p className='Thank-Note'>
              Thank you to the wonderful folks over at Herbivore for letting us use their beautiful imagery in this demo. Head over to their store to their full catalog of amazing products.
            </p>
          </div>
          <div className="col-lg-3 col-sm-12">
            <label className="footer-title">NEWSLETTER</label>
            <div className="footer-mail">
              <input type="mail" placeholder="your@email.com" />
              <button type="button" className="subs-button">SUBSCRIBE</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
