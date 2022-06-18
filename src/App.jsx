import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Home from "./pages/Ev/Home";
import Giris from "./pages/KayitGiris/Giris";
import Header from "./components/Header";
import Break from "./components/Break";
import Forumlar from "./pages/Forum/Forumlar";
import ForumDetay from "./pages/Forum/ForumDetay";
import Ayarlar from "./pages/Ayarlar/Ayarlar";
import ForumSil from "./pages/Forum/ForumSil";
import ForumRoutes from "./routes/ForumRoutes";
import ForumDuzenle from "./pages/Forum/ForumDuzenle";
import Profil from "./pages/Profil/Profil";
import Kayit from "./pages/KayitGiris/Kayit";
import EmailDegistir from "./pages/EmailDegistir/EmailDegistir";
import SifreDegistir from "./pages/EmailSifreDegistirme/SifreDegistir";
import ProfilDuzenle from "./pages/Profil/ProfilDuzenle";
import EmailIletildi from "./pages/EmailSifreDegistirme/EmailIletildi";
import SifreSifirlamaEmail from "./pages/EmailSifreDegistirme/SifreSifirlamaEmail";
import SifreSifirlamaYeniSifre from "./pages/EmailSifreDegistirme/SifreSifirlamaYeniSifre";
import SifreDegisti from "./pages/SifreDegisti/SifreDegisti";
import EmailRoutes from "./routes/EmailRoute";
import Anketler from "./pages/Anketler/Anketler";
import AnketEkle from "./pages/Anketler/AnketEkle";
import AnketDetay from "./pages/Anketler/AnketDetay";
import AnketAnaliz from "./pages/Anketler/AnketAnaliz";
import AnketDuzenle from "./pages/Anketler/AnketDuzenle";
//http://localhost:3000/sifre-sifirla/4dbfec08a67c66159e/
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Break />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giris/" element={<Giris />} />
            <Route path="/kayit-ol/" element={<Kayit />} />
            <Route path="/forumlar/" element={<Forumlar />} />
            <Route path="/anketler/" element={<Anketler />} />
            <Route path="/anket/:id/" element={<AnketDetay />} />
            <Route path="/profil/:slug/" element={<Profil />} />
            <Route path="/forum/:id/" element={<ForumDetay />} />
            <Route
              path="/sifre-sifirla/:id/"
              element={<SifreSifirlamaYeniSifre />}
            />
            <Route element={<EmailRoutes />}>
              <Route path="/sifre-degisti/" element={<SifreDegisti />} />
              <Route path="/email-iletildi/" element={<EmailIletildi />} />

              <Route
                path="/sifre-sifirlama/"
                element={<SifreSifirlamaEmail />}
              />
            </Route>

            <Route element={<ForumRoutes />}>
              <Route
                path="/profil/:slug/duzenle/"
                element={<ProfilDuzenle />}
              />
              <Route path="/forum/:id/sil/" element={<ForumSil />} />
              <Route path="/anketler/ekle/" element={<AnketEkle />} />
              <Route path="/anket/:id/duzenle/" element={<AnketDuzenle />} />
              <Route path="/anket/:id/analiz/" element={<AnketAnaliz />} />
              <Route path="/email-degistir/" element={<EmailDegistir />} />
              <Route path="/forum/:id/duzenle/" element={<ForumDuzenle />} />
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
