const friendshipsReducer = ( state = {}, action ) => {
    console.log('/////////////////// FriendshipsReducer///////////////////');
    // if (action.type === 'GET_FRIENDS_AND_WANNABES') {
    //     console.log('GET_FRIENDS_AND_WANNABES in reducer, action: ', action);
    //     console.log('GET_FRIENDS_AND_WANNABES in reducer, state: ', state);
    //     state = {
    //         ...state,
    //         friendAndWannabes: action.friendAndWannabes
    //     };
    // }
    // if (action.type === 'ACCEPT_FRIEND_REQUEST') {
    //     console.log('ACCEPT_FRIEND_REQUEST in reducer, action: ', action);
    //     console.log('ACCEPT_FRIEND_REQUEST in reducer, state: ', state);
    //     state = {
    //         ...state,
    //         acceptFriendRequest: action.acceptFriendRequest
    //     };
    // }
    // if (action.type === 'UNFRIEND') {
    //     console.log('UNFRIEND in reducer, action: ', action);
    //     console.log('UNFRIEND in reducer, state: ', state);
    //     state = {
    //         ...state,
    //         unfriend: action.unfriend
    //     };
    // }
    console.log('state: ', state);
    console.log('/////////////////// FriendshipsReducer///////////////////');
    return state;
};

export default friendshipsReducer;
