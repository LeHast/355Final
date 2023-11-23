import { Button } from "@mui/material";


const Resort = () => {
    return (
        <div className="resort">
            <Button variant="contained" href="/menu">Menu</Button>

            <h1>Check Reservation</h1>
            <div className="resort-form">
                <label htmlFor="checkReservationId">Reservation ID</label>
                <input type="text" id="checkReservationId" required />
                <button>Check</button>
            </div>

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