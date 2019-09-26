const express               = require('express');
const db                    = require('../utils/db');
const { hash, compare }		  = require('../utils/bc');
const s3 		                = require('../utils/s3');
const config 	              = require('../utils/config');

/////////////////FILE UPLOAD///////////////////
const multer                = require('multer');
const uidSafe               = require('uid-safe');
const path                  = require('path');

const diskStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    filename: function (req, file, callback) {
        uidSafe(24).then(function(uid) { //24 karakter demek
            callback(null, uid + path.extname(file.originalname));
        });
    }
});
/////////////////uploaded info///////////////////
const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});
/////////////////FILE UPLOAD///////////////////

////////////// MIDDLEWARE CHECK////////////////

// const { requireLogin, requireLogout }	= require('../utils/middleware.js');

////////////// MIDDLEWARE CHECK////////////////

const router = express.Router();

// router.get('/welcome', (req, res) => {
//     res.redirect('/welcome#/best') ;
// });


router.post('/register-user', (req, res) => {
    console.log(req.body);
    var { name, surname, email, password } = req.body;
    hash(password)
        .then( hash => {
            console.log("hashed password is: ", hash);
            db.registerUser(
                name,
                surname,
                email,
                hash
            )
                .then(({rows}) => {
                    console.log("Assigned information for new user: ", rows);
                    req.session.userId = rows[0].id;
                    console.log('/register, router side, req.session.userId: ', req.session.userId);
                    res.json({success: true});
                })
                .catch(err => {
                    console.log('/register, router side, POST request error: ', err);
                    res.json({success: false});
                });
        })
        .catch( err => {
            console.log('/register, router side, hash error: ', err);
            res.json({success: false});
        });

});

router.post('/login', (req, res) => {
    let { email, password } = req.body;
    db.getPassword( email )
        .then(result => {
            compare(password, result[0].password)
                .then(match => {
                    if(match){
                        console.log('user logged in!!!');
                        req.session.userId = result[0].id;
                        console.log('/login, router side, req.session userId: ', req.session.userId);
                        req.session.LOGIN= true;
                        console.log('/login, router side, req.session.LOGIN: ', req.session.LOGIN);
                        res.json({ success: true });
                    } else {
                        res.json({success: false });
                    }
                })
                .catch( err => {
                    console.log('Router side, Login page error: ', err);
                    res.json({success: false});
                });
        })
        .catch( err => {
            console.log('Router side, Login page error: ', err);
            res.json({success: false});
        });
});

router.get('/logout', function(req, res) {
    req.session.userId = null;
    req.session.LOGIN = false;
    console.log('/logout, router side, req.session.userId: ', req.session.userId);
    console.log('/logout, router side, req.session.LOGIN: ', req.session.LOGIN);
    res.redirect('/welcome');
});

// router.get('/api/user/:id', (req, res) => {
//     const userId = req.params.id;
//     console.log('/api/user/id, userId: ', userId);
//     console.log('req.session.userId: ', req.session.userId);
//     db.getUserInfo(userId)
//         .then((result) => {
//             console.log('/api/user/:id, db.getUserInfo, result: ', result);
//             res.json({result: result, currentUserId: req.session.userId});
//         })
//         .catch(err => console.log('/api/user/id, router side error: ', err));
// });

router.get('/getuser', (req, res) => {
    const userId = req.session.userId;
    console.log('/getuser, userId: ', req.session.userId);
    db.getUserInfo(userId)
        .then((result) => {
            res.json(result);
            console.log('/getuser, db.getUserInfo id: ', result.id, 'name: ', result.name);
        })
        .catch(err => console.log('/getuser, router side error: ', err));
});

// // app.post('/upload', uploader.single('file'), (req, res) => {
// router.post('/upload-profile-img', uploader.single('file'), s3.upload, (req, res) => {
//     //req.file - the file that was just uploaded
//     //req.body - refers to the values we type in the input fileds
//     console.log("/upload-profile-img, req.body:", req.body);
//     let userId = req.session.userId;
//     console.log("/upload-profile-img, userId:", userId);
//     let img_url = `${config.s3Url}${req.file.filename}`;
//     console.log('/upload-profile-img, img_url: ', img_url);
//     // let url ='/uploads' + filename;
//     db.updateUserImage(userId, img_url)
//         .then((data) => {
//             console.log('/upload-profile-img, router side, rows.img_url: ', data.rows);
//             res.json(data.rows[0]);
//         })
//         .catch(err => {
//             console.log('/upload-profile-img, upload Image Error: ', err);
//         });
// });
//
// router.post('/update/bio', (req, res) => {
//     console.log('/update/bio, userId: ', req.session.userId);
//     console.log('/update/bio, req.body.bio: ', req.body.bio);
//     let userId = req.session.userId;
//     let { bio } = req.body;
//     db.updateBio(userId, bio)
//         .then((result) => {
//             console.log('/update/bio, result.rows: ', result.rows);
//             res.json(result.rows[0]);
//         })
//         .catch(err => console.log('/update/bio, router side Error: ', err));
// });
//
// router.post('/usersearch', (req, res) => {
//     console.log('req.body.searchterm: ', req.body.searchterm);
//     let { searchterm } = req.body;
//     db.searchUser(searchterm)
//         .then((rows) => {
//             console.log('/usersearch, router side Error: ', rows);
//             res.json(rows);
//         })
//         .catch();
// });
//
// router.post('/askcurrentfriendship', (req, res) => {
//     console.log('/askcurrentfriendship, req.session.userId, req.body.id : ', req.session.userId, req.body.id);
//     var sender_id = req.session.userId;
//     var receiver_id = req.body.id;
//     console.log('sender_id, receiver_id : ', sender_id, receiver_id);
//     db.askCurrentFriendship( sender_id, receiver_id )
//         .then( rows => {
//             console.log('/askcurrentfriendship, rows[0]: ', rows);
//             res.json(rows);
//         })
//         .catch( err => console.log('/askcurrentfriendship, router side Error', err) );
// });
//
// router.post('/addfriendship', (req, res) => {
//     console.log('/addfriend, req.body.id: ', req.body.id);
//     let sender_id = req.session.userId;
//     let receiver_id = req.body.id;
//     db.addFriendship( sender_id, receiver_id )
//         .then( row => res.json(row) )
//         .catch( err => console.log('/addfriendship, router side Error', err) );
// });
//
// router.post('/acceptfriendship', (req, res) => {
//     console.log('/acceptfriendship, req.body.id: ', req.body.id);
//     let sender_id = req.session.userId;
//     let receiver_id = req.body.id;
//     db.acceptFriendship( sender_id, receiver_id )
//         .then( row => res.json(row) )
//         .catch( err => console.log('/acceptfriendship, router side Error', err) );
// });
//
// router.post('/endfriendship', (req, res) => {
//     console.log('/endfriendship, req.body.id: ', req.body.id);
//     let sender_id = req.session.userId;
//     let receiver_id = req.body.id;
//     db.endFriendship( sender_id, receiver_id )
//         .then( row => res.json(row) )
//         .catch( err => console.log('/endfriendship, router side Error', err) );
// });
//
//
// router.get('/getfriendandwannabes.json', (req,res) => {
//     let currentUserId = req.session.userId;
//     console.log('/getfriendandwannabes.json, currentUserId = req.session.userId -> currentUserId: ', currentUserId);
//     db.getFriendAndWannabes(currentUserId)
//         .then((result) => {
//             console.log('/getfriendandwannabes.json, db.getFriendAndWannabes, result: ', result);
//             res.json({result, currentUserId});
//         })
//         .catch( err => console.log('/getfriendandwannabes.json, db.getFriendAndWannabes, err: ', err));
// });

module.exports = router;
