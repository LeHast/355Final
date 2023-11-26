const dbConnection = require('../../database/mySQLconnect');

require('dotenv').config();

const getReservations = async (ctx) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM Reservation`;
        dbConnection.query({
            sql: query,
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Reservation.js::getReservation", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Reservation.js::getReservation.", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}

const getReservationID= async (ctx) => {
    return new Promise((resolve, reject) => {
        const ReservationID = ctx.params.id;

        const query = `SELECT * FROM Reservation WHERE ReservationID = ?`;
        dbConnection.query({
            sql: query,
            values: [ReservationID]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Reservation.js::getReservationID", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Reservation.js::getReservationID", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}

const getReservationRoomNumber= async (ctx) => {
    return new Promise((resolve, reject) => {
        const ReservationID = ctx.params.id;

        const query = `SELECT * FROM ReservationRoom WHERE ReservationID = ?`;
        dbConnection.query({
            sql: query,
            values: [ReservationID]
        },(error, tuples) => {
            if (error) {
                console.log("Connection error in Controllers::Reservation.js::getReservationRoomNumber", error);
                return reject(error);
            }
            ctx.body = tuples;
            ctx.status = 200;
            return resolve();
        });
    }).catch(err => {
        console.log("Database connection error in Controllers::Reservation.js::getReservationRoomNumber", err);
        // The UI side will have to look for the value of status and
        // if it is not 200, act appropriately.
        ctx.body = [];
        ctx.status = 500;
    });
}


module.exports = {
    getReservations,
    getReservationID,
    getReservationRoomNumber
};