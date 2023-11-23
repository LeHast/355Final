import React from 'react';
import { Button } from "@mui/material";

const Rooms = () => {
    return (
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>

            <h1>Check Reservation</h1>
            <div className="resort-form">
                <label htmlFor="checkRoomId">Room ID</label>
                <input type="text" id="checkRoomId" required />
                <button>Check</button>
            </div>

            <h2>Room Information</h2>
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
