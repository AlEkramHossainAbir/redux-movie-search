import { Route, Routes } from "react-router-dom";
// import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetails /> } />
        <Route element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
