import { Button } from "@mui/material";


const Menu = () => {

    return ( 
        <div className="menu">
            <h1>Menu</h1>    
            <Button variant="contained" href="/reservation">Check Reservation</Button>
            <Button variant="contained" href="/guest">Guest Information</Button>
            <Button variant="contained" href="/rooms">Check Rooms</Button>
            <Button variant="contained" href="/staff">Check Staff</Button>
            <Button variant="contained" href="/invoice">invoice</Button>
        </div>
     );
}
 
export default Menu;