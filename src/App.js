import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFound from "./pages/NotFound/NotFound";
import PeoplePage from "./pages/PeoplePage/PeoplePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:peopleId" element={<PeoplePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
