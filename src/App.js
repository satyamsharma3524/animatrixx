import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { setMovies } from "./features/movie/movieSlice";
import "./App.css";
import apiServices from "./helpers/apiServices";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await apiServices.fetchMangaChapters();
        if (response) {
          dispatch(
            setMovies({
              recommend: response.recommend || [],
              newDisney: response.newDisney || [],
              original: response.original || [],
              trending: response.trending || [],
            })
          );
        } else {
          alert("Something went wrong !!");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
