import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects";
import Resume from "./Component/Resume/Resume";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen pb-8 pt-20"
        style={{
          backgroundImage: `url("/img/bg6.png")`,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
