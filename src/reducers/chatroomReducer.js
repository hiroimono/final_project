const chatroomReducer = ( state = {}, action ) => {
    console.log('/////////////////// ChatroomReducer-START///////////////////');
    // if (action.type === 'ACTION_SHOW_NEW_MESSAGES') {
    //     // console.log('ACTION_SHOW_MESSAGES in reducer, action: ', action);
    //     console.log('ACTION_SHOW_MESSAGES in reducer, state (before): ', state);
    //     state = {
    //         ...state,
    //         newMessageData: action.newMessageData
    //     };
    // }
    //
    // if (action.type === 'ACTION_SHOW_LAST_10_MESSAGES') {
    //     // console.log('ACTION_SHOW_LAST_10_MESSAGES in reducer, action: ', action);
    //     console.log('ACTION_SHOW_LAST_10_MESSAGES in reducer, state (before): ', state);
    //     state = {
    //         ...state,
    //         last10Messages: action.last10Messages
    //     };
    // }
    //
    // if (action.type === 'ACTION_ONLINE_USER_LIST') {
    //     // console.log('ACTION_SHOW_LAST_10_MESSAGES in reducer, action: ', action);
    //     console.log('ACTION_ONLINE_USER_LIST in reducer, state (before): ', state);
    //     state = {
    //         ...state,
    //         onlineUserList: action.onlineUserList
    //     };
    // }
    //
    // if (action.type === 'ACTION_ONLINE_USER_CONNECTED') {
    //     // console.log('ACTION_SHOW_LAST_10_MESSAGES in reducer, action: ', action);
    //     console.log('ACTION_ONLINE_USER_CONNECTED in reducer, state (before): ', state);
    //     state = {
    //         ...state,
    //         onlineUserList: action.onlineUserList
    //     };
    // }
    //
    // if (action.type == 'ACTION_WHICH_USER_LEFT') {
    //     state = {
    //         ...state,
    //         onlineUserList: state.onlineUserList.filter(
    //             user =>
    //                 user.id != action.whichUserLeft.id
    //         )
    //     };
    // }

    console.log('In chatroomReducer, state (after): ', state);
    console.log('/////////////////// ChatroomReducer-END///////////////////');
    return state;
};

export default chatroomReducer;
