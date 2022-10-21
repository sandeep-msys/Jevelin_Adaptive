import "./Navbar.scss";
import "./Nav.scss";
import {
  BsFillBadgeTmFill,
  BsFillBagXFill,
  BsFillDashSquareFill,
  BsFillGridFill,
} from "react-icons/bs";
import { FaHome, FaTelegramPlane } from "react-icons/fa";
import {
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillSkype,
} from "react-icons/ai";
import { Accordion } from "../Accordian/Accordian";
const Adoptive = () => {
  return (
    <div>
      <div class="main-container">
        <div class="navbar">
          <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
              <div class="nav-title">AntivirusAMP</div>
            </div>
            <div class="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div class="nav-links">
              <AiOutlineFacebook class="icons" />
              <AiOutlineWhatsApp class="icons" />
              <AiFillInstagram class="icons" />
              <AiFillSkype class="icons" />
            </div>
          </div>
        </div>

        <div class=" operation-container">
          {/* Operation container */}
          <div class=" operation-title-container">
            <h1>Operational Infection Data</h1>
            <p>As of May 15 2020 10:45 AM</p>
          </div>
          <div class=" operation-cards-container">
            <div class=" stay-home-container">
              <div class=" stay-home-text-container">
                <h3>#STAYHOME</h3>
                <h4>Please leave home only when absolutely necessary.</h4>
              </div>
              <div>
                <FaHome class="medium-icon" />
              </div>
            </div>
            <div class=" report-card-container">
              <img
                src="https://mobirise.com/extensions/antivirusamp/site/assets/images/01.jpg"
                alt="/"
              />
              <div>
                <p>
                  Report on the current situation of the spread of the virus in
                  the world.
                </p>
                <p class="p-red">Read More</p>
              </div>
            </div>
          </div>
        </div>

        <div class=" marks-container">
          <div class=" marks-inner-container">
            <h1>96700</h1>
            <p>Tests perforemed</p>
          </div>
          <div class=" marks-inner-container">
            <h1 class="h-red">8672</h1>
            <p>Cases of the disease</p>
          </div>
          <div class=" marks-inner-container">
            <h1 class="h-red">1175</h1>
            <p>For the last day</p>
          </div>
          <div class=" marks-inner-container">
            <h1>580</h1>
            <p>People recovered</p>
          </div>
          <div class=" marks-inner-container">
            <h1>63</h1>
            <p>People died</p>
          </div>
        </div>

        <div class=" matter-container">
          <div class=" matter-title-container">
            <h2>What can be done right now?</h2>
          </div>
          <div class=" matter-image-paragrap-container">
            <div class="matter-image">
              <img
                src="https://mobirise.com/extensions/antivirusamp/site/assets/images/06.jpg"
                alt="/"
              />
            </div>
            <div class=" matter-paragraph-container">
              <div class=" matter-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque varius lectus ac dolor laoreet, sit amet sollicitudin
                  mauris malesuada. Donec accumsan leo ex, lobortis facilisis
                  massa gravida quis. Etiam non molestie ipsum. Sed porttitor,
                  justo at rhoncus finibus, sapien est iaculis tellus, a
                  vestibulum nisi risus et sapien. Maecenas luctus pulvinar
                  metus, vel venenatis nisi. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus.
                </p>
              </div>
              <div class=" matter-paragraph">
                <p>
                  Etiam eu pretium sem, sit amet eleifend augue. Nullam sem
                  tellus, molestie sit amet lacus et, pellentesque gravida
                  augue. Praesent aliquam sapien neque, eget tristique ex
                  viverra sit amet. Mauris a orci neque. Duis vehicula odio et
                  nibh gravida, sit amet congue diam fringilla. Duis blandit
                  convallis condimentum. Praesent porta egestas diam, eu
                  facilisis sem aliquet eu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=" symptoms-container">
        <p>
          Symptoms may occur within <span>14 days</span> with an infectious
          patient. Symptoms are largely similar to respiratory diseases, often
          mimic the common cold, and may be similar to flu.
        </p>
      </div>

      <div className=" main-container">
        <div class=" gov-container">
          <h1>Government Measures</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ante enim, fringilla et dui sit amet, luctus consequat arcu. Cras
            iaculis purus in elementum consectetur. Nam sagittis dignissim
            lacus, sed vestibulum odio semper. Pellentesque in ligula posuere
            fermentum turpis.
          </p>
        </div>

        <div class=" cards-container">
          <div class=" card">
            <BsFillBadgeTmFill class="medium-icon" />
            <p>Anti crisis plan</p>
          </div>
          <div class=" card">
            <BsFillBagXFill class="medium-icon" />
            <p>Event cancellation</p>
          </div>
          <div class=" card">
            <BsFillDashSquareFill class="medium-icon" />
            <p> crossing</p>
          </div>
          <div class=" card">
            <BsFillGridFill class="medium-icon" />
            <p>Flight cancellation</p>
          </div>
        </div>

        <div class="img-container">
          <div>
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/02.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/03.jpg"
              alt="/"
            />
          </div>
          <div>
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/04.jpg"
              alt="/"
            />
          </div>
        </div>
      </div>

      <div class=" emrg-container">
        <h3>Emergency Notifications</h3>
        <p>
          Subscribe to receive emergency notifications about the status of the
          spread of the virus.
        </p>
        <div>
          <input type="text" id="input" placeholder="E-mail Address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div class="main-container">
        <div class=" img-card-container">
          <div class=" img-card">
            <p class="p-red">ABOUT TESTING</p>
            <p>Where and how are they are tested?</p>
            <div class="">
              <img
                src="https://mobirise.com/extensions/antivirusamp/site/assets/images/02.jpg"
                alt="/"
              />
            </div>
            <button>Read more</button>
          </div>
          <div class=" img-card">
            <p class="p-red">VIRUS RESEARCH</p>
            <p>What we know about the virus? </p>
            <div>
              <img
                src="https://mobirise.com/extensions/antivirusamp/site/assets/images/03.jpg"
                alt="/"
              />
            </div>
            <button>Read more</button>
          </div>
          <div class=" img-card">
            <p class="p-red">VIRUS PREVENTION</p>
            <p>How to protect from infection?</p>
            <div>
              <img
                src="https://mobirise.com/extensions/antivirusamp/site/assets/images/04.jpg"
                alt="/"
              />
            </div>
            <button>Read more</button>
          </div>
        </div>
      </div>

      <div class="main-container">
        <h1 class="h2">World Statistics</h1>
        <div class=" logo-card-container">
          <div class=" logo-card">
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/logo11.png"
              alt="/"
            />
            <p>Information from WHO</p>
          </div>
          <div class=" logo-card">
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/logo3.png"
              alt="/"
            />
            <p>Johns Hoppkins University</p>
          </div>
          <div class=" logo-card">
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/logo2.png"
              alt="/"
            />
            <p>Virus Distribution Map</p>
          </div>
        </div>
      </div>

      <div class=" ans-container">
        <div class=" ans-img-container">
          <div class=" ans-title-container">
            <h1>Answers on Questions</h1>
            <img
              src="https://mobirise.com/extensions/antivirusamp/site/assets/images/05.jpg"
              alt="/"
              class=""
            />
          </div>
        </div>
        <div class=" ans-accordian-container">
          <h3>
            <Accordion />
          </h3>
          <h3>
            <Accordion />
          </h3>
          <h3>
            <Accordion />
          </h3>
          <h3>
            <Accordion />
          </h3>
        </div>
      </div>

      <h3 class="virus-h2">Virus Council coordination:</h3>
      <div class=" council-cards-container">
        <div class=" council-card">
          <h3>Hopkons J.D</h3>
          <h3 class="light-h3">Leading Versatile</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class=" council-card">
          <h3>Benson G.M</h3>
          <h3 class="light-h3">Coordination Council</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="  council-card">
          <h3>Palmer L.R</h3>
          <h3 class="light-h3">Ministery of Health</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class=" council-card">
          <h3>Harrriston S.W</h3>
          <h3 class="light-h3">Head Epidemonologist</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div class=" footer-container ">
        <div class=" footer-inner-container ">
          <div class="footer-social-text">
            <h3>Share information on social networks</h3>
            <p>
              As much as possible people should learn about the spread of the
              virus and how to protect against it.
            </p>
          </div>
          <div>
            <AiOutlineFacebook class="icon" />
            <AiOutlineWhatsApp class="icon" />
            <AiFillInstagram class="icon" />
            <AiFillSkype class="icon" />
            <FaTelegramPlane class="icon" />
          </div>
        </div>
        <div class=" footer-inner-container">
          <img
            src="https://mobirise.com/extensions/antivirusamp/site/assets/images/logo3.png"
            alt="/"
          />
          <img
            src="https://mobirise.com/extensions/antivirusamp/site/assets/images/logo11.png"
            alt="/"
          />
        </div>
        <div class=" hot footer-inner-container">
          <p>Hot line Support:</p>
          <p class="p-red"> 0088-18-9294 </p>
        </div>
      </div>

      <div class="copyright-container">
        <hr />
        <p>
          © Copyright 2020 AntiVirusAMP Theme - Mobirise - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Adoptive;
