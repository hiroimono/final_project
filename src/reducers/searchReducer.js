const searchReducer = ( state = {}, action ) => {
    console.log('/////////////////// searchReducer-START///////////////////');
    if (action.type === 'SEACH_WITH_SEARCHTERM') {
        // console.log('SEACH_WITH_SEARCHTERM in reducer, action: ', action);
        console.log('SEACH_WITH_SEARCHTERM action in reducer, state (before): ', state);
        state = {
            ...state,
            searchTerm: action.searchTerm
        };
    }

    if (action.type === 'ADD_TRACKS_TO_PODCASTS') {
        // console.log('ADD_TRACKS_TO_PODCASTS in reducer, action: ', action);
        console.log('ADD_TRACKS_TO_PODCASTS in reducer, state (before): ', state);
        state = {
            ...state,
            tracks: action.tracks
        };
    }
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

    console.log('In searchReducer, state (after): ', state);
    console.log('/////////////////// searchReducer-END///////////////////');
    return state;
};

export default searchReducer;
