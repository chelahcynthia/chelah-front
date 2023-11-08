import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/dashboard/Home";
import { Route, Routes, Outlet } from "react-router-dom";
import ProtectRoutes from "./components/ProtectRoutes";
import { useState } from "react";

function App() {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(true);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<Login isAuthenticated={userIsAuthenticated} />}
        />
        <Route
          path="register"
          element={<Register isAuthenticated={userIsAuthenticated} />}
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
