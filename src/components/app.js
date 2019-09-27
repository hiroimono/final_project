import React from 'react';
import axios from '../axios';
import Search from './search';
// import Registration from './registration';
// import Login from './login';
import { NavbarAfterLogin } from './navbarAfterLogin';
import Footer from './footer';
import { ProfileImgUploader } from './profileImgUploader';
import Profile from './profile';
import Slider from './slider';
import BestEpisodes from './bestEpisodes';
import Favorites from './favorites';
import {Player} from './audioPlayer';
import { HashRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            otherProfileId : 1,
            imgUploaderIsVisible : false,
            playerIsVisible :false
        };
        this.showImgUploder         = this.showImgUploder.bind(this);
        this.setImg                 = this.setImg.bind(this);
        this.setBio                 = this.setBio.bind(this);
        // this.setOtherProfileId      = this.setOtherProfileId.bind(this);
    }

    componentDidMount() {
        axios.get('/getuser')
            .then((res) => {
                console.log('res.data: ', res.data);
                this.setState({
                    bio: res.data.bio,
                    image: res.data.img_url,
                    name: res.data.name,
                    surname: res.data.surname,
                    id: res.data.id
                });
                console.log('this.state: ', this.state);
            })
            .catch(err => console.log('/user, axios error: ', err));
    }

    showImgUploder() {
        this.state.imgUploaderIsVisible ? this.setState({ imgUploaderIsVisible: false }) : this.setState({ imgUploaderIsVisible: true });
    }

    setImg(img){
        this.setState({
            image: img,
            imgUploaderIsVisible: false
        });
    }

    setBio(bio) {
        this.setState({
            bio
        });
        console.log('After setBio, Bio: ', this.state.bio);
    }

    // setOtherProfileId(id){
    //     this.setState({
    //         otherProfileId: id
    //     });
    // }


    render() {
        return (
            <HashRouter>
                <div>
                    <NavbarAfterLogin
                        image = { this.state.image }
                        name = { this.state.name }
                        surname = { this.state.surname }
                        id = { this.state.id }
                        showImgUploder = { this.showImgUploder }
                    />
                    <div>
                        <Switch>
                            <Route exact path="/profile" render = {
                                () => (
                                    <Profile
                                        name={this.state.name}
                                        surname={this.state.surname}
                                        id={this.state.id}
                                        bio={this.state.bio}
                                        image={this.state.image}
                                        clickHandler={this.showImgUploder}
                                        setBio={this.setBio}
                                        otherProfileId={this.state.otherProfileId}
                                    />
                                )}
                            />
                            <Route exact path="/bestepisodes" component={BestEpisodes}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/apifavorites" component={Favorites}/>
                            <Route component={Slider}/>
                        </Switch>
                    </div>
                    { this.state.imgUploaderIsVisible &&
                        <ProfileImgUploader
                            image = { this.state.image }
                            setImg = { this.setImg }
                            clickHandler = { this.showImgUploder }
                        />
                    }
                    { this.state.playerIsVisible ? <Player /> : null }
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

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
