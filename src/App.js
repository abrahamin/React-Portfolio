import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import "./App.css";
import "materialize-css";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route exact path="/React-Portfolio" element={<Landing />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
