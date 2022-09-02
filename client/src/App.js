import './App.css';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DHome from './components/DHome/DHome';
import DVehicles from './components/DVehicles/DVehicles';
import DUsers from './components/DUsers/DUsers';
import DParking from './components/DParking/DParking';
import DEarning from './components/DEarning/DEarning';
import DChangePass from './components/DChangePass/DChangePass';
import DParkingLot from './components/DParking/DParkingLot';
import NotFound from './components/NotFound/NotFound';
// import './css/style.scss';

// import './charts/ChartjsConfig';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='home' element={<Login></Login>}></Route>
        <Route path='dashboard' element={<Home/>}>
          <Route path='home' element={<DHome></DHome>}></Route>
          <Route path='vehicles' element={<DVehicles></DVehicles>}></Route>
          <Route path='users' element={<DUsers></DUsers>}></Route>
          <Route path='parking' element={<DParking></DParking>}></Route>
          <Route path='earning' element={<DEarning></DEarning>}></Route>
          <Route path='change-pass' element={<DChangePass></DChangePass>}></Route>
          <Route path='parking/:id' element={<DParkingLot></DParkingLot>}></Route>
          {/* <Route path='logout' element={<Login></Login>}></Route> */}
        </Route>
        <Route path='logout' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
