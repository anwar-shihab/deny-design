import React, { Component } from 'react';

import Navbar from './Navbar'
import "../Styles/Signup.css"


class Signup extends Component {
    render() {
      return (
  
        <div className="container-fluid">
         <Navbar/>
  
          <div className="row pt-5">
            <div className="col-lg-3 offset-lg-8 offset-md-8 req mt-4"><label>*</label>indicates a required field</div>
          </div>
  
          <form>
            <div className="form-group row justify-content-end">
              <div class="col-lg-4">
                <label for="first name" className="required-field">FIRST NAME</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="last name" className="required-field">LAST NAME</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row  justify-content-end">
              <div class="col-lg-offset-4 col-lg-4">
                <label for="phone" className="required-field">PHONE</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="mobile" className="required-field">MOBILE PHONE</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row  justify-content-center">
              <div class="col-lg-4">
                <label for="email" className="required-field">EMAIL</label>
                <input class="form-control" />
              </div>
            </div>
          </form>
          <div className="row">
          <div className="brdr col-lg-8 offset-lg-4 "></div>
          </div>
          <form>
            <div className="form-group company row  justify-content-end form-start">
              <div class="col-lg-4 col-lg-offset-4">
                <label for="company name" className="required-field">COMPANY NAME</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="company website" className="required-field">COMPANY WEBSITE</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div class="col-lg-offset-4 col-lg-4">
                <label for="company address" className="required-field">COMPANY ADDRESS</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="address2" className="required-field">ADDRESS 2</label>
                <input class="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div class="col-lg-offset-4 col-lg-4">
                <label for="city" className="required-field">CITY</label>
                <input class="form-control" />
              </div>
              <div class="col-lg-4">
                <label for="state" className="required-field">STATE</label>
                <input class="form-control" />
              </div>
            </div>
          </form>
  
        </div>
      );
    }
  }
  
  export default Signup;
