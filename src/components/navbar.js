import React from 'react';
import { useDispatch } from 'react-redux';
import  { searchWithSearchTerm }  from '../actions/actions';
import { Link } from 'react-router-dom';


function Navbar () {
    const dispatch = useDispatch();

    const sendSearchterm = (e) => {
        if (e.target.value.length == 0 && e.key == "Enter") {
            e.preventDefault();
        }  else if (e.key == 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log('/navbar -> sendSearchterm: ', e.target.value);
            let searchTerm = e.target.value;
            location.replace('/welcome#/search');
            dispatch(searchWithSearchTerm(searchTerm));
        }
    };

    return (
        <div className="cd-slider-nav">
            <nav className="navbar">
                <div className="tm-navbar-bg" style={{fontSize:'12px', height: '60px', overflow:'hidden', color: 'white', display:'flex'}}>

                    <a className="navbar-brand" href="/" style={{justifyContent:'flex-start'}}>
                        <img src="assets/planet.png" style={{height: '45px'}} />
                        <p style={{fontFamily: 'Big Shoulders Display', color: '#3f97c9'}}>BluePlanet</p>
                    </a>

                    <div style={{textAlign:'left', alignSelf:'center', width:'100%', maxWidth: '350px', marginLeft:'20px', marginRight:'70px', justifyContent:'center'}}>
                        <input className="input is-rounded" type="text" placeholder="Search new podcasts" style={{ minWidth: '150px', height: '30px', borderRadius: '20px', paddingLeft:'20px', color: '#777'}}
                            onKeyDown = { sendSearchterm }
                        />
                    </div>

                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                      &#9776;
                    </button>

                    <div className="collapse navbar-toggleable-md text-xs-center tm-navbar" id="tmNavbar" style={{justifyContent:'flex-end'}}>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/search" className="nav-link"> Discover New Podcasts </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0" data-no="1">Multi One <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <Link to="/favorites" className="nav-link"> My Favorites </Link>
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
