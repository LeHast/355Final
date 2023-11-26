import React from 'react';
import { useState, useEffect } from 'react';
import API from '../API_Interface/API_Interface.js'

import { Button } from "@mui/material";

const Guest = () => {
	const [data, setData] = useState([]);
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');

    const GetGuestByName = () => {
        console.log("Getinfo");
        const api = new API();
        async function getRoutes() {
            const routesJSONString = await api.CheckGuestByName(fName, lName);
            setData(routesJSONString.data);
        }
        getRoutes();
    }


    const GuestInformationData = data.map((item) => {
        return(
            <form className="GuestInformation">
                <div>
                    <label htmlFor="guestId">Guest ID: {item.GuestID}</label>
                </div>
                <div>
                    <label htmlFor="firstName">First Name: {item.FirstName}</label>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: {item.LastName}</label>
                </div>
                <div>
                    <label htmlFor="creditCardInfo">Credit Card Info: {item.CreditCardNumber}</label>
                </div>
                <div>
                    <label htmlFor="address">Address: {item.Address}</label>
                </div>
                <div>
                    <label htmlFor="phone">Phone #: {item.PhoneNumber}</label>
                </div>
            </form>
        )
    });
    console.log(GuestInformationData);
    return ( 
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>
            <h1>Check Guest</h1>
            <div>
                <div className="resort-form">
                    <label>Guest First Name</label>
                    <input type="text" onChange={(e) => setfName(e.target.value)} required />
                </div>
                
                <div className="resort-form">
                    <label>Guest Last Name</label>
                    <input type="text" onChange={(e) => setlName(e.target.value)} required />
                </div>
                    <button onClick={()=>GetGuestByName()} >Check</button>
            </div>

            <h2>Guest Information</h2>
            {GuestInformationData}

            <h2>Make A Guest</h2>
            <form className="GuestInformation">
            <div>
                <label htmlFor="guestId">Guest ID: </label>
                <input type="text" id="guestId" required />
            </div>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" required />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" required />
            </div>
            <div>
                <label htmlFor="creditCardInfo">Credit Card Info: </label>
                <input type="text" id="creditCardInfo" required />
            </div>
            <div>
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" required />
            </div>
            <div>
                <label htmlFor="phone">Phone #: </label>
                <input type="text" id="phone" required />
            </div>
        </form>

        </div>
     );
}
 
export default Guest;