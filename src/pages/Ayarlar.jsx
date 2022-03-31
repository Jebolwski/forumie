import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Ayarlar = () => {
  let { user } = useContext(AuthContext);
  return (
    <div className="col-10 col-lg-8 offset-1 offset-lg-2">
      <p>{user.username}</p>
      <p>{user.email}</p>
      {user.is_superuser ? (
        <p>Adminsin</p>
      ) : user.is_authenticated ? (
        <p>Normal kullanıcısın</p>
      ) : null}
    </div>
  );
};

export default Ayarlar;
