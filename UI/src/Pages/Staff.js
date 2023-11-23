import React from 'react';
import { Button } from "@mui/material";

const Staff = () => {
    return (
        
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>
            <h1>Check Staff</h1>
            <div>
                <div className="resort-form">
                    <label htmlFor="checkFirstName">ID</label>
                    <input type="text" id="checkFirstName" required />
                </div>
                <button>Check</button>
            </div>

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
