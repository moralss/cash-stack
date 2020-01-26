import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./forms/LoginForm";
import { checkAuth } from "../routes/checker";
import Salary from "../images/salary.svg";
import Coins from "../images/coins.svg";
import axios from "axios";
import CreditCard from "../images/credit-card.svg";
import TTT from "../images/notes.svg";
import CashTable from "./CashTable";
import Ranger from '../assets/range.jpg'
import House from '../assets/modern.jpeg';
import Package from "../assets/package1320x742.jpg";
import { storage } from "../firebase";
import HeroImg from '../assets/CASH-STACK.svg'
import Phone from '../assets/icons/phone.svg'
import WhatsApp from '../assets/icons/whatsapp.svg'
import Gmail from '../assets/icons/gmail.svg'

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
        <div className="hero-wrapper"
        >
          <img src={`${HeroImg}`} alt=" no image"
            className="hero-img" />
        </div>
        <div>
          <h3 className="hero-header">Be your own
          <span className="hero-stand"> BOSS </span>
          </h3>
          <div className="grid-2">
            <p>
              <p>
                R200.00 once off joining fee Can change your life to the better.
              </p>
              This is an opportunity to grab and never let go...
              A wise man once said, "Why work to make someone else successful
              when you can work and make yourself successful". We all have a
              choice. We can either choose to live life on our own terms or we
              can choose to live life on the terms of others.
            </p>

            <img src={`${Coins}`} alt=" no image" style={{ width: "150px" }} />
          </div>
        </div>

        <div>
          <h3 className="header-header">How it works </h3>
          <div className="my-wrapper">
            <div>
              <h4> Ruby One</h4>
              <hr />
              <img
                src={`${Salary}`}
                alt=" no image"
                style={{ width: "150px " }}
              />
              <p>
                Pay R200.00 once off joining fee
                <br /> Recruit Six members under your name<br />
                6 X members joins under your name <br />
                Your Ruby one is now completed <br />
                <p>
                  <p> Benefits of Ruby One</p>
                  R200.00 Cash back <br /> 40% x6 bonus = R480.00 <br /> Total
                  pay-out = R200.00 + R480.00 <br /> TP=R680.00
                </p>
              </p>
            </div>
            <div>
              <h4> Ruby Two</h4>
              <hr />
              <img src={`${TTT}`} alt=" no image" style={{ width: "150px " }} />
              <p>
                From the profit you've gained from Ruby one
                <br /> Pay R400.00 <br />
                Lead/Help/Teach your six members to recruit their own six
                members.
                <br />
                Once your six members joins you at this stage...
                <br />
                You advanced to Ruby Three
                <br />Your Ruby Two is now completed <br />
                <p>Benefits of Ruby Two</p>
                R400.00 Cash back <br />
                40% x6 bonus =R950.00 <br />
                Total pay-out R400.00 + R950.00 <br />
                TP=R1 360.00
              </p>
            </div>
            <div>
              <h4> Ruby Three</h4>
              <hr />
              <img
                src={`${CreditCard}`}
                alt=" no image"
                style={{ width: "150px " }}
              />
              <p>
                Pay R800.00 <br />
                Once your six members joins you at this stage... <br />
                You advance to Ruby Four
                <br />Your Ruby Three is now completed
                 <p>Benefits of Ruby Three</p> R800.00
                Cash back <br />
                45% x6 bonus = R2 160.00 <br />
                Total pay-out = R800.00 + R2 160.00  <br />
                TP=R2 960.00
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="header-header">About us </h3>
          <p>
            CA$H $TACK is a South african multi level marketing company
            established in May 2019. Founded by network marketers, those who are
            tired of illegal pyramid schemes. We are a team driven by passion to
            deliver the outmost in network marketing. To be a dream achievers
            that will continue to search out ways to build a great organization
            to achieve a highly quality of lifestyle, with a perfect in network
            marketing by creating an atmosphere of a positive behavior for all
            partners to achieve all their dreams. We found a possible way of
            changing lives . No selling of products is required, no sweating.
          </p>
        </div>
        <div>
          <h3 className="header-header">Ruby Stages</h3>
          <CashTable />
        </div>
        <div>
          <h3 className="header-header">Contact us </h3>
          <div class="contact-grid">
            <div class="contact-item">
              <img class="contact-img" src={`${Gmail}`} style={{
                width: "2rem",
                height: "1rem",
              }} alt="" />
              <h6 >stackcash612@gmail.com</h6>
            </div>
            <div class="contact-item">

              <a href="https://chat.whatsapp.com/D2YgZdV4r2079QiIYuzMiy"
                target="_blank"
              >
                <img class="contact-img" src={`${WhatsApp}`} style={{
                  width: "2rem",
                  height: "1rem",
                }} alt="" />

              </a>
            </div>
            <div class="contact-item">
              <img class="contact-img" src={`${Phone}`} style={{
                width: "2rem",
                height: "1rem",
              }} alt="" />

              <h6>(+27)68 373 4006</h6>
            </div>
          </div>

        </div>
      </div >
    );
  }
}

Homepage.propTypes = {};

export default Homepage;
