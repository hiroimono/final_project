import React from 'react';
import axios from '../axios';

export class ProfileImgUploader extends React.Component{
    constructor(props){
        super(props);
        this.uploadImg = this.uploadImg.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleFileChange (e) {
        console.log('handleFileChange(e), e.target.files[0]: ', e.target.files[0]);
        this.file = e.target.files[0];
        console.log('handleFileChange(e), this.files: ', this.file);
        this.uploadImg();
    }

    uploadImg () {

        let formData = new FormData;
        formData.append('file', this.file);
        axios.post('/upload-profile-img', formData)
            .then((rows) => {
                console.log('/upload-profile-img, axios response, new img_url: ', rows.data.img_url);
                this.props.setImg(rows.data.img_url);

            })
            .catch( err => console.log('/upload-profile-img, axios error: ', err));
    }

    render(){
        const defaultImg = 'https://www.w3schools.com/howto/img_avatar.png';
        const image = this.props.image || defaultImg;
        return(
            <div className="modal fade" id="modalPush" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-notify modal-info" role="document">
                    <div className="modal-content text-center">
                        <div className="modal-header d-flex justify-content-center">
                            <p className="heading">Be always up to date</p>
                        </div>
                        <div className="modal-body">
                            <img className="fas fa-bell fa-4x animated rotateIn mb-4" style = {{objectFit: 'cover'}} src={ image } />
                            <input onChange={this.handleFileChange} className="btn btn-info" type="file" name="file" accept="image/*" />
                            <label>Choose a picture</label>
                        </div>
                        <div className="modal-footer flex-center">
                            <button type="submit" className="pull-xs-right tm-submit-btn"
                                onClick={this.uploadImg}
                            >
                                Save
                            </button>

                            <button type="submit" className="pull-xs-right tm-submit-btn"
                                onClick={ this.props.clickHandler }
                            >
                                Cancel
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalPush">Launch modal</button>
//
// <div className="modal is-active">
//
//
//     <div className="modal-background"></div>
//     <div className="modal-content">
//         <p className="image is-4by3">
//             <img style = {{objectFit: 'cover'}} src={ image } />
//         </p>
//         <div className="file">
//             <label className="file-label">
//                 <input onChange={this.handleFileChange} className="file-input" type="file" name="file" accept="image/*" />
//                 <span className="file-cta">
//                     <span className="file-icon">
//                         <i className="fas fa-upload"></i>
//                     </span>
//                     <span className="file-label">
//                         Choose a file…
//                     </span>
//                 </span>
//             </label>
//         </div>
//         <footer className="modal-card-foot">
//             <button onClick={this.uploadImg} className="button is-success">Save changes</button>
//             <button onClick={ this.props.clickHandler } className="button">Cancel</button>
//         </footer>
//     </div>
//     <button onClick={ this.props.clickHandler } className="modal-close is-large" aria-label="close"></button>
// </div>
