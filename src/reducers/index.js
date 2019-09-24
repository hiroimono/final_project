import searchReducer from './searchReducer';

import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    search: searchReducer,
});

export default AllReducers;

// import chatroomReducer from './chatroomReducer';
// chatroom: chatroomReducer
