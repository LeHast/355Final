import { Button } from "@mui/material";

const Guest = () => {
    return ( 
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>
            <h1>Check Guest</h1>
            <div>
                <div className="resort-form">
                    <label>Guest First Name</label>
                    <input type="text" required />
                </div>
                
                <div className="resort-form">
                    <label>Guest Last Name</label>
                    <input type="text" required />
                </div>
                    <button>Check</button>
            </div>

            <h2>Guest Information</h2>
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