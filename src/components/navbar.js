import React from 'react';
import { Link } from 'react-router-dom';


function Navbar () {


    return (
        <div className="cd-slider-nav">
            <nav className="navbar">
                <div className="tm-navbar-bg" style={{fontSize:'12px', height: '60px', overflow:'hidden', color: 'white'}}>

                    <a className="navbar-brand" href="#"><img src="assets/planet.png" style={{height: '45px'}} /><p style={{fontFamily: 'Big Shoulders Display', color: '#3f97c9'}}>BluePlanet</p></a>

                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                      &#9776;
                    </button>
                    <div className="collapse navbar-toggleable-md text-xs-center tm-navbar" id="tmNavbar">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#0" data-no="1">Multi One <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0" data-no="2">Multi Two</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/search" className="nav-link"> Discover New Podcasts </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link"> Log in </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link bg-success"> Sign up free </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;
