import React from 'react';
import axios from '../axios';
import { BrowserRouter, Route } from 'react-router-dom';
// import { NavbarAfterLogin } from './NavbarAfterLogin';
import Footer from './footer';
// import { ProfileImgUploader } from './profileImgUploader';
// import Profile from './profile';
// import OtherProfile from './otherProfile';
// import FindPeople from './findPeople';
// import FriendshipButton from './friendshipButton';
// import Friends from './friends';
// import { Chats } from './chatroom';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // otherProfileId : 1,
            // imgUploaderIsVisible : false,
        };
        // this.showImgUploder         = this.showImgUploder.bind(this);
        // this.setImg                 = this.setImg.bind(this);
        // this.setBio                 = this.setBio.bind(this);
        // this.setOtherProfileId      = this.setOtherProfileId.bind(this);
    }

    componentDidMount() {
        console.log('////// Component APP is mounted!!! ///////');
        // axios.get('/getuser')
        //     .then((res) => {
        //         console.log('res.data: ', res.data);
        //         this.setState({
        //             bio: res.data.bio,
        //             image: res.data.img_url,
        //             name: res.data.name,
        //             surname: res.data.surname,
        //             id: res.data.id
        //         });
        //         console.log('this.state: ', this.state);
        //     })
        //     .catch(err => console.log('/user, axios error: ', err));
    }

    // showImgUploder() {
    //     this.state.imgUploaderIsVisible ? this.setState({ imgUploaderIsVisible: false }) : this.setState({ imgUploaderIsVisible: true });
    // }
    //
    // setImg(img){
    //     this.setState({
    //         image: img,
    //         imgUploaderIsVisible: false
    //     });
    // }
    //
    // setBio(bio) {
    //     this.setState({
    //         bio
    //     });
    //     console.log('After setBio, Bio: ', this.state.bio);
    // }
    //
    // setOtherProfileId(id){
    //     this.setState({
    //         otherProfileId: id
    //     });
    // }

    render() {
        return (
            <BrowserRouter>
                <h1>APP PAGE IS RUNNING</h1>
                <Footer />
            </BrowserRouter>
        );
    }
}

// <div>
//     <NavbarAfterLogin
//         image = { this.state.image }
//         name = { this.state.name }
//         surname = { this.state.surname }
//         id = { this.state.id }
//         showImgUploder = { this.showImgUploder }
//     />
//
//
//     <div>
//         <Route exact path="/" render = {
//             () => (
//                 <Profile
//                     name={this.state.name}
//                     surname={this.state.surname}
//                     id={this.state.id}
//                     bio={this.state.bio}
//                     image={this.state.image}
//                     clickHandler={this.showImgUploder}
//                     setBio={this.setBio}
//                     otherProfileId={this.state.otherProfileId}
//                 />
//             )}
//         />
//         <Route exact path={`/otherusers`} render = {
//             () => (
//                 <OtherProfile
//                     otherProfileId      = { this.state.otherProfileId }
//                     setOtherProfileId   = { this.setOtherProfileId }
//                 />
//             )}  />
//         <Route exact path="/users" component={FindPeople} />
//         <Route exact path="/user/friendships/:id" component={FriendshipButton}  />
//         <Route exact path="/friends" component={Friends}  />
//         <Route exact path="/chats" component={Chats} />
//     </div>
//     { this.state.imgUploaderIsVisible &&
//     <ProfileImgUploader
//         image = { this.state.image }
//         setImg = { this.setImg }
//         clickHandler = { this.showImgUploder }
//     />
//     }
//     <Footer />
// </div>
