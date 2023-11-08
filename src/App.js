import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/dashboard/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import ProtectRoutes from "./components/ProtectRoutes";
import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalstorage";
import { useNavigate } from "react-router-dom";

function App() {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const navigate = useNavigate()

  useEffect(()=>{
    if(userIsAuthenticated){
      navigate("/")
    }
  },[userIsAuthenticated])

  
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<Login setUserIsAuthenticated={setUserIsAuthenticated} isAuthenticated={userIsAuthenticated} />}
        />
        <Route
          path="register"
          element={<Register setUserIsAuthenticated={setUserIsAuthenticated} isAuthenticated={userIsAuthenticated} />}
        />
        <Route
          path="/"
          element={
            <ProtectRoutes
              isAuthenticated={userIsAuthenticated}
              Component={Home}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
