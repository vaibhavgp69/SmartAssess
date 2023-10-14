import { Dashboard } from "./components/Dashboard.js";
import {Register} from "./components/Register.js"
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import {Topbar} from "./components/Navbar.js";


function App() {
  return (
    <div className="bg-indigo-50	">
    <Topbar/>
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
