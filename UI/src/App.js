import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

import './App.css';

import Login from './Components/Login';
import Menu from './Pages/Menu';
import Resort from './Pages/Resort';
import Guest from './Pages/Guest';
import Staff from './Pages/Staff';
import Rooms from './Pages/Rooms';

function App() {
  return (
		<Router className='Router'>
			<Routes>
				<Route path="/" element={<Login /> } />
				<Route path="/menu" element={<Menu /> } />
				<Route path="/reservation" element={<Resort /> } />
				<Route path="/guest" element={<Guest /> } />
				<Route path="/staff" element={<Staff /> } />
				<Route path="/rooms" element={<Rooms /> } />
			</Routes>	
		</Router>

  );
}

export default App;
