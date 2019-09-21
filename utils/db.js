const spicedPg 			= require('spiced-pg');

let db;
if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    const { dbuser, dbpass } = require('./secret');
    // db = spicedPg(`postgres:postgres:postgres@localhost:5432/signers`);
    db = spicedPg(`postgres:${dbuser}:${dbpass}@localhost:5432/socialability`); // more secure option to login
}

exports.db;

// exports.registerUser = (name, surname, email, password) => {
//     return db.query(
//         `INSERT INTO userlist (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING id`, //$1, $2 ... very important
//         [name, surname, email, password]
//     );
// };
//
// exports.getPassword = email => {
//     return db.query(`SELECT password, id FROM userlist WHERE email=$1`, [email])
//         .then(({ rows }) => {
//             return rows;
//         });
// };
//
// exports.updateUserImage = (userId, img_url) => {
//     let userid = userId || null;
//     console.log('userId in database: ', userid);
//     return db.query(`UPDATE userlist SET img_url = $2 WHERE id = $1 RETURNING img_url`, [userid, img_url]);
// };
//
// exports.getUserInfo = (userId) => {
//     return db.query (`SELECT id, name, surname, img_url, bio FROM userlist WHERE id = $1`, [userId])
//         .then(({rows}) => {
//             // console.log('rows',rows[0]);
//             return rows[0];
//         });
// };
//
// exports.updateBio = (userId, bio) => {
//     return db.query(`UPDATE userlist SET bio = $2 WHERE id = $1 RETURNING bio`, [userId, bio]);
// };
//
// exports.searchUser = (searchterm) => {
//     return db.query(`SELECT * FROM userlist WHERE name || ' ' || surname ILIKE $1;`, [searchterm + '%'] )
//         .then(({rows}) => {
//             return rows;
//         });
// };
//
// exports.askCurrentFriendship = ( sender_id , receiver_id) => {
//     return db.query( `SELECT * FROM friendships WHERE (sender_id = $1 AND receiver_id = $2) OR (receiver_id = $1 AND sender_id = $2);`, [sender_id, receiver_id])
//         .then( ({rows}) => {
//             return rows[0];
//         });
// };
//
// exports.addFriendship = ( sender_id , receiver_id) => {
//     return db.query(`INSERT INTO friendships (sender_id, receiver_id) VALUES ($1, $2) RETURNING *;`, [sender_id, receiver_id])
//         .then(({rows}) => {
//             return rows[0];
//         });
// };
//
// exports.acceptFriendship = ( sender_id , receiver_id) => {
//     return db.query( `UPDATE friendships SET accepted = true WHERE (receiver_id=$1 AND sender_id = $2) OR (sender_id=$1 AND receiver_id = $2)
//       RETURNING receiver_id, sender_id, accepted, id;`, [sender_id, receiver_id] )
//         .then(({rows}) => {
//             return rows[0];
//         });
// };
//
// exports.endFriendship = ( sender_id , receiver_id) => {
//     return db.query( `DELETE FROM friendships WHERE (receiver_id=$1 AND sender_id = $2) OR (sender_id=$1 AND receiver_id = $2);`, [sender_id, receiver_id] )
//         .then(({rows}) => {
//             return rows[0];
//         });
// };
//
// exports.getFriendAndWannabes = (id) => {
//     return db.query(
//         `SELECT userlist.id, userlist.name, userlist.surname, userlist.img_url, friendships.accepted, friendships.sender_id
//         FROM friendships
//         JOIN userlist
//         ON (accepted = false AND sender_id = $1 AND receiver_id = userlist.id)
//         OR (accepted = false AND receiver_id = $1 AND sender_id = userlist.id)
//         OR (accepted = true AND receiver_id = $1 AND sender_id = userlist.id)
//         OR (accepted = true AND sender_id = $1 AND receiver_id = userlist.id);`, [id])
//         .then(({rows}) => {
//             console.log('db.getFriendAndWannabes, database side {rows}: ', rows);
//             return rows;
//         });
// };
//
// exports.saveMessagesWithUserInfo = async function (senderId, msg) {
//     let data = await db.query(
//         `INSERT INTO chats (sender_id, message) VALUES ($1, $2) RETURNING id;`,
//         [senderId, msg]
//     );
//     console.log('data: ', data);
//     let id = data.rows[0].id;
//     console.log('::::::id: ', id);
//     function fn(id) {
//         return db.query(
//             `SELECT userlist.id, userlist.name, userlist.surname, userlist.img_url, chats.message, chats.created_at
//             FROM chats
//             JOIN userlist
//             ON (sender_id = userlist.id)
//             WHERE (chats.id = $1);`, [id]);
//     }
//     let data2 = await fn(id);
//     console.log('data2: ', data2.rows[0]);
//     return data2.rows[0];
// };
//
// exports.loadLast10Messages = () => {
//     return db.query(
//         `SELECT userlist.id, userlist.name, userlist.surname, userlist.img_url, chats.message, chats.created_at
//         FROM chats
//         JOIN userlist
//         ON (sender_id = userlist.id)
//         ORDER BY created_at DESC
//         LIMIT 20;`
//     )
//         .then(({rows}) => {
//             // console.log('db.showLast10Messages, database side {rows}: ', rows);
//             return rows;
//         });
// };
//
// exports.getUsersByIds = function(uniqueOnlineUserIds) {
//     return db.query(`SELECT id, name, surname, img_url FROM userlist WHERE id = ANY($1);`, [uniqueOnlineUserIds]);
// };
