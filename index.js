const express 		  = require('express');
const cookieSession = require('cookie-session');
const bodyParser    = require('body-parser');
const compression 	= require('compression');
// const db            = require('./utils/db');

const app 			    = express();
const PORT          = process.env.PORT || 8080;

const server        = require('http').Server(app);
const io            = require('socket.io')(server, { origins: `localhost:${PORT} http://127.0.0.1:${PORT}`}); //require('socket.io')(server, { origins: 'localhost:8080 myapp.heroku.com:*' });
const csurf 		    = require('csurf');

app.use(compression());

app.use(express.static('public'));
app.use(express.json());

const cookieSessionMiddleware = cookieSession({
    maxAge:	1000 * 60 * 60 * 24 * 7,
    secret: process.env.NODE_ENV == 'production' ?
        process.env.SESS_SECRET :
        require('./utils/secret').sessionSecret
});

app.use(cookieSessionMiddleware);
io.use(function(socket, next) {
    cookieSessionMiddleware(socket.request, socket.request.res, next);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//route for default page
app.use('/', require('./router/router'));

//every other routes comes before this
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(PORT, () => console.log(`Port ${PORT} is listening very carefully!!!...`));

// const onlineUsers = [];

//Server side socket code...
io.on('connection', socket => {

    if (!socket.request.session.userId) {
        return socket.disconnect(true);
    }
    console.log(`User-id: ${socket.request.session.userId}, CONNECTED to a socket-id: ${ socket.id }`);
    //
    // const loadLast10Messages = () =>{
    //     db.loadLast10Messages()
    //         .then(last10Messages => {
    //         // console.log("last10Messages:", last10Messages);
    //             io.sockets.emit("loadLast10Messages", last10Messages);
    //         })
    //         .catch(err => {
    //             console.log("err in last10Messages ", err);
    //             return;
    //         });
    // };
    // loadLast10Messages();
    // socket.on('newMessage', async function (message){
    //     console.log('New Message received: ', message);
    //     let senderId = socket.request.session.userId;
    //     console.log('senderId: ', senderId);
    //     let newMessageData = await db.saveMessagesWithUserInfo(senderId, message);
    //     console.log ('newMessageData is saved to database: ', newMessageData);
    //     loadLast10Messages();
    //     io.sockets.emit('newMessageData', newMessageData);
    // });
    //
    // onlineUsers.push({
    //     userId: socket.request.session.userId,
    //     socketId: socket.id
    // });
    //
    // console.log('onlineUsers:', onlineUsers);
    //
    // let onlineUserIds = onlineUsers.map(user => {
    //     return user.userId;
    // });
    //
    // // let uniqueOnlineUserIds = [...new Set(onlineUserIds)];
    //
    // console.log('onlineUserIds: ', onlineUserIds);
    //
    // db.getUsersByIds(onlineUserIds)
    //     .then(results => {
    //         socket.emit('onlineUsers', results.rows);
    //         // console.log('onlineUserIds: ', results.rows);
    //         socket.broadcast.emit('userConnected', results.rows);
    //     });

    socket.on('disconnect', function(){
        // console.log('socket.id will disconnect: ', socket.id);
        // let index = onlineUsers.findIndex(function(x) {return x.socketId === socket.id;});
        // console.log('index: ', index);
        // onlineUsers.splice( index , 1 );
        // console.log('onlineUsers:', onlineUsers);
        // db.getUserInfo(socket.request.session.userId)
        //     .then(results => {
        //         socket.emit('onlineUsers', results);
        //         console.log('results: ', results);
        //         socket.broadcast.emit('userLeft', results);
        //     });
        socket.disconnect(true);
        console.log(`User-id: ${socket.request.session.userId}, DISCONNECTED to a socket-id: ${ socket.id }`);
    });
});

//use cheerio for load preview
