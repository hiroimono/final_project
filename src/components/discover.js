import React, { useState, useEffect } from 'react';
// import MediaQuery from 'react-responsive';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import axios from '../axios';
// import { languages } from '../languages.json';
import key from '../../utils/secret';

import AudioPlayer from "react-modular-audio-player";

// import { addTracksToPodcasts } from '../actions/actions';

function Discover() {

    // const searchterm = useSelector ( state => {
    //     console.log('state.search.searchTerm: ', state.search.searchTerm);
    //     return state.search.searchTerm;
    // });

    // const searchType = ['podcast'];
    // const searchOnlyIn = ['title'];
    const [language, setLanguage] = useState('English');
    const [country, setCountry] = useState('us');
    const [podcasts, setPodcasts] = useState([]);
    const [page, setPage] = useState(0);
    const [genres, setGenres] = useState([]);
    const [genreId, setGenreId] = useState(140);
    // const [offset, setOffset] = useState(0);

    const tracks = [];
    console.log('tracks starting: ', tracks);
    // console.log('podcasts starting: ', podcasts);

    const parameters = {
        page: page,
        genre_ids: genreId,
        region: country,
        language: language,
        safe_mode: 1
    };

    const loadGenres = () => {

        async function search () {
            const searchResults = await axios.
                get('https://listen-api.listennotes.com/api/v2/genres', {
                    headers: {'X-ListenAPI-Key': key['X-ListenAPI-Key']}
                });
            console.log('searchResults.data: ', searchResults.data);

            let myTracks = [...searchResults.data.genres.map( (genre) => {
                if (!genre.image || genre.image == null) {
                    return {
                        ...genre,
                        image : 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuF_cuBWZBgE%2Fmaxresdefault.jpg&f=1&nofb=1'
                    };
                } else {
                    return genre;
                }
            })];
            console.log('');
            console.log('tracks after: ', myTracks);
            setGenres(myTracks);
        }
        search();

    };

    const loadFunc = () => {

        console.log('old parameters.offset: ', parameters.offset);
        async function search () {
            const searchResults = await axios.
                get('https://listen-api.listennotes.com/api/v2/best_podcasts', {
                    params: parameters,
                    headers: {'X-ListenAPI-Key': key['X-ListenAPI-Key']}
                });
            console.log('searchResults.data: ', searchResults.data);

            let myTracks = [...podcasts, ...searchResults.data.podcasts.map( (podcast) => {
                if (!podcast.image || podcast.image == null) {
                    return {
                        ...podcast,
                        image : 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuF_cuBWZBgE%2Fmaxresdefault.jpg&f=1&nofb=1'
                    };
                } else {
                    return podcast;
                }
            })];
            console.log('');
            console.log('tracks after: ', myTracks);
            setPodcasts(myTracks);
        }
        search();

    };

    useEffect( loadGenres , []);

    const getGenresInfo = (id) => {
        console.log('genreId: ', id);
        setGenreId(id);
        loadFunc();
    };
    // useEffect( fn , [searchterm]);
    //

    // useEffect( loadFunc , [language, country]);
    // useEffect( fn , [searchterm]);
    //

    const moreLoadFunc = () => {

        console.log('old parameters.offset: ', parameters.offset);
        async function search () {
            const searchResults = await axios.
                get('https://listen-api.listennotes.com/api/v2/best_podcasts', {
                    params: parameters,
                    headers: {'X-ListenAPI-Key': key['X-ListenAPI-Key']}
                });
            console.log('searchResults.data: ', searchResults.data);

            let myTracks = [...podcasts, ...searchResults.data.podcasts.map( (podcast) => {
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

    const more = () => {
        console.log('parameters.page: ', parameters.page);
        parameters.page+=10;

        setPage(parameters.page);
        console.log('new parameters.page: ', parameters.page);
        console.log('search in more working!');
        moreLoadFunc();
    };

    const clear = () => {
        console.log('parameters.page: ', parameters.page);
        parameters.page = 0;

        setPage(parameters.page);
        console.log('new parameters.page: ', parameters.page);
        console.log('search in more working!');
        setPodcasts([]);
    };

    //
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

        <li className="selected" style={{marginBottom:'50px'}}>
            <div className="cd-full-width">
                <div className="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery" style={{marginTop:'60px', color:'white'}}>
                    <div className="tm-img-gallery-container" style={{textAlign:'center'}}>
                        <div className="tm-img-gallery gallery-one">

                            <div className="tm-img-gallery-info-container" style={{textAlign:'center', padding:'10px', margin:'5px', width:'100%'}}>
                                <p className="tm-text-title tm-gallery-title tm-white" style={{ fontSize:'3rem', textAlign:'center'}}><span className="tm-white">Discover all types of Podcasts!</span></p>
                            </div>

                            { genres && genres.map ( genre => (
                                <div key = { genre.id } className="grid-item" style={{height:'30px'}}
                                    onClick={ () => getGenresInfo(genre.id)}
                                >
                                    <figure className="effect-bubba">
                                        <img src="/assets/genre_background.png"/>
                                        <figcaption style={{padding:'1em'}}>
                                            <h2 className="tm-figure-title" style={{paddingTop:'20%', fontSize:'16px'}}>{genre.name}</h2>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}

                            { podcasts && podcasts.map ( podcast => (
                                <div key = { podcast.id } className="grid-item" style={{width: '12,5%'}}>
                                    <figure className="effect-bubba" style={{height:'100%'}}>
                                        <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                        <figcaption>
                                            <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title } </p>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))}

                        </div>
                        { podcasts.length ?
                            <p style={{textAlign:'center', marginBottom:'50px'}}>

                                <button onClick={ more } type="button" className="btn btn-light" style={{backgroundColor:'rgba(0,0,0,0.70)', color:'white', margin:'20px'}} >
                                    More
                                </button>

                                <button onClick={ clear } type="button" className="btn btn-light" style={{backgroundColor:'rgba(0,0,0,0.70)', color:'white', position:'fixed', bottom:'80px', right:'100px', margin:'20px', padding:'50px', fontSize:'30px' }} >
                                    Clear
                                </button>

                            </p>: ''
                        }
                    </div>
                </div>
            </div>
        </li>

    );
}

export default Discover;

// <AudioPlayer
//     audioFiles={[
//         {
//             src: podcast.audio,
//             title: podcast.title,
//             artist: podcast.publisher
//         }
//     ]}
//     rearrange={rearrangedPlayer}
//     playerWidth="10rem"
//     iconSize="18rem"
// />

//
// <div style={{marginTop:'60px'}}>
//     {console.log('This page is rendered now!')}
//     <ul className="cd-hero-slider" style={{marginTop: '10px', height: '100%'}}>
//
//         <li className="selected">
//             <div className="cd-full-width" style={{position: "relative"}}>
//                 <div className="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery" style={{marginTop: '10px'}}>
//                     <div className="tm-img-gallery-container">
//                         <div className="tm-img-gallery gallery-one">
//
//                             { podcasts && podcasts.map ( podcast => (
//                                 <div key = { podcast.id } className="grid-item" style={{width: '12,5%'}}>
//                                     <figure className="effect-bubba" style={{height:'100%'}}>
//                                         <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
//                                         <figcaption>
//                                             <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
//                                             <AudioPlayer
//                                                 audioFiles={[
//                                                     {
//                                                         src: podcast.audio,
//                                                         title: podcast.podcast_title_original,
//                                                         artist: "Adele"
//                                                     }
//                                                 ]}
//                                                 rearrange={rearrangedPlayer}
//                                                 playerWidth="10rem"
//                                                 iconSize="18rem"
//                                             />
//
//                                         </figcaption>
//                                     </figure>
//                                 </div>
//                             ))}
//
//                         </div>
//                         { podcasts.length ? <p style={{textAlign:'center', marginBottom:'50px'}}><button onClick={ more } type="button" className="btn btn-light" style={{backgroundColor:'rgba(0,0,0,0.70)', color:'white'}} >More</button> </p>: ''}
//                     </div>
//                 </div>
//             </div>
//         </li>
//     </ul>
// </div>

// <MediaQuery minDeviceWidth = { 992 }>
// </MediaQuery>

// <MediaQuery minDeviceWidth = { 768 }>
//     { podcasts && podcasts.map ( podcast => (
//         <div key = { podcast.id } className="grid-item" style={{width: '20%'}}>
//             <figure className="effect-bubba" style={{height:'100%'}}>
//                 <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
//                 <figcaption>
//                     <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
//                     <AudioPlayer
//                         audioFiles={[
//                             {
//                                 src: podcast.audio,
//                                 title: podcast.podcast_title_original,
//                                 artist: "Adele"
//                             }
//                         ]}
//                         rearrange={rearrangedPlayer}
//                         playerWidth="10rem"
//                         iconSize="18rem"
//                     />
//                 </figcaption>
//             </figure>
//         </div>
//     ))}
// </MediaQuery>
//
// <MediaQuery minDeviceWidth = { 480 }>
//     { podcasts && podcasts.map ( podcast => (
//         <div key = { podcast.id } className="grid-item" style={{width: '33%'}}>
//             <figure className="effect-bubba" style={{height:'100%'}}>
//                 <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
//                 <figcaption>
//                     <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
//                     <AudioPlayer
//                         audioFiles={[
//                             {
//                                 src: podcast.audio,
//                                 title: podcast.podcast_title_original,
//                                 artist: "Adele"
//                             }
//                         ]}
//                         rearrange={rearrangedPlayer}
//                         playerWidth="10rem"
//                         iconSize="18rem"
//                     />
//                 </figcaption>
//             </figure>
//         </div>
//     ))}
// </MediaQuery>
//
// <MediaQuery minDeviceWidth = { 320 }>
//     { podcasts && podcasts.map ( podcast => (
//         <div key = { podcast.id } className="grid-item" style={{width: '50%'}}>
//             <figure className="effect-bubba" style={{height:'100%'}}>
//                 <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
//                 <figcaption>
//                     <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
//                     <AudioPlayer
//                         audioFiles={[
//                             {
//                                 src: podcast.audio,
//                                 title: podcast.podcast_title_original,
//                                 artist: "Adele"
//                             }
//                         ]}
//                         rearrange={rearrangedPlayer}
//                         playerWidth="10rem"
//                         iconSize="18rem"
//                     />
//                 </figcaption>
//             </figure>
//         </div>
//     ))}
// </MediaQuery>

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
