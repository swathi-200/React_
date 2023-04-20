import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login.jsx';
import Home from './home.jsx';
import Register from './register';
import Profile from './profile';
import Modalpopup from './modalpopup';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
         <Route path="/Home" element={<Home />}> </Route>
         <Route path="/Register" element={<Register />}></Route>
         <Route path="/Profile" element={<Profile />}></Route>
         <Route path="/Modal" element={<Modalpopup />}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
