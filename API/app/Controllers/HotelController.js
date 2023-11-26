const dbConnection = require('../../database/mySQLconnect');

require('dotenv').config();

const getHotel = async (ctx) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Hotel`;
        dbConnection.query({
            sql: query,
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Hotel.js::getHotel", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Hotel.js::getHotel.", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}

const getHotelID = async (ctx) => {
    return new Promise((resolve, reject) => {
        const HotelID = ctx.params.id;

        const query = `SELECT * FROM room WHERE HotelID = ?`;
        dbConnection.query({
            sql: query,
            values: [HotelID]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Hotel.js::getHotelID", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Hotel.js::getHotelID", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}


module.exports = {
    getHotel,
    getHotelID,
};