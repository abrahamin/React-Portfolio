import "./App.css";
import "materialize-css";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <div className="nav-wrapper">
          <a href="#" id="logo" className="brand-logo center">
            abrahamin
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="about" className="large-font">
                About Me
              </a>
            </li>
            <li>
              <a href="portfolio" className="large-font">
                Portfolio
              </a>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="contact" className="large-font">
                Contact
              </a>
            </li>
            <li>
              <a href="resume" className="large-font">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Landing />
    </div>
  );
}

export default App;
