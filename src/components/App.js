import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import NotesPages from "../pages/NotesPages";
import SignupPage from "../pages/SignupPage";
import RequiredAuth from "./RequiredAuth";
import "./App.css";


function App() { 
  const [click, setClick] = useState(null);
  const handleClick = () =>  setClick(!click); 

  return (
    <div className="App"> 
      <BrowserRouter>
      <div className="navbar">
        <div>
          <img src="/images/awtspain-dev-logo.svg" alt="logo" width={75} height={75}/>
        </div>

        <div className="hamburger" onClick={ handleClick }>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={click ? "links active" : "links"}>
          <li>
            <Link to="/">Notes</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/signup">Signup</Link>
          </li>

          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <main className='main-section'>
        <Routes>
          <Route index element={ <RequiredAuth> <NotesPages /> </RequiredAuth> }></Route>
          <Route path="/login" element= { <LoginPage /> }></Route>
          <Route path="/signup" element= { <SignupPage /> }></Route>
          <Route path="/logout" element= { <LogoutPage /> }></Route>
        </Routes>
      </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
