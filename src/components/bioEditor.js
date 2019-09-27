import React from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

export default class BioEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            isEditMode: false
        });
        console.log(props);
        this.handleChange       = this.handleChange.bind(this);
        this.updateBio          = this.updateBio.bind(this);
        this.clickToEdit        = this.clickToEdit.bind(this);
        this.cancelEdit         = this.cancelEdit.bind(this);
    }

    handleChange(e) {
        this.bio = e.target.value;
        console.log('e.target.value: ', e.target.value);
        console.log('this.bio: ', this.bio);
    }

    updateBio(){
        console.log("Bio that will update: ", this.bio);
        axios.post('/update/bio', {bio: this.bio} )
            .then(result => {
                console.log('Bio that is updated: ', result.data.bio);
                this.props.setBio(result.data.bio);
                this.setState({ isEditMode: false });
            })
            .catch(err => console.log('/update/bio, axios Error: ', err));
    }

    clickToEdit(){
        console.log('this.bio: ', this.bio);
        if (this.bio == undefined) {
            this.bio = this.props.bio;
        }
        this.setState({ isEditMode: true });
    }

    cancelEdit(){
        this.setState({ isEditMode: false });
    }

    render () {
        if (this.state.isEditMode){
            return (
                <div>
                    <h2 className="tm-contact-info">Say hello to us!</h2>

                    <div className="tm-contact-form">

                        <div className="form-group">
                            <h1 style={{textAlign:'center'}}>{ this.props.name } { this.props.surname }</h1>
                        </div>

                        <div className="form-group">
                            <textarea type='text' id="contact_message" name='bio' className="form-control" rows="5" placeholder="About you..." required
                                defaultValue={this.props.bio}
                                onChange={this.handleChange}>
                            </textarea>
                        </div>

                        <button type="submit" className="pull-xs-right tm-submit-btn"
                            onClick={this.updateBio}
                        >
                            Save
                        </button>

                        <button type="submit" className="pull-xs-right tm-submit-btn"
                            onClick={this.cancelEdit}
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h2 className="tm-contact-info">Say hello to us!</h2>

                    <div className="tm-contact-form">

                        <div className="form-group">
                            <h1 style={{textAlign:'center'}}>{ this.props.name } { this.props.surname }</h1>
                        </div>

                        <div className="form-group">
                            <textarea type='text' id="contact_message" name='bio' className="form-control" rows="5" placeholder="About you..." required
                                value={ this.props.bio }>
                            </textarea>
                        </div>

                        <button type="submit" className="pull-xs-right tm-submit-btn"
                            onClick={this.clickToEdit}
                        >
                            Edit
                        </button>

                    </div>
                </div>
            );
        }
    }
}


// <h1>Bio Editor</h1>
// <h1> { this.props.name } { this.props.surname } </h1>
// <article className="media">
//     <div className="media-content">
//         <div className="field">
//             <p className="control">
//
//                 <textarea className="textarea" type="text" name='bio' placeholder="Add a comment..." rows="10" cols="50"
//                     defaultValue={this.props.bio}
//                     onChange={this.handleChange}>
//                 </textarea>
//
//             </p>
//         </div>
//
//         <div onClick={this.updateBio} className="button is-info" style={{marginRight: '20px'}}>Save</div>
//         <div onClick={this.cancelEdit} className="button is-info">Cancel</div>
//
//     </div>
// </article>


// <h1>Bio Editor</h1>
// <h1> { this.props.name } { this.props.surname } </h1>
// <article className="media">
//     <div className="media-content">
//         <div className="field">
//
//             <textarea value={ this.props.bio } className="textarea" type="text" name='bio' placeholder="Add a comment..." rows="10" cols="50">
//             </textarea>
//
//         </div>
//
//         <div onClick={this.clickToEdit} className="button is-info" style={{marginRight: '20px'}}>Edit Bio</div>
//         <div className="button is-info">
//             <Link to={`/otherusers`}> See the other profiles </Link>
//         </div>
//     </div>
// </article>
