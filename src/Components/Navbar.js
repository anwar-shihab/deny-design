import React, { Component } from 'react';

import '../Styles/Navbar.css'



export default class Navbar extends Component {

    render() {
        return (
            <div class="row top-container">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <a href='./'>
                            <img className="navbar-brand logo" src="https://cdn.shopify.com/s/files/1/0068/2302/t/185/assets/deny_designs_logo.svg?v=2968452402992386186" alt="logo">
                            </img>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                        <div class="collapse navbar-collapse" id="navbarColor02">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item "><a className="nav-link" href="/page2">PRODUCTS</a></li>
                                <li class="nav-item"> <a className="nav-link" href="/page3">PRODUCT</a> </li>
                                <li class="nav-item"> <a className="nav-link" href="/page4">SIGN-UP</a></li>
                                <li class="nav-item"> <a className=" nav-link" href="/page5">SIGN-IN</a></li>
                            </ul>
                            <img className="icon-profile" src="../images/blk_search_icon.svg"></img>
                            <img className="icon-profile" src="../images/blk_person_icon.svg"></img>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}