import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const ForumRoutes = () => {
  let { user } = useContext(AuthContext);
  return user ? <Navigate to="/giris/" /> : <Outlet />;
};

export default ForumRoutes;
