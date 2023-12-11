import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { useState, useEffect } from "react";
import fetchYoutubeVideos from "./fetchYoutubeVideos/fetchYoutubeVideos";

// page
import Home from "./pages/Home";
import BeithHamidras from "./pages/BeithHamidras";
import Forum from "./pages/Forum";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";

// layouts 
import Navbar from './layouts/Navbar';

const url = "www.example.com";
const API_KEY = "your_api_key"; // Replace with your actual API key

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>} >
        <Route index element={<Home/>} />
        <Route path="beithHaMidras" element={<BeithHamidras/>} />
        <Route path="donations" element={<Donations/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="about" element={<About/>} />
        <Route path="forum" element={<Forum/>} />
    </Route>
  )
);

function App() {
  const [videos, setVideos] = useState();

  useEffect(() => {
    setVideos(fetchYoutubeVideos(url, API_KEY));
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
