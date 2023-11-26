const router = require('koa-router')({
    prefix: '/api/v1'
});

router.get('/', function (ctx) {
    console.log('router.get(/)');
    return ctx.body = 'Hotel :D';
});


const RoomController = require('../app/Controllers/RoomController.js');
const roomRouter = require('koa-router')({
    prefix: '/room'
});

roomRouter.get('/all', RoomController.getRooms);
roomRouter.get('/getID/:id', RoomController.getRoomID);

//
// Staff router
//

const StaffController = require('../app/Controllers/StaffController.js');
const staffRouter = require('koa-router')({
    prefix: '/staff'
});

staffRouter.get('/all', StaffController.getStaff);
staffRouter.get('/:id', StaffController.getStaffID);

//
// Guest router
//

const GuestController = require('../app/Controllers/GuestController.js');
const guestRouter = require('koa-router')({
    prefix: '/guest'
});

guestRouter.get('/:fName/:lName', GuestController.getGuests);
guestRouter.get('/:id', GuestController.getGuestID);



//
// Reservation router
//

const ReservationController = require('../app/Controllers/ReservationController.js');
const reservationRouter = require('koa-router')({
    prefix: '/reservation'
});

reservationRouter.get('/all', ReservationController.getReservations);
reservationRouter.get('/:id', ReservationController.getReservationID);
reservationRouter.get('/:id/roomNumber', ReservationController.getReservationRoomNumber)


//
// Hotel router
//

const HotelController = require('../app/Controllers/HotelController.js');
const hotelRouter = require('koa-router')({
    prefix: '/hotel'
});

hotelRouter.get('/all', HotelController.getHotel);
hotelRouter.get('/:id', HotelController.getHotelID);





router.use(
    '',
    roomRouter.routes(),
    staffRouter.routes(),
    guestRouter.routes(),
    reservationRouter.routes(),
    hotelRouter.routes(),


);


module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
