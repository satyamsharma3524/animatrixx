import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import {
  selectRecommend,
  selectNewDisney,
  selectOriginal,
  selectTrending,
} from "../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const recommends = useSelector(selectRecommend);
  const newDisneys = useSelector(selectNewDisney);
  const originals = useSelector(selectOriginal);
  const trending = useSelector(selectTrending);

  useEffect(() => {
    if (!userName) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://server.animatrixx.in/api/manga/10/chapters/"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        dispatch(
          setMovies({
            recommend: data.recommend || [],
            newDisney: data.newDisney || [],
            original: data.original || [],
            trending: data.trending || [],
          })
        );
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends movies={recommends} />
      <NewDisney movies={newDisneys} />
      <Originals movies={originals} />
      <Trending movies={trending} />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
