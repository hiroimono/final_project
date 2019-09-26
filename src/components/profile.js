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
                <p style={{textAlign:'center'}}> THIS IS PROFILE PAGE</p>
                <li>
                    <div className="cd-full-width">
                        <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="5">
                            <div className="tm-contact-page">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="tm-flex tm-contact-container">
                                            <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                                                <BioEditor
                                                    id          = { this.props.id}
                                                    name        = { this.props.name }
                                                    surname     = { this.props.surname }
                                                    bio         = { this.props.bio }
                                                    setBio      = { this.props.setBio }
                                                />
                                            </div>

                                            <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">

                                                <ProfilePic style={{ width: '350px', height: '350px' }}
                                                    name            = { this.props.name }
                                                    surname         = { this.props.surname }
                                                    image           = { this.props.image }
                                                    id              = { this.props.id }
                                                    clickHandler    = { this.props.clickHandler }
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


// <h2 className="tm-contact-info">Say hello to us!</h2>
// <p className="tm-text">Pellentesque euismod, sem nec euismod interdum, odio elit venenatis est, gravida aliquet velit velit a ex. In luctus orci et orci lobortis, quis sagittis nibh laoreet.</p>
//
//
// <form action="index.html" method="post" className="tm-contact-form">
//
//     <div className="form-group">
//         <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
//     </div>
//
//     <div className="form-group">
//         <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
//     </div>
//
//     <div className="form-group">
//         <textarea id="contact_message" name="contact_message" className="form-control" rows="5" placeholder="Your message" required></textarea>
//     </div>
//
//     <button type="submit" className="pull-xs-right tm-submit-btn">Send</button>
//
// </form>
