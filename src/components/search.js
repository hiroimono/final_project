import React, { useState, useEffect } from 'react';
import axios from '../axios';
import { languages } from '../languages.json';

// https://listen-api.listennotes.com
// /api/v2/search?
// q=star%20wars&
// sort_by_date=0&
// type=episode&
// offset=0&
// len_min=10&
// len_max=30&
// genre_ids=68%2C82&
// published_before=1390190241000&
// published_after=0&
// only_in=title%2Cdescription&
// language=English&
// safe_mode=1

function Search () {
    const [searchterm, setSearchterm] = useState('');
    const [searchType, setSearchType] = useState('podcast');
    const [searchOnlyIn, setSearchOnlyIn] = useState('title');
    const [searchLanguage, setSearchLanguage] = useState('English');
    const [podcasts, setPodcasts] = useState([]);

    useEffect( () => {
        console.log('languages: ', languages);
        let parameters = {
            q: searchterm,
            sort_by_date: 0,
            type: searchType,
            offset: 0,
            len_min: 5,
            len_max: 30,
            genre_ids: '',
            published_before: 1390190241000,
            published_after: 0,
            only_in: searchOnlyIn,
            language: searchLanguage
        };
        async function fn() {
            const searchResult = await axios.get('https://listen-api.listennotes.com/api/v2/search', {
                params: parameters,
                headers: {'X-ListenAPI-Key': '7fc1a4115a77436cb4a29ed447bf5e09'}
            });
            console.log('searchResult.data: ', searchResult.data.results);
            setPodcasts(searchResult.data.results);
        }
        fn();
    }, [searchterm, searchType, searchLanguage]);

    return (
        <div>
            <div className="container">
                <div className="media-content">
                    <p className="title is-2" style={{textAlign: 'center', margin: '10px'}}>Search New Podcasts</p>
                </div>
            </div>

            <div style={{textAlign:'center'}}>
                Search for:
                <input className="input is-rounded" type="text" placeholder="Enter a name" style={{ width: '500px', height: '40px',  margin: '10px'}}
                    onChange = { e => setSearchterm(e.target.value) }
                />
            </div>
            <div style={{textAlign:'center'}}>
                <span>Language: </span>
                <select name="type" onChange = { e => setSearchLanguage(e.target.value) } >
                    { languages.map( (language, index) => (
                        (language == 'english') ?
                            <option key = { index } value={ language } selected> { language } </option> :
                            <option key = { index } value={ language }> { language } </option>
                    ))}
                </select>
            </div>

            <div style={{textAlign:'center'}}>
                <span>Type: </span>
                <select name="type" onChange = { e => setSearchType(e.target.value) } >
                    <option value='episode'>Episode</option>
                    <option value='podcast'>Podcast</option>
                </select>
            </div>

            <ul className="cd-hero-slider" style={{marginTop: '10px', height: '100%'}}>

                <li className="selected">
                    <div className="cd-full-width" style={{position: "relative"}}>
                        <div className="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery" style={{marginTop: '10px'}}>
                            <div className="tm-img-gallery-container">
                                <div className="tm-img-gallery gallery-one">
                                    { podcasts.map ( podcast => (
                                        <div key = { podcast.id } className="grid-item" style={{width: '20%'}}>
                                            <figure className="effect-bubba" style={{height:'100%'}}>
                                                <img src={ podcast.image } alt="Image" className="img-fluid tm-img" style={{height:'100%', objectFit: 'cover'}}/>
                                                <figcaption>
                                                    <p className="tm-figure-description" style={{fontSize: '1.5rem'}}>{ podcast.title_original } </p>
                                                    <a href={ podcast.image }>View more</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    );
}

export default Search;

// <div className="tm-img-gallery-info-container">
//     <h2 className="tm-text-title tm-gallery-title tm-white"><span className="tm-white">Multi Color Image Gallery</span></h2>
//     <p className="tm-text">This responsive HTML template includes three gallery pages. Multi color is designed by Tooplate. You may use this layout for your website.
//     </p>
// </div>

// <img src={ podcast.image } alt={ podcast.title_original } className="img-fluid tm-img" /> // AUDIO
