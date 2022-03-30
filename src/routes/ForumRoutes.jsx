import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const ForumRoutes = () => {
  let { user } = useContext(AuthContext);
  return user && user.is_superuser ? <Outlet /> : <Navigate to="/giris/" />;
};

export default ForumRoutes;
