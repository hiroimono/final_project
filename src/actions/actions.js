import axios from '../axios';

// export async function getFriendAndWannabes () {
//     const { data } = await axios.get('/getfriendandwannabes.json');
//     return {
//         type: 'GET_FRIENDS_AND_WANNABES',
//         friendAndWannabes: data,
//     };
// }
//
// export async function newChatMessage(newMessageData){
//     console.log('newChatMessage action is triggered!!!', newMessageData);
//     return {
//         type: 'ACTION_SHOW_NEW_MESSAGES',
//         newMessageData
//     };
// }
//
// export async function loadLast10Messages(messages){
//     return {
//         type: 'ACTION_SHOW_LAST_10_MESSAGES',
//         last10Messages: messages
//     };
// }
//
// export async function onlineUsers(onlineUserList) {
//     return {
//         type: 'ACTION_ONLINE_USER_LIST',
//         onlineUserList
//     };
// }
//
// export async function userConnected(onlineUserList) {
//     return {
//         type: 'ACTION_ONLINE_USER_CONNECTED',
//         onlineUserList
//     };
// }
//
// export async function userLeft(whichUserLeft) {
//     return {
//         type: 'ACTION_WHICH_USER_LEFT',
//         whichUserLeft
//     };
// }
