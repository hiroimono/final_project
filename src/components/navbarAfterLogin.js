import React from 'react';
import { useDispatch } from 'react-redux';
import  { searchWithSearchTerm }  from '../actions/actions';
import { Link } from 'react-router-dom';


export function NavbarAfterLogin (props) {
    const dispatch = useDispatch();

    const sendSearchterm = (e) => {
        if (e.target.value.length == 0 && e.key == "Enter") {
            e.preventDefault();
        }  else if (e.key == 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log('/navbar -> sendSearchterm: ', e.target.value);
            let searchTerm = e.target.value;
            location.replace('/#/search');
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

                    <div className="collapse navbar-toggleable-md text-xs-center" id="tmNavbar" style={{justifyContent:'flex-end', height:'60px'}}>
                        <ul className="nav navbar-nav" style={{ height:'100%'}}>
                            <li className="nav-item" style={{ alignSelf: 'center'}}>
                                <Link to="/discover" className="nav-link" data-no="1"> Discover New Podcasts </Link>
                            </li>
                            <li className="nav-item" style={{ alignSelf: 'center'}}>
                                <Link to="/bestepisodes" className="nav-link" data-no="2"> Best Episodes </Link>
                            </li>

                            <li className="nav-item" style={{ alignSelf: 'center', color: 'white'}}>
                                <Link to='/profile' className="nav-link" data-no="4" > { ( props.name && props.surname ) && <p> Welcome <span style={{color:'#1fabfa', fontWeight:'bold'}}>{ props.name } { props.surname }</span> </p> } </Link>
                            </li>

                            <li className="nav-item" style={{ alignSelf: 'center'}}>
                                <a href="/logout" className="nav-link" data-no="6"> Log out </a>
                            </li>

                            <li className="nav-item" style={{ alignSelf: 'center', height:'50px', width: '80px', marginRight:'10px'}}>
                                <ProfilePic className="nav-link" data-no="5" style={{height:'100%', width: '100%'}}
                                    image={props.image}
                                    name={props.name}
                                    surname={props.surname}
                                    id={props.id}
                                    clickHandler={props.showImgUploder}
                                />
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    );
}

export function ProfilePic(props) {
    const defaultImg = 'https://www.w3schools.com/howto/img_avatar.png';
    const image = props.image || defaultImg;
    return (
        <img style={{borderRadius: '10%', height: '100%', width: '450px', cursor: 'pointer', objectFit: 'cover'}} className="profilePic" onClick={props.clickHandler} src={image} alt={`${props.name} ${props.surname}`} />
    );
}




// data-toggle="modal" data-target="#modalPush"
