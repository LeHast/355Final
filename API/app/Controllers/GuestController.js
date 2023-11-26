const dbConnection = require('../../database/mySQLconnect');

require('dotenv').config();

const getGuests = async (ctx) => {
    return new Promise((resolve, reject) => {
        const fName = ctx.params.fName;
        const lName = ctx.params.lName;
        
        const query = `SELECT * FROM guest WHERE FirstName like ? AND LastName like ? LIMIT 1`;
        dbConnection.query({
            sql: query,
            values: [fName, lName]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Guest.js::getGuest", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Guest.js::getGuest.", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}

const getGuestID = async (ctx) => {
    return new Promise((resolve, reject) => {
        const GuestID = ctx.params.id;

        const query = `SELECT * FROM Guest WHERE GuestID = ?`;
        dbConnection.query({
            sql: query,
            values: [GuestID]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Guest.js::getGuestID", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Guest.js::getGuestID", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}


module.exports = {
    getGuests,
    getGuestID,
};