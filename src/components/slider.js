import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import axios from '../axios';
// import { languages } from '../languages.json';
// import { regions } from '../regions.json';
import key from '../../utils/secret';

// import AudioPlayer from "react-modular-audio-player";

// import { addTracksToPodcasts } from '../actions/actions';

function Slider () {

    const [podcasts, setPodcasts] = useState([]);
    const [country, setCountry] = useState('us');

    const tracks = [];
    console.log('tracks starting: ', tracks);

    const parameters = {
        genre_id: '',
        page: 2,
        region: country,
        safe_mode :1,
        sort_by_date: 0
    };

    const loadFunc = () => {

        async function search () {
            const searchResults = await axios.
                get('https://listen-api.listennotes.com/api/v2/best_podcasts', {
                    params: parameters,
                    headers: {'X-ListenAPI-Key': key['X-ListenAPI-Key']}
                });
            console.log('searchResults.data: ', searchResults.data);

            searchResults.data.podcasts.map( (podcast) => {
                if (!podcast.image || podcast.image == null) {
                    let avatar_url = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuF_cuBWZBgE%2Fmaxresdefault.jpg&f=1&nofb=1';
                    podcast.image = avatar_url;
                }
                tracks.push(podcast);
            });
            console.log('tracks after: ', tracks);
            setPodcasts(tracks);
        }
        search();

    };

    useEffect( loadFunc , [country]);
    // useEffect( fn , [searchterm]);

    // let rearrangedPlayer = [
    //     {
    //         className: "adele",
    //         innerComponents: [
    //             {
    //                 type: "play",
    //                 style: {
    //                     width: "100%",
    //                     justifyContent: "center",
    //                     filter: "invert(100%)",
    //                     opacity: "0.4"
    //                 }
    //             }
    //         ]
    //     }
    // ];

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="16"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="17"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="18"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="19"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="20"></li>
                </ol>


                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active" style={{backgroundImage: "url('/assets/pictures/slide4.jpg')"}}>
                        <div className="carousel-caption d-none d-md-block" style={{paddingBottom:'300px', left:'0'}}>
                            <h1 className="display-4" style={{fontSize: '70px', color: '#333333'}}>Welcome to BluePlanet!</h1>
                            <p className="lead" style={{fontSize: '40px', color: '#f9ca24'}}>Are you ready to discover Podcasts?</p>
                        </div>
                    </div>
                    { podcasts && podcasts.map ( podcast => (

                        <div key = { podcast.id } className="carousel-item" style={{backgroundImage: 'url('+podcast.image+')'}}>
                            <a href={ podcast.website} target="_blank" style={{alignSelf:'center'}}>
                                <div className="carousel-caption d-none d-md-block" style={{paddingBottom:'80px'}}>
                                    <h1 className="display-4" style={{fontSize: '40px', color: '#ffff', fontWeight:'bold'}}>{podcast.title}</h1>

                                </div>
                            </a>
                        </div>

                    ))}
                </div>
                <a className="left carousel-control" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    );
}

export default Slider;

// <p className="lead">This is a description for the first slide.</p>
