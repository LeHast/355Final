import React from 'react';
import { useState, useEffect } from 'react';
import API from '../API_Interface/API_Interface.js'

import { Button } from "@mui/material";
const Staff = () => {
    const [data, setData] = useState([]);
    const [inputID, SetinputID] = useState('');
    
    const GetData = () => {
        const api = new API();
        async function getRoutes() {
            const routesJSONString = await api.CheckStaff(inputID);
            setData(routesJSONString.data);
        }
        getRoutes();
    }

    const StaffInformation = data.map((item) => {
        return(
            <form className="GuestInformation">
            <div>
                <label htmlFor="staffId">Staff ID: {item.StaffID}</label>
            </div>
            <div>
                <label htmlFor="staffFirstName">First Name: {item.FirstName}</label>
            </div>
            <div>
                <label htmlFor="staffLastName">Last Name: {item.LastName}</label>
            </div>
            <div>
                <label htmlFor="job">Job: {item.Job}</label>
            </div>
            <div>
                <label htmlFor="age">Age: {item.Age}</label>
            </div>
            <div>
                <label htmlFor="staffPhone">Phone #: {item.PhoneNumber}</label>
            </div>
            <div>
                <label htmlFor="staffJob">Job: {item.Job}</label>
            </div>
        </form>

        );
    });

    return (
        
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>
            <h1>Check Staff</h1>
            <div>
                <div className="resort-form">
                    <label htmlFor="checkFirstName">ID</label>
                    <input type="text" onChange={(e) => SetinputID(e.target.value)} required />
                </div>
                <button onClick={()=> GetData()} >Check</button>
            </div>

            <h2>Staff Information</h2>
            {StaffInformation}
            
            <h2>Staff Information</h2>
            <form className="GuestInformation">
                <div>
                    <label htmlFor="staffId">Staff ID: </label>
                    <input type="text" id="staffId" required />
                </div>
                <div>
                    <label htmlFor="staffFirstName">First Name: </label>
                    <input type="text" id="staffFirstName" required />
                </div>
                <div>
                    <label htmlFor="staffLastName">Last Name: </label>
                    <input type="text" id="staffLastName" required />
                </div>
                <div>
                    <label htmlFor="job">Job: </label>
                    <input type="text" id="job" required />
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <input type="text" id="age" required />
                </div>
                <div>
                    <label htmlFor="staffPhone">Phone #: </label>
                    <input type="text" id="staffPhone" required />
                </div>
                <div>
                    <label htmlFor="staffJob">Job: </label>
                    <input type="text" id="staffJob" required />
                </div>
            </form>
        </div>
    );
};

export default Staff;
