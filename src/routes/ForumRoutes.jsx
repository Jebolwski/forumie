import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const ForumRoutes = () => {
  let { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/forumlar/" />;
};

export default ForumRoutes;
