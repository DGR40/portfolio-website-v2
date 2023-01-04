import { NavLink } from "react-router-dom";
import GitIcon from "../assets/github-icon.png";
import LinkedIcon from "../assets/linkedin-icon.png";
import ResumeIcon from "../assets/resume-icon.png";
import emailIcon from "../assets/email-icon.png";
import arrowIcon from "../assets/arrow-icon.png";
import appDesign1 from "../assets/vueggie-1.png";
import appDesign2 from "../assets/vueggie-2.png";
import NavBar from "../components/navbar";
import SideBar from "../components/sidebar";
import MeOnBoat from "../assets/meonboat2.png";
import Project from "../components/project";
import Swing1 from "../assets/swing2.png";
import Swing2 from "../assets/swing3.png";
import BarChartVid from "../assets/data-vis-1.mp4";
import TextAnalysis from "../assets/text-analysis.png";

export default function Root() {
  return (
    <>
      <div>
        <section class="typewriter banner" id="home">
          <div class="container">
            <div class="tagline">
              <h1>
                Hello, my name is <span class="blue">Danny Rusk</span>{" "}
              </h1>
              <p>
                I'm a <span class="blue">frontend developer</span> and a{" "}
                <span class="blue">data scientist</span> who has built websites,
                web apps and data visualizations that provide great
                <span class="blue"> user experiences</span>
              </p>
              <div
                class="project-button"
                onClick={() => goToDiv("project-section")}
              >
                <h4>My Projects</h4>
              </div>
            </div>
          </div>
        </section>

        <section class="banner" id="about">
          <div class="container" id="about-container">
            <div class="about-words">
              <div>
                <h1>About</h1>
                <p>
                  I am a senior Information Science major at Cornell University
                  excited to graduate in <span class="blue">May 2023</span>. I
                  am looking for positions in front end development and data
                  science.
                </p>
                <p id="about-second">
                  I have worked at a start-up, VC Firm, and my school's labs.
                  Through my coursework and experience I have learned how to
                  create <span class="blue">powerful</span> and
                  <span class="blue"> intuitive</span> tools to best help the
                  users achieve their goals. Some of the technologies I utilize
                  the most are:
                </p>

                <div class="tags">
                  <div class="tag">
                    <p>JavaScript (ES6)</p>
                  </div>
                  <div class="tag">
                    <p>Python</p>
                  </div>
                  <div class="tag">
                    <p>Vue</p>
                  </div>
                  <div class="tag">
                    <p>React</p>
                  </div>
                  <div class="tag">
                    <p>Java</p>
                  </div>
                  <div class="tag">
                    <p>SQL</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="about-pic">
              <img src={MeOnBoat} />
            </div>
          </div>
        </section>

        <section class="projects" id="project-section">
          <div class="project-container">
            <h1>Projects</h1>
          </div>
          <div class="project-banner">
            <div class="project-left" id="project-left">
              <img src={appDesign2} />
              <img src={appDesign1} />
            </div>
            <div class="project-left" id="project-right">
              <h1>Vegetable Catalog PWA</h1>
              <p>
                Final Project made for App Prototype and Design. Used User
                Interviews to gather design requirements then built the app to
                meet user goals. User can search catalog for favorite vegetable
                varieties as well as learn the basics of gardening through the
                tutorial page.
              </p>
              <div class="tags">
                <div class="tag-1">
                  <p>Vue.js</p>
                </div>
                <div class="tag-1">
                  <p>Bootstrap</p>
                </div>
                <div class="tag-1">
                  <p>JavaScript</p>
                </div>
                <div class="tag-1">
                  <p>HTML</p>
                </div>
                <div class="tag-1">
                  <p>CSS</p>
                </div>
              </div>
              <div class="project-button">
                <h4
                  onClick={() =>
                    goToURLSpecial(
                      "https://pages.github.coecis.cornell.edu/info4340-2022fa/vue-ggie-tales-project/catalog"
                    )
                  }
                >
                  Live Mobile Prototype
                </h4>
              </div>
            </div>
          </div>

          <div class="project-banner">
            <div class="project-left" id="project-left">
              <video src={BarChartVid} autoPlay loop />
            </div>
            <div class="project-left" id="project-right">
              <h1>Interactive Data Visualization</h1>
              <p>
                Created a visualization of video game companies share of sales
                over time. User can hover over particular name to view just the
                sales of the given company.
              </p>
              <div class="tags">
                <div class="tag-1">
                  <p>D3.js</p>
                </div>
                <div class="tag-1">
                  <p>JavaScript</p>
                </div>
                <div class="tag-1">
                  <p>HTML</p>
                </div>
                <div class="tag-1">
                  <p>CSS</p>
                </div>
              </div>
              <div class="project-button">
                <h4
                  onClick={() =>
                    goToURL(
                      "https://github.com/DGR40/data-driven-web-dev-project2"
                    )
                  }
                >
                  GitHub
                </h4>
              </div>
            </div>
          </div>

          <div class="project-banner">
            <div class="project-left" id="project-left">
              <img src={Swing1} />
              <img src={Swing2} />
            </div>
            <div class="project-left" id="project-right">
              <h1>Swing Campaign App</h1>
              <p>
                Worked as frontend developer on app to help inform voters on
                legislation being passed by their representatives at every
                level. App launched to over 100 initial users. App has since
                been discontinued.
              </p>
              <div class="tags">
                <div class="tag-1">
                  <p>React.js</p>
                </div>
                <div class="tag-1">
                  <p>JavaScript</p>
                </div>
                <div class="tag-1">
                  <p>HTML</p>
                </div>
                <div class="tag-1">
                  <p>CSS</p>
                </div>
              </div>
              <div class="project-button">
                <h4
                  onClick={() =>
                    goToURL(
                      "https://play.google.com/store/apps/details?id=com.swingvote.swing&hl=en_US&gl=US"
                    )
                  }
                >
                  Google Play Store
                </h4>
              </div>
            </div>
          </div>

          <div class="project-banner">
            <div class="project-left" id="project-left-center">
              <img src={TextAnalysis} id="double-wide-img" />
            </div>
            <div class="project-left" id="project-right">
              <h1>Historical Text Analysis</h1>
              <p>
                Analyzed change in sentiment relating to catholicism in hundreds
                of novels over time period 1820-1865. Used text analysis tools
                to test theory that anti-catholicism ideals were rampant
                throughout this time.
              </p>
              <div class="tags">
                <div class="tag-1">
                  <p>Pandas</p>
                </div>
                <div class="tag-1">
                  <p>Scikit-Learn</p>
                </div>
                <div class="tag-1">
                  <p>Seaborn</p>
                </div>
              </div>
              <div class="project-button">
                <h4 onClick={() => goToURL("/text-analysis")}>
                  Read Full Paper
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function scrollToProjects() {
  var target = $(window).height();
  console.log(target);
  $("html, body").animate({ scrollTop: target }, 1000);
}

function goToURL(url) {
  window.open(url, "_blank");
}

function goToURLSpecial(url) {
  window.open(url, "_blank", "width = 445px", "height = 100%");
}

function goToDiv(divID) {
  var elem = document.getElementById(divID);
  elem.scrollIntoView({
    behavior: "smooth",
  });
}

/*
function showDisclaimer() {
  var elem = document.getElementById("disc");
  elem.style.attr("display", "block");
}
*/
