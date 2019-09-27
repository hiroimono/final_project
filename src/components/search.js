import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from '../axios';
// import { languages } from '../languages.json';
import key from '../../utils/secret';

import AudioPlayer from "react-modular-audio-player";

// import { addTracksToPodcasts } from '../actions/actions';

function Search() {

    const searchterm = useSelector ( state => {
        console.log('state.search.searchTerm: ', state.search.searchTerm);
        return state.search.searchTerm;
    });

    const searchType = ['podcast'];
    const searchOnlyIn = ['title', 'description'];
    const [searchLanguage, setSearchLanguage] = useState('English');
    const [podcasts, setPodcasts] = useState([]);
    const [offset, setOffset] = useState(0);

    const tracks = [];
    console.log('tracks starting: ', tracks);
    console.log('podcasts starting: ', podcasts);

    const parameters = {
        q: searchterm,
        sort_by_date: 0,
        type: searchType,
        offset: offset,
        len_min: 0,
        count:20,
        len_max: 120,
        genre_ids: '',
        published_before: 1390190241000,
        published_after: 0,
        only_in: searchOnlyIn,
        language: searchLanguage
    };

    const loadFunc = () => {

        console.log('old parameters.offset: ', parameters.offset);
        async function search () {
            const searchResults = await axios.
                get('https://listen-api.listennotes.com/api/v2/search', {
                    params: parameters,
                    headers: {'X-ListenAPI-Key': key['X-ListenAPI-Key']}
                });
            console.log('searchResults.data: ', searchResults.data);

            let myTracks = [...podcasts, ...searchResults.data.results.map( (podcast) => {
                if (!podcast.image || podcast.image == null) {
                    return {
                        ...podcast,
                        image : 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuF_cuBWZBgE%2Fmaxresdefault.jpg&f=1&nofb=1'
                    };
                } else {
                    return podcast;
                }
            })];




            // searchResults.data.results.map( (podcast) => {
            //     if (!podcast.image || podcast.image == null) {
            //         let avatar_url = 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuF_cuBWZBgE%2Fmaxresdefault.jpg&f=1&nofb=1';
            //         podcast.image = avatar_url;
            //     }
            //     tracks.push(podcast);
            // });
            console.log('');
            console.log('tracks after: ', myTracks);
            setPodcasts(myTracks);
        }
        search();

    };

    useEffect( loadFunc , [searchterm]);
    // useEffect( fn , [searchterm]);
    //
    const more = () => {
        console.log('parameters.offset: ', parameters.offset);
        parameters.offset+=10;

        setOffset(parameters.offset);
        console.log('new parameters.offset: ', parameters.offset);
        console.log('search in more working!');
        loadFunc();
    };

    let rearrangedPlayer = [
        {
            className: "adele",
            innerComponents: [
                {
                    type: "play",
                    style: {
                        width: "100%",
                        justifyContent: "center",
                        filter: "invert(100%)",
                        opacity: "0.4"
                    }
                }
            ]
        }
    ];

    return (
        <div style={{marginTop:'60px'}}>
            {console.log('This page is rendered now!')}
            <ul className="cd-hero-slider" style={{marginTop: '10px', height: '100%'}}>

                <li className="selected">
                    <div className="cd-full-width" style={{position: "relative"}}>
                        <div className="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery" style={{marginTop: '10px'}}>
                            <div className="tm-img-gallery-container">
                                <div className="tm-img-gallery gallery-one">

                                    <MediaQuery minDeviceWidth = { 992 }>
                                        { podcasts && podcasts.map ( podcast => (
                                            <div key = { podcast.id } className="grid-item" style={{width: '12,5%'}}>
                                                <figure className="effect-bubba" style={{height:'100%'}}>
                                                    <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                                    <figcaption>
                                                        <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
                                                        <AudioPlayer
                                                            audioFiles={[
                                                                {
                                                                    src: podcast.audio,
                                                                    title: podcast.podcast_title_original,
                                                                    artist: "Adele"
                                                                }
                                                            ]}
                                                            rearrange={rearrangedPlayer}
                                                            playerWidth="10rem"
                                                            iconSize="18rem"
                                                        />

                                                    </figcaption>
                                                </figure>
                                            </div>
                                        ))}
                                    </MediaQuery>

                                    <MediaQuery minDeviceWidth = { 768 }>
                                        { podcasts && podcasts.map ( podcast => (
                                            <div key = { podcast.id } className="grid-item" style={{width: '20%'}}>
                                                <figure className="effect-bubba" style={{height:'100%'}}>
                                                    <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                                    <figcaption>
                                                        <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
                                                        <AudioPlayer
                                                            audioFiles={[
                                                                {
                                                                    src: podcast.audio,
                                                                    title: podcast.podcast_title_original,
                                                                    artist: "Adele"
                                                                }
                                                            ]}
                                                            rearrange={rearrangedPlayer}
                                                            playerWidth="10rem"
                                                            iconSize="18rem"
                                                        />
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        ))}
                                    </MediaQuery>

                                    <MediaQuery minDeviceWidth = { 480 }>
                                        { podcasts && podcasts.map ( podcast => (
                                            <div key = { podcast.id } className="grid-item" style={{width: '33%'}}>
                                                <figure className="effect-bubba" style={{height:'100%'}}>
                                                    <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                                    <figcaption>
                                                        <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
                                                        <AudioPlayer
                                                            audioFiles={[
                                                                {
                                                                    src: podcast.audio,
                                                                    title: podcast.podcast_title_original,
                                                                    artist: "Adele"
                                                                }
                                                            ]}
                                                            rearrange={rearrangedPlayer}
                                                            playerWidth="10rem"
                                                            iconSize="18rem"
                                                        />
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        ))}
                                    </MediaQuery>

                                    <MediaQuery minDeviceWidth = { 320 }>
                                        { podcasts && podcasts.map ( podcast => (
                                            <div key = { podcast.id } className="grid-item" style={{width: '50%'}}>
                                                <figure className="effect-bubba" style={{height:'100%'}}>
                                                    <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                                    <figcaption>
                                                        <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
                                                        <AudioPlayer
                                                            audioFiles={[
                                                                {
                                                                    src: podcast.audio,
                                                                    title: podcast.podcast_title_original,
                                                                    artist: "Adele"
                                                                }
                                                            ]}
                                                            rearrange={rearrangedPlayer}
                                                            playerWidth="10rem"
                                                            iconSize="18rem"
                                                        />
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        ))}
                                    </MediaQuery>

                                </div>
                                { podcasts.length ? <p style={{textAlign:'center', marginBottom:'30px'}}><button onClick={ more } type="button" className="btn btn-light" >More</button> </p>: ''}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Search;

// <button onClick={more} type="button" className="btn btn-light">More</button>
// <div className="container" style = {{color:'white', display:'flex', marginLeft: '10px'}}>
//     <div className="media-content">
//         <p className="title is-2" style={{textAlign: 'center', margin: '10px'}}>Search: </p>
//     </div>
//
//
//     <div style={{textAlign:'center', alignSelf:'center'}}>
//         <input className="input is-rounded" type="text" placeholder="Search new podcasts" style={{ maxWidth: '500px', height: '30px', borderRadius: '20px', paddingLeft:'20px', color: '#777'}}
//             onChange = { e => setSearchterm(e.target.value) }
//         />
//     </div>
//
// </div>

// <div style={{textAlign:'center'}}>
//     <span>Language: </span>
//     <select name="type" onChange = { e => setSearchLanguage(e.target.value) } >
//         { languages.map( (language, index) => (
//             <option key = { index } value={ language }> { language } </option>
//         ))}
//     </select>
// </div>
//
// <div style={{textAlign:'center'}}>
//     <span>Type: </span>
//     <select name="type" onChange = { e => setSearchType(e.target.value) } >
//         <option value='episode'>Episode</option>
//         <option value='podcast'>Podcast</option>
//     </select>
// </div>

// <div className="tm-img-gallery-info-container">
//     <h2 className="tm-text-title tm-gallery-title tm-white"><span className="tm-white">Multi Color Image Gallery</span></h2>
//     <p className="tm-text">This responsive HTML template includes three gallery pages. Multi color is designed by Tooplate. You may use this layout for your website.
//     </p>
// </div>

// <img src={ podcast.image } alt={ podcast.title_original } className="img-fluid tm-img" /> // AUDIO
