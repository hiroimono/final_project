import React from 'react';
import Search from './search';
import Registration from './registration';
import Login from './login';
import Navbar from './navbar';
import Footer from './footer';
import BestEpisodes from './bestEpisodes';
import Favorites from './favorites';
import {Player} from './audioPlayer';
import { HashRouter, Route } from 'react-router-dom';

function Welcome() {
    let isVisible = false;
    return (
        <HashRouter>
            <Navbar />
            <Route exact path="/best" component={BestEpisodes}/>
            <Route exact path="/register" component={Registration}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/favorites" component={Favorites}/>
            { isVisible ? <Player /> : null }
            <Footer />
        </HashRouter>
    );
}

export default Welcome;

// <Navbar />
// <section className="section height">
//     <div className="container height">
//         <div className = "level height">
//             <div className = "level-left column" >
//                 <p style = {{fontSize: '40px', textAlign: 'center'}}>Let's</p><br/>
//                 <figure className="image" style={{display:'flex', justifyContent: 'center'}}>
//                     <img className="has-ratio" src="/assets/go.svg" style={{maxWidth: '440px'}}/>
//                 </figure>
//             </div>
//             <div className = "level-right">
//                 <Route exact path="/" component={Registration}/>
//                 <Route path="/login" component={Login}/>
//             </div>
//         </div>
//     </div>
// </section>
// <Footer />
