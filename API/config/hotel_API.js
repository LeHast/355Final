const router = require('koa-router')({
    prefix: '/api/v1'
});

router.get('/', function (ctx) {
    console.log('router.get(/)');
    return ctx.body = 'Hotel :D';
});


const RoomController = require('../app/Controllers/Room.js');
const roomRouter = require('koa-router')({
    prefix: '/room'
});

roomRouter.get('/all', RoomController.getRooms);
roomRouter.get('/getID/:id', RoomController.getRoomID);

router.use(
    '',
    roomRouter.routes()

);

module.exports = function (app) {
    app.use(router.routes());
    app.use(router.allowedMethods());
};
