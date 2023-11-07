
import './App.css';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/dashboard/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/dashboard/Navbar";
import SideBar from "./components/dashboard/SideBar";


function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <div className="flex w-full justify-between">
                <SideBar />
                <div className="grow h-[100vh]">
                  <Navbar />
                  <Outlet />
                </div>
              </div>
            }
          >
            
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
