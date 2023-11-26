const dbConnection = require('../../database/mySQLconnect');

require('dotenv').config();

const getStaff = async (ctx) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Staff`;
        dbConnection.query({
            sql: query,
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Staff.js::getStaff", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Staff.js::getStaff.", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}

const getStaffID = async (ctx) => {
    return new Promise((resolve, reject) => {
        const StaffID = ctx.params.id;

        const query = `SELECT * FROM Staff WHERE StaffID = ?`;
        dbConnection.query({
            sql: query,
            values: [StaffID]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Staff.js::getStaffID", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Staff.js::getStaffID", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}


module.exports = {
    getStaff,
    getStaffID,
};