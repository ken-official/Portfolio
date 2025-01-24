import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";  // Your Education component
import Experience from "./components/Experience/Experience";  // Your Experience component

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  // Preloader to show on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Update the document title on page load
  useEffect(() => {
    document.title = 'Mc Kenny Cuaresma'; // Set your desired title here
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar /> {/* Navbar for navigation */}
        <ScrollToTop /> {/* Smooth scrolling on route change */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/education" element={<Education />} /> {/* Education Route */}
          <Route path="/experience" element={<Experience />} /> {/* Experience Route */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Default redirect to Home */}
        </Routes>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
