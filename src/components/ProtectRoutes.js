import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectRoutes;