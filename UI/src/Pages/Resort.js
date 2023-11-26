import React from 'react';
import { useState, useEffect } from 'react';
import API from '../API_Interface/API_Interface.js'

import { Button } from "@mui/material";

const Resort = () => {
    const [data, setData] = useState([]);
    const [reservation, SetReservation] = useState('');
    
    const GetReservationID = () => {
        const api = new API();
        async function getRoutes() {
            const routesJSONString = await api.CheckReservationID(reservation);
            setData(routesJSONString.data);
        }
        getRoutes();
    }

    const ReservationInformation = data.map((item) => {
        return(
            <form className="GuestInformation">
            <div>
                <label htmlFor="reservationId">Reservation ID: {item.ReservationID}</label>
            </div>
            <div>
                <label htmlFor="checkIn">Check-In: {item.CheckInTime}</label>
            </div>
            <div>
                <label htmlFor="checkOut">Check-Out: {item.CheckOutTime}</label>
            </div>
            <div>
                <label htmlFor="roomNumber">GuestID #: {item.GuestID}</label>
            </div>
            <button>Create/Modify</button>

        </form>

        );
    });

    return (
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>

            <h1>Check Reservation</h1>
            <div className="resort-form">
                <label htmlFor="checkReservationId">Reservation ID</label>
                <input type="text" onChange={(e) => SetReservation(e.target.value)} required />
                <button onClick={()=> GetReservationID()} >Check</button>
            </div>

            <h2>Reservaiton Information</h2>
            {ReservationInformation}

            <h2>Create/Modify Information</h2>
            <form className="GuestInformation">
                <div>
                    <label htmlFor="reservationId">Reservation ID: </label>
                    <input type="text" id="reservationId" required />
                </div>
                <div>
                    <label htmlFor="checkIn">Check-In: </label>
                    <input type="text" id="checkIn" required />
                </div>
                <div>
                    <label htmlFor="checkOut">Check-Out: </label>
                    <input type="text" id="checkOut" required />
                </div>
                <div>
                    <label htmlFor="roomNumber">Room #: </label>
                    <input type="text" id="roomNumber" required />
                </div>
                <button>Create/Modify</button>

            </form>
        </div>
    );}
 
export default Resort;