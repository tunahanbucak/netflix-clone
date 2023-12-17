import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import Player from "./views/Player";
import TvShow from "./views/TvShow";
import Netflix from "./views/Netflix";
import MoviePage from "./views/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tv" element={<TvShow />} />
        <Route path="/" element={<Netflix />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
