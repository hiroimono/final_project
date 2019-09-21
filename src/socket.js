import * as io from 'socket.io-client';
import {  newChatMessage, loadLast10Messages, userConnected, onlineUsers, userLeft} from './actions/actions';

export let socket;

export function init (store){
    if (!socket){
        socket = io.connect();

        socket.on('newMessageData', newMessageData => {
            store.dispatch(newChatMessage(newMessageData));
        });

        socket.on('loadLast10Messages', messages => {
            store.dispatch(loadLast10Messages(messages));
        });

        socket.on('onlineUsers', (onlineUserList) => {
            store.dispatch(onlineUsers(onlineUserList));
        });

        socket.on('userConnected', (onlineUserList) => {
            store.dispatch(userConnected(onlineUserList));
        });

        socket.on('userLeft', (whichUserLeft) => {
            store.dispatch(userLeft(whichUserLeft));
        });
    }
}
