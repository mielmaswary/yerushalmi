import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import fetchYoutubeVideos from "./fetchYoutubeVideos/fetchYoutubeVideos";
import { useEffect } from "react";
const url = "www.example.com";
function App() {
  const [videos, setvideos] = useState();
  useEffect(() => {
    setvideos(fetchYoutubeVideos(url, API_KEY));
  }, []);
  const styles = {
    coverImgContainer: {
      position: "relative",
      width: 300,
      height: 150,
      margin: "auto",
    },
    coverImage: {
      width: "100%",
    },
    playBtn: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%)",
      height: 80,
    },
  };
  return <div className="App"></div>;
}

export default App;
