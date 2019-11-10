import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./forms/LoginForm";
import { checkAuth } from "../routes/checker";
import Salary from "../images/salary.svg";
import Coins from "../images/coins.svg";
import axios from "axios";
import CreditCard from "../images/credit-card.svg";
import TTT from "../images/notes.svg";

// salary.svg

class Homepage extends Component {
  componentDidMount() {
    checkAuth();
  }

  sendMesage() {
    console.log("state state", this.state);
    axios.post("http://localhost:3001/send-email", this.state);
  }
  render() {
    return (
      <div className="custom-container">
        <div>
          <h3>Be your own boss</h3>
          <div className="grid-2">
            <p>
              <p>
                R200.00 once off joining fee Can change your life to the better.
              </p>
              This is an opportunity to grab and never let go... A wise man once
              A wise man once said, "Why work to make someone else successful
              when you can work and make yourself successful". We all have a
              choice. We can either choose to live life on our own terms or we
              can choose to live life on the terms of others.
            </p>

            <img src={`${Coins}`} alt=" no image" style={{ width: "150px" }} />
          </div>
        </div>
        <div>
          <h3>How it works </h3>
          <div className="my-wrapper">
            <div>
              <h6> Ruby One</h6>
              <hr />
              <p>
                Pay R200.00 once off joining fee
                <br /> 6 X members joins under your name <br /> Now your Ruby
                one is now completed <br />
                <p>
                  <p> Benefits of Ruby One</p>
                  R200.00 Cash back <br /> 40% x6 bonus = R480.00 <br /> Total
                  pay-out R200.00 + R480.00 <br /> TP=R680.00
                </p>
              </p>

              <img
                src={`${Salary}`}
                alt=" no image"
                style={{ width: "150px " }}
              />
            </div>
            <div>
              Ruby Two
              <hr />
              <p>
                From the profit you've gained from Ruby one
                <br /> Pay R400.00 <br />
                Lead/help/teach your six members to recruit their own six
                members.
                <br />
                Once your six members joins you at this stage... <br />
                Now you advanced to Ruby Three <br />
                <p>Benefits of Ruby Two</p>
                R400.00 Cash back <br />
                40% x6 bonus =R750.00 <br />
                Total pay-out R950.00 + R400.00 <br />
                TP=R1 360.00
              </p>
              <img src={`${TTT}`} alt=" no image" style={{ width: "150px " }} />
            </div>
            <div>
              <h6> Ruby Three</h6>
              <hr />
              <p>
                Pay R800.00 <br />
                Once your six members joins you at this stage... <br />
                You advance to Ruby Four <p>Benefits of Ruby Three</p> R500.00
                Cash back <br />
                45% x6 bonus =R2 160.00 <br />
                Total pay-out R2 160.00 + R800.00 <br />
                TP=R2 960.00
              </p>
              <img
                src={`${CreditCard}`}
                alt=" no image"
                style={{ width: "150px " }}
              />
            </div>
          </div>
        </div>
        <div>
          <h3>About us </h3>
          <h6>
            Cash Stack investment <br />
            Financial freedom 4 all
          </h6>
          <p>
            CA$H $TACK is a South AFRICAN MULTI LEVEL MARKETING COMPANY
            ESTABLISHED IN MAY 2019. FOUNDED BY NETWORK MARKETERS, THOSE WHO ARE
            TIRED OF ILLIGAL PYRAMID SCHEMES. WE ARE A TEAM DRIVEN BY PASSION TO
            DELIVER THE ATMOST IN NETWORK MARKERTING. TO BE DREAM ACHIEVERS THAT
            WILL CONTINUE TO SEARCH OUTWAYS TO BUILD A GREAT ORGANISATION TO
            ACHIEVE A HIGH QUALITY OF LIFE STYLE, WITH A PERFECT IN NETWORKING
            BY CREATING AN ATMOSPHERE OF POSITIVE BEHAVIOUR FOR ALL PARTNERS TO
            ACHIEVE ALL THEIR DREAMS. WE FOUND A POSSIBLE WAY OF CHANGING LIVES.
            NO SELLING OF PRODUCTS REQUIRED, NO SWEATING.
          </p>
        </div>
        <div>
          <table className="striped">
            <thead>
              <tr>
                <th>Stages</th>
                <th>Inv/Fee</th>
                <th>Bonus(%)</th>
                <th>Bonus(R)</th>
                <th>T-P</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ruby One</td>
                <td>R200.00</td>
                <td>40%</td>
                <td>R480.00</td>
                <td>R680.00</td>
              </tr>
              <tr>
                <td>Ruby Two</td>
                <td>R400.00</td>
                <td>40%</td>
                <td>R960.00</td>
                <td>R1360.00</td>
              </tr>
              <tr>
                <td>Ruby Three</td>
                <td>R800.00</td>
                <td>45%</td>
                <td>R2160.00</td>
                <td>R2960.00</td>
              </tr>
              <tr>
                <td>Ruby Four</td>
                <td>R1000.00</td>
                <td>45%</td>
                <td>R2700.00</td>
                <td>R3700.00</td>
              </tr>
              <tr>
                <td>Ruby Five</td>
                <td>R2000.00</td>
                <td>50%</td>
                <td>R6000.00</td>
                <td>R8000.00</td>
              </tr>
              <tr>
                <td>Ruby six</td>
                <td>R3000.00</td>
                <td>50%</td>
                <td>R9000.00</td>
                <td>R1200.00</td>
              </tr>
              <tr>
                <td>Ruby Seven</td>
                <td>R5000.00</td>
                <td>50%</td>
                <td>R15000.00</td>
                <td>R20000.00</td>
              </tr>
              <tr>
                <td>Ruby Eight</td>
                <td>R10000.00</td>
                <td>70%</td>
                <td>R42000.00</td>
                <td>R520000.00</td>
              </tr>
              <tr>
                <td>Ruby Nine</td>
                <td>R20000.00</td>
                <td>75%</td>
                <td>R90000.00</td>
                <td>R110000.00</td>
              </tr>
              <tr>
                <td>Ruby X</td>
                <td>R50000.00</td>
                <td>80%</td>
                <td>R240000.00</td>
                <td>R250000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3>Contact us </h3>
          <h6>Your email address</h6>
          <input
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            placeholder="email"
          />
          <input
            onChange={e => this.setState({ subject: e.target.value })}
            type="text"
            placeholder="Subject"
          />
          <input
            onChange={e => this.setState({ message: e.target.value })}
            type="text"
            placeholder="Your message"
          />
          <button onClick={() => this.sendMesage()} className="btn">
            send
          </button>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {};

export default Homepage;
