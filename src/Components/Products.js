import React, { Component } from 'react';
import Navbar from './Navbar'
import '../Styles/Products.css'



class Products extends Component {
  render() {
    return (
      // <Home/>

      // <Signup />

      <div className="container-fluid">
        <Navbar/>

        <div className="row pt-5">
          <div className="mt-4 col-lg-3 col-md-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/michele-payne-spring-woods-white-bg-black-rect.jpg?v=1629467880'>
            </img>
            <p className="product-name">SPRING WOODS</p>
            <label className="description">Framed Art Print<br />By Cuss Yeah Designs</label>
          </div>
          <div className="mt-4 col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/sunshinecanteen-pink-and-yellow-serape-white-bg-black-rect_large.jpg?v=1629467229'></img>
            <p className="product-name">PINK AND YELLOW SERAPE</p>

            <label className="description">Framed Art Print<br />By Sunshilnecanteen</label>
          </div>
          <div className="mt-4 col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-boogie-white-bg-black-rect_large.jpg?v=1629467208'></img>
            <p className="product-name">QOUTE SET BOOGIE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
          <div className="mt-4 col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-quote-set-sunshine-white-bg-black-rect_large.jpg?v=1629466994'></img>
            <p className="product-name">QOUTE SET SUNSHINE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6  prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/cuss-yeah-designs-multicolor-zebra-pattern-001-white-bg-black-rect_large.jpg?v=1629466157'></img>
            <p className="product-name">SPRING WOODS</p>
            <label className="description">Framed Art Print<br />By Cuss Yeah Designs</label>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/cuss-yeah-designs-multicolor-giraffe-pattern-001-white-bg-black-rect_large.jpg?v=1629387342'></img>
            <p className="product-name">PINK AND YELLOW SERAPE</p>

            <label className="description">Framed Art Print<br />By Sunshilnecanteen</label>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/sunshinecanteen-modern-checkerboard-white-bg-black-rect_large.jpg?v=1629387219'></img>
            <p className="product-name">QOUTE SET BOOGIE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 prod">
            <img className="col-lg-12" src='https://cdn.shopify.com/s/files/1/0068/2302/products/orara-studio-minimal-moon-white-bg-black-rect_large.jpg?v=1629386812'></img>
            <p className="product-name">QOUTE SET SUNSHINE</p>
            <label className="description">Framed Art Print<br />Orara Studio</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
