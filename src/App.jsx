import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Home from "./pages/Home";
import Giris from "./pages/Giris";
import Header from "./components/Header";
import Break from "./components/Break";
import Forumlar from "./pages/Forumlar";
import ForumDetay from "./pages/ForumDetay";
import ForumEkle from "./pages/ForumEkle";
import Ayarlar from "./pages/Ayarlar";
import ForumSil from "./pages/ForumSil";
import ForumRoutes from "./routes/ForumRoutes";
import ForumDuzenle from "./pages/ForumDuzenle";
import Profil from "./pages/Profil";
import Kayit from "./pages/Kayit";
import EmailDegistir from "./pages/EmailDegistir";
import SifreDegistir from "./pages/SifreDegistir";
import ProfilDuzenle from "./pages/ProfilDuzenle";
import EmailIletildi from "./pages/EmailIletildi";
import SifreSifirlamaEmail from "./pages/SifreSifirlamaEmail";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Break />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/giris/" element={<Giris />} />
            <Route path="/kayit-ol/" element={<Kayit />} />
            <Route path="/forumlar/" element={<Forumlar />} />
            <Route path="/profil/:slug/" element={<Profil />} />
            <Route path="/forum/:id/" element={<ForumDetay />} />
            <Route path="/email-iletildi/" element={<EmailIletildi />} />
            <Route path="/sifre-sifirlama/" element={<SifreSifirlamaEmail />} />
            <Route element={<ForumRoutes />}>
              <Route
                path="/profil/:slug/duzenle/"
                element={<ProfilDuzenle />}
              />
              <Route path="/forum/:id/sil/" element={<ForumSil />} />
              <Route path="/email-degistir/" element={<EmailDegistir />} />
              <Route path="/forum/:id/duzenle/" element={<ForumDuzenle />} />
              <Route path="/forum-ekle/" element={<ForumEkle />} />
              <Route path="/ayarlar/" element={<Ayarlar />} />
              <Route path="/sifre-degistir/" element={<SifreDegistir />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
