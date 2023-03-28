import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import NotesPages from "../pages/NotesPages";
import SignupPage from "../pages/SignupPage";
import RequiredAuth from "./RequiredAuth";


function App() {
  
  return (

    <div className="App">

      <BrowserRouter>
        <ul>
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
        <Routes>
          <Route index element={ <RequiredAuth> <NotesPages /> </RequiredAuth> }></Route>
          <Route path="/login" element= { <LoginPage /> }></Route>
          <Route path="/signup" element= { <SignupPage /> }></Route>
          <Route path="/logout" element= { <LogoutPage /> }></Route>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
