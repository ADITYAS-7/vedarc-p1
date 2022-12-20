import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header";
import DrawerAppBar from "./components/Header_2";
import Hero from "./components/Hero";
import AppDrawer from "./components/Drawer";
import Categories from "./components/Categories";
import { CssBaseline } from "@mui/material";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {" "}
      <CssBaseline />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />

          <Route path="/Contact" element={<Contact />} />

          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
