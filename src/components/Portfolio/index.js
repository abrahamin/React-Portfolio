import React, { useEffect } from "react";
import M from "materialize-css";
import "./style.css";
import bookSearch from "../../images/book-search.png";
import budgetTracker from "../../images/budget-tracker.png";
import fitnessTracker from "../../images/fitness-tracker.png";
import jungsJoeys from "../../images/jungs-joeys.png";
import professionalEyes from "../../images/professionaleyes.png";
import reduxStore from "../../images/redux-store.png";
import twoCity from "../../images/two-city.png";
import githubIcon from "../../images/github-icon.png";

const Portfolio = () => {
  useEffect(() => {
    let elements = document.querySelectorAll(".parallax");

    M.Parallax.init(elements);
  }, []);

  return (
    <>
      <div className="Portfolio">
        <br></br>
        <div className="container">
          <div className="section white top-project">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://jungsjoeys.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  Jung's Joeys
                </a>
                <a
                  href="https://github.com/abrahamin/Jungs-Joeys"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3 instructions">
                Click the title to access the deployed application // Click the
                GitHub icon to access the repository
              </p>
              <p className="grey-text text-darken-3 lighten-3">
                Jung's Joeys is a full-stack web application that serves as a
                study forum for coding bootcamp students. Users can create a
                profile to gain CRUD functionality and access to study topics,
                posts, and comments. Additional functionality includes a chat
                room where users can communicate virtually via the Video SDK
                API.
              </p>
              <p className="technologies">
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-mongodb-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-graphql-plain"></i>
              </p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax">
              <img src={jungsJoeys} alt="jung's joeys screenshot" />
            </div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://redux-store-ah.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  Redux Store
                </a>
                <a
                  href="https://github.com/abrahamin/22-Redux-Store"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                An e-commerce platform where users can register for an account,
                select from various categories, choose products and view their
                details, and add/remove from the shopping cart. Stripe is used
                to process payment checkouts. The global state of the
                application is managed by Redux.
              </p>
              <p className="technologies">
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-mongodb-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-graphql-plain"></i>
                <i class="devicon-redux-original"></i>
              </p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax">
              <img src={reduxStore} alt="redux store screenshot" />
            </div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://book-search-ah.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  Book Search
                </a>
                <a
                  href="https://github.com/abrahamin/21-Book-Search-Engine"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                A full-stack web application that allows users to search for
                books based on keywords. Creating an account provides
                functionality to add desired books to the user's account and
                remove previously saved books. The application has an Apollo
                Server that uses GraphQL queries and mutations to fetch and
                modify data.
              </p>
              <p className="technologies">
                <i class="devicon-nodejs-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-mongodb-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-graphql-plain"></i>
              </p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax">
              <img src={bookSearch} alt="book search screenshot" />
            </div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://budget-tracker-ah.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  Budget Tracker
                </a>
                <a
                  href="https://github.com/abrahamin/19-Online-Offline-Budget-Trackers"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                Budget Tracker
              </p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax">
              <img src={budgetTracker} alt="budget tracker screenshot" />
            </div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://workout-tracker-ah.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  Fitness Tracker
                </a>
                <a
                  href="https://github.com/abrahamin/18-Workout-Tracker"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                Fitness Tracker
              </p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax">
              <img src={fitnessTracker} alt="fitness tracker screenshot" />
            </div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://professionaleyes.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  ProfessionalEyes
                </a>
                <a
                  href="https://github.com/abrahamin/ProfessionalEyes"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                ProfessionalEyes
              </p>
            </div>
          </div>
          <div className="parallax-container">
            <div className="parallax">
              <img src={professionalEyes} alt="professionaleyes screenshot" />
            </div>
          </div>
          <div className="section white">
            <div className="row container">
              <h2 className="header">
                <a
                  href="https://abrahamin.github.io/Two-City-Comparison-Tool/"
                  rel="noreferrer"
                  target="_blank"
                  className="website"
                >
                  Two-City Comparison Tool
                </a>
                <a
                  href="https://github.com/abrahamin/Two-City-Comparison-Tool"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="github icon"
                    className="github"
                  ></img>
                </a>
              </h2>
              <p className="grey-text text-darken-3 lighten-3">
                Two-City Comparison Tool
              </p>
            </div>
          </div>
          <div className="parallax-container bottom-project">
            <div className="parallax">
              <img src={twoCity} alt="two city screenshot" />
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Portfolio;
