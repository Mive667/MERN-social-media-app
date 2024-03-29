import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "sences/homePage";
import LoginPage from "sences/loginPage";
import ProfilePage from "sences/profilePage";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>;

  return <div className="app"></div>;
}

export default App;
