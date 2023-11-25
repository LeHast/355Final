import React from 'react';
import { useState, useEffect } from 'react';

import { Button } from "@mui/material";
import API from '../API_Interface/API_Interface.js'

const Rooms = () => {
	const [data, setData] = useState([]);
    const [RoomNum, setRoomNum] = useState('');

    const Getinfo = () => {
        console.log("Getinfo");
        const api = new API();
        async function getRoutes() {
            const routesJSONString = await api.CheckRoom(RoomNum);
            setData(routesJSONString.data);
        }
        getRoutes();
    }

    const GetAllRooms = () => {
        console.log("Getinfo");
        const api = new API();
        async function getRoutes() {
            const routesJSONString = await api.CheckRoomID(RoomNum);
            console.log(routesJSONString.data);
            setData(routesJSONString.data);
        }
        getRoutes();
    }

    const roomInformation = data.map((item) => {
        console.log(item);
        return(
            <form className="RoomInformation" >
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '18px' }}>
                    <label htmlFor="roomNumber">Room #: {item.RoomID} </label>
                    <label htmlFor="roomType">Type: {item.Type} </label>
                    <label htmlFor="beds">Beds: {item.NumberOfBeds}</label>
                    <label htmlFor="price">Price: {item.Price} </label>
                    <label htmlFor="HotelID">Price: {item.HotelID} </label>
                </div>
            </form>
        );
    });

    return (
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>

            <h1>Check Room</h1>
            <div className="resort-form">
                <label htmlFor="checkRoomId">Room #</label>
                <input type="text" id="checkRoomId"  onChange={(e) => setRoomNum(e.target.value)} required />
                <button onClick={() => Getinfo()}>Check</button>
                <button onClick={() => Getinfo()}>Check All Rooms</button>
            </div>

            <h2>Room Information</h2>
            {roomInformation}
            <h2>Create Room</h2>
            <form className="GuestInformation">
                <div>
                    <label htmlFor="roomNumber">Room #: </label>
                    <input type="text" id="roomNumber" required />
                </div>
                <div>
                    <label htmlFor="roomType">Type: </label>
                    <input type="text" id="roomType" required />
                </div>
                <div>
                    <label htmlFor="beds">Beds: </label>
                    <input type="text" id="beds" required />
                </div>
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="text" id="price" required />
                </div>
            </form>
        </div>
    );
};

export default Rooms;
