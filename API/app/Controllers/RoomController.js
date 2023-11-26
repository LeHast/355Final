const dbConnection = require('../../database/mySQLconnect');

require('dotenv').config();

const getRooms = async (ctx) => {
    return new Promise((resolve, reject) => {
        console.log('city');
        const query = `SELECT * FROM Room`;
        dbConnection.query({
            sql: query,
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in getHotelsInCity", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in getHotelsInCity.", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}

const getRoomID = async (ctx) => {
    return new Promise((resolve, reject) => {
        const RoomID = ctx.params.id;

        const query = `SELECT * FROM Room WHERE RoomID = ?`;
        dbConnection.query({
            sql: query,
            values: [RoomID]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in getHotelsInCity", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in getHotelsInCity.", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}


module.exports = {
    getRooms,
    getRoomID,
};
