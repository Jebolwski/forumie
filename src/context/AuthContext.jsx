import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import slugify from "../../node_modules/slugify/slugify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forumlar, setForumlar] = useState([]);
  const [varMi, setVarMi] = useState(false);
  const [forum, setForum] = useState([]);
  const [cevaplar, setCevaplar] = useState(null);
  const [eklesignal, setEklesignal] = useState(false);
  let username_slug = slugify(username);
  let navigate = useNavigate();

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
    } else {
      let alert = document.querySelector(".giris-alert-1");
      alert.classList.remove("display-none");
      alert.classList.add("giris-alert");
      alert.classList.add("display-block");
      setTimeout(() => {
        alert.classList.remove("display-block");
        alert.classList.add("display-none");
        alert.classList.remove("giris-alert");
      }, 5000);
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let registerUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/api/kayit-ol/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        username_slug: slugify(e.target.username.value),
      }),
    });
    if (response.status === 200) {
      navigate("/giris/");
    } else {
      let data = await response.json();
      if (data === "Bu kullanıcı adı mevcut.") {
        let alert = document.querySelector(".giris-alert-1");
        alert.innerHTML = "Bu kullanıcı adı mevcut.";
        alert.classList.remove("display-none");
        alert.classList.add("giris-alert");
        alert.classList.add("display-block");
        setTimeout(() => {
          alert.classList.remove("display-block");
          alert.classList.add("display-none");
          alert.classList.remove("giris-alert");
        }, 5000);
      }
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,

    loading: loading,
    varMi: varMi,
    forum: forum,
    cevaplar: cevaplar,

    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
