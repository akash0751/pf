
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/animation.css";
import Navbar from "./components/Navbar";
import profileImage from "./assets/profile.jpg";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
};



const PageTransition = ({ children }) => {
  return <div className="page-transition animate__animated animate__fadeIn">{children}</div>;
};

const DarkModeToggle = ({ onToggle, darkMode }) => (
  <div className="form-check form-switch d-flex justify-content-end me-3 mt-2">
    <input
      className="form-check-input"
      type="checkbox"
      checked={darkMode}
      onChange={onToggle}
      id="darkModeSwitch"
    />
    <label className="form-check-label ms-2" htmlFor="darkModeSwitch">
      Dark Mode
    </label>
  </div>
);

const Home = () => {
  useScrollToTop();
  return (
    <PageTransition>
      <div className="container text-center">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-circle shadow mb-4"
          style={{ width: "150px", height: "150px" }}
        />
        <h1 className="mt-2">Welcome to My Portfolio</h1>
        <p className="lead">I'm Akash, a Full Stack Developer passionate about web technologies.</p>
        <a
          href="/resume.jpg"
          download = "download.jpg"
          className="btn btn-primary mt-3"
        >
          Download Resume
        </a>
      </div>
      <br></br>
      <div>
        <About />
      </div>
      <br></br>
      <div>
        <Skills />
      </div>
      <br></br>
      <div>
        <Projects />
      </div>
      <br></br>
      <div>
        <Contact />
      </div>
      <br></br>
    </PageTransition>
  );
};




function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "bg-dark text-white" : "bg-light text-dark";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navbar />
      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
