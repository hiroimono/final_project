import React        from 'react';
import ReactDOM     from 'react-dom';
import App          from './components/app';
import Welcome      from './components/welcome';
import {Provider}     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import AllReducers from './reducers/index';
import * as io from 'socket.io-client';
import {init} from './socket';

const socket = io.connect();

socket.on('welcome', function(data) {
    console.log(data);
    socket.emit('thanks', {
        message: 'Thank you. It is great to be here.'
    });
});

const store = createStore(
    AllReducers,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

var elem;

if (location.pathname === '/welcome'){
    //if user is on it means user not LOGGED IN
    elem = <Welcome />;
} else {
    //this means user logged in
    init(store);
    elem = (
        <Provider store = { store } >
            <div className="cd-hero">

                <App />

            </div>
            <div id="loader-wrapper">
                <div id="loader"></div>
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </Provider>
    );
}
ReactDOM.render(
    elem,
    document.querySelector('main')
);
