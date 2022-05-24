import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const ForumRoutes = () => {
  let { user } = useContext(AuthContext);
  console.log("fdddddaaa", user);
  return user ? <Navigate to="/forumlar/" /> : <Outlet />;
};

export default ForumRoutes;
