import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Giris from "./pages/Giris";
import Header from "./components/Header";
import Forumlar from "./pages/Forumlar";
import MMAForumlar from "./pages/MMAForumlar";
import SporForumlar from "./pages/SporForumlar";
import ForumDetay from "./pages/ForumDetay";
import ForumEkle from "./pages/ForumEkle";
import Ayarlar from "./pages/Ayarlar";
import ForumSil from "./pages/ForumSil";
import ForumRoutes from "./routes/ForumRoutes";
import ForumDuzenle from "./pages/ForumDuzenle";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/giris/" element={<Giris />} />
            <Route path="/forumlar/" element={<Forumlar />} />
            <Route path="/forumlar/spor/" element={<SporForumlar />} />
            <Route path="/forumlar/mma/" element={<MMAForumlar />} />
            <Route path="/forum/:id/" element={<ForumDetay />} />
            <Route element={<ForumRoutes />}>
              <Route path="/forum/:id/sil/" element={<ForumSil />} />
              <Route path="/forum/:id/duzenle/" element={<ForumDuzenle />} />
              <Route path="/forum-ekle/" element={<ForumEkle />} />
            </Route>
            <Route path="/ayarlar/" element={<Ayarlar />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
