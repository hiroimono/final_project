import friendshipsReducer from './friendshipsReducer';
import chatroomReducer from './chatroomReducer';

import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    friendships: friendshipsReducer,
    chatroom: chatroomReducer
});

export default AllReducers;
