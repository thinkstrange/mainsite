import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

import Letter from "../assets/Letter.pdf"

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />

      <section>
        <p>
          Control your pleasure wirelessly. Leave it upto our servers today!
          (Subscription fee of $69,420 per life per soul applicable).
        </p>
        <p>
          Spread the hype with <b>#goldenasssupremacy</b>
        </p>

        <br />

        <a href = {Letter} target={"_blank"} rel = "noreferrer">
          <p>Letter from the Chairman & CEO &rarr;</p>
        </a>

        <br />

        <p>
          <b>Children</b>
        </p>
        <p>
          All projects in the pipeline upon roll out are entirly entitled to
          getting identified as a direct or indirect child of Think Strange Inc.
        </p>

        <br />

        <div className="grid">
          <div>
            <ul>
              <b>Software</b>
              <li>
                <Link to="">01domain.tk</Link>
              </li>
              <li>
                <Link to="">VOID Toolset</Link>
              </li>
              <li>
                <Link to="">BROAI</Link>
              </li>
              <li>
                <Link to="">Deźa Veu Exscape</Link>
              </li>
              <li>
                <Link to="/Wingman">Wingman</Link>
              </li>
              <li>
                <Link to="">RVENV</Link>
              </li>
              <li>
                <Link to="">HRSOS</Link>
              </li>
              <li>
                <Link to="">CodeNotes</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Hardware</b>
              <li>
                <Link to="">RAGEx</Link>
              </li>
              <li>
                <Link to="">Planets Communications Ltd.</Link>
              </li>
              <li>
                <Link to="">ProGull Quantum Systems</Link>
              </li>
              <li>
                <Link to="">BEES Computation</Link>
              </li>
              <li>
                <Link to="">WIE Tech</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Entertainment</b>
              <li>
                <Link to="">SSVT Cinemas</Link>
              </li>
              <li>
                <Link to="">ExtraLoooong Studios</Link>
              </li>
              <li>
                <Link to="/VMS">Virtual Media Studios (VMS)</Link>
              </li>
              <li>
                <Link to="">Heavens House</Link>
              </li>
              {/* <li><Link to = "">Reflection noitcelfeR</Link></li> */}
              <li>
                <Link to="/Mindgasm">Mindgasm XXX Production</Link>
              </li>
              <li>
                <Link to="/Northstage">Northstage</Link>
              </li>
              <li>
                <Link to="/Fapster">Fapster</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Social Space</b>
              <li>
                <Link to="">Timestamp</Link>
              </li>
              <li>
                <Link to="">Checkmate</Link>
              </li>
              <li>
                <Link to="">MOMNET</Link>
              </li>
              <li>
                <Link to="">BabeSync</Link>
              </li>
              <li>
                <Link to="">e–wed</Link>
              </li>
              <li>
                <Link to="">Hopeline</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Non Profit</b>
              <li>
                <Link to="">Begging Corp.</Link>
              </li>
              <li>
                <Link to="">donatepls</Link>
              </li>
              <li>
                <Link to="">Greenwealth</Link>
              </li>
              <li>
                <Link to="">UniversalDB</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Journalism</b>
              <li>
                <Link to="">Billionaire 270</Link>
              </li>
              <li>
                <Link to="">Franchise Media Ltd. (FML)</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Automotive</b>
              <li>
                <Link to="">Phazer EV</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Aerospace</b>
              <li>
                <Link to="">Cosmos</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Consumables</b>
              <li>
                <Link to="">Old & Older Fine Spirits</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Financial Services</b>
              <li>
                <Link to="">Paperweight Banking</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Enterprise</b>
              <li>
                <Link to="/Conductor">Conductor</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Fashion</b>
              <li>
                <Link to="">dēstöpēan</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <b>Services</b>
              <li>
                <Link to="">Better Call Sai!</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
