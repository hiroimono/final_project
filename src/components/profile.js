import React from 'react';
import { ProfilePic } from './navbarAfterLogin';
import BioEditor from './bioEditor';


export default class Profile extends React.Component{
    constructor (props) {
        super(props);
    }

    render(){
        return (
            <div>
                <li>
                    <div className="cd-full-width">
                        <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="5">
                            <div className="tm-contact-page">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="tm-flex tm-contact-container">
                                            <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">

                                                <ProfilePic style={{ width: '350px', height: '350px' }} data-toggle="modal" data-target="#modalPush"
                                                    name            = { this.props.name }
                                                    surname         = { this.props.surname }
                                                    image           = { this.props.image }
                                                    id              = { this.props.id }
                                                    clickHandler    = { this.props.clickHandler }
                                                />


                                            </div>

                                            <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">

                                                <BioEditor
                                                    id          = { this.props.id}
                                                    name        = { this.props.name }
                                                    surname     = { this.props.surname }
                                                    bio         = { this.props.bio }
                                                    setBio      = { this.props.setBio }
                                                />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

// <section className="section height">
//     <div className="container height">
//         <div className = "level height">
//             <div className = "level-left" style={{flexGrow: 1, justifyContent: 'flex-end'}}>
//                 <figure className="image">
//     <ProfilePic style={{ width: '350px', height: '350px' }}
//         name            = { this.props.name }
//         surname         = { this.props.surname }
//         image           = { this.props.image }
//         id              = { this.props.id }
//         clickHandler    = { this.props.clickHandler }
//     />
// </figure>
//             </div>
//             <div className = "level-right" style={{flexGrow: 1, justifyContent: 'center'}}>
// <BioEditor
//     id          = { this.props.id}
//     name        = { this.props.name }
//     surname     = { this.props.surname }
//     bio         = { this.props.bio }
//     setBio      = { this.props.setBio }
// />
//             </div>
//
//         </div>
//     </div>
// </section>
