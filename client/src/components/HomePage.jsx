import React, { useEffect } from "react";
import PropTypes from "prop-types";
import LoginForm from "./forms/LoginForm";
import { checkAuth } from "../routes/checker";

function HomePage() {
  // componentWillMount() {
  //   checkAuth();
  // }
  useEffect(() => {
    checkAuth();
  });

  return (
    <div className="container">
      <div>
        <h3>Be your own boss</h3>
        <p>
          R200.00 once off joining fee Can change your life to the better.You
          can be your own boss.This is an opportunity to grab and never let
          go... A wise man once said, "Why work to make someone else successful
          when you can work and make yourself successful." We all have a choice.
          We can either choose to live life on our own terms or we can choose to
          live life on the terms of others. Trust me, go for the first option Do
          you love the sound of a ringing alarm clock? Does it rescue you from
          your lazy night of time-wasting slumber? And are you excited every day
          to jump out of bed, rush through your morning routine, and make a mad
          dash to get to work on time? Then, once you arrive, does your boss
          always greet you with a warm smile? Does he or she shower you with
          tons of respect and endless praise for all you do? And you become so
          filled with gratitude and appreciation, that you just can’t wait to
          embark upon another glorious day of doing the work you love so much?
          Well if you’re anything like me, your answer would be “HECK NO” to all
          of the above
        </p>
      </div>
      <div>
        <h3>How it works </h3>
        <div className="my-wrapper">
          <div>
            <h6> Ruby One</h6>
            <hr />
            <p>
              Pay R200.00 once off joining fee
              <br /> 6 X members joins under your name <br /> Now your Ruby one
              is now completed <br />
              <p>
                <p> Benefits of Ruby One</p>
                R200.00 Cash back <br /> 40% x6 bonus = R480.00 <br /> Total
                pay-out R200.00 + R480.00 <br /> TP=R680.00
              </p>
            </p>
          </div>
          <div>
            Ruby Two
            <hr />
            <p>
              From the profit you've gained from Ruby one
              <br /> Pay R300.00 <br />
              Lead/help/teach your six members to recruit their own six members.
              <br />
              Once your six members joins you at this stage... <br />
              Now you advanced to Ruby Three <br />
              <p>Benefits of Ruby Two</p>
              R300.00 Cash back <br />
              40% x6 bonus =R750.00 <br />
              Total pay-out R750.00 + R300.00 <br />
              TP=R1 020.00
            </p>
          </div>
          <div>
            <h6> Ruby Three</h6>
            <hr />
            <p>
              Pay R500.00 <br />
              Once your six members joins you at this stage... <br />
              You advance to Ruby Four <p>Benefits of Ruby Three</p> R500.00
              Cash back <br />
              40% x6 bonus =R1 200.00 <br />
              Total pay-out R1 200.00 + R500.00 <br />
              TP=R1 700.00
            </p>
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
          CA$H $TACK IS A SOUTH AFRICAN MULTI LEVEL MARKETING COMPANY
          ESTABLISHED IN MAY 2019. FOUNDED BY NETWORK MARKETERS, THOSE WHO ARE
          TIRED OF ILLIGAL PYRAMID SCHEMES. WE ARE A TEAM DRIVEN BY PASSION TO
          DELIVER THE ATMOST IN NETWORK MARKERTING. TO BE DREAM ACHIEVERS THAT
          WILL CONTINUE TO SEARCH OUTWAYS TO BUILD A GREAT ORGANISATION TO
          ACHIEVE A HIGH QUALITY OF LIFE STYLE, WITH A PERFECT IN NETWORKING BY
          CREATING AN ATMOSPHERE OF POSITIVE BEHAVIOUR FOR ALL PARTNERS TO
          ACHIEVE ALL THEIR DREAMS. WE FOUND A POSSIBLE WAY OF CHANGING LIVES.
          NO SELLING OF PRODUCTS REQUIRED, NO SWEATING.
        </p>
      </div>
      <div>
        <table className="striped">
          <thead>
            <tr>
              <th>Ruby Stages</th>
              <th>Inv/Fee</th>
              <th>Bonus in %</th>
              <th>Bonus in Rands</th>
              <th>Total Payout</th>
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
              <td>Ruby Four</td>
              <td>R1000.00</td>
              <td>45%</td>
              <td>R2 700.00</td>
              <td>R3 700.00</td>
            </tr>

            <tr>
              <td>Ruby Nine</td>
              <td>R20 000.00</td>
              <td>80%</td>
              <td>R96 000.00</td>
              <td>R116 000.00</td>
            </tr>
          </tbody>
        </table>
        {/* <table>
          <div
            className="card black-text"
            style={{ display: "flex", margin: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem"
              }}
            >
              <th>Ruby stages</th>
              <th>Ruby Four</th>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem"
              }}
            >
              <th>Fee</th>
              <th>R1 000.00</th>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem"
              }}
            >
              <th>Bonus in %</th>
              <th>45%</th>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem"
              }}
            >
              <th>Bonus in Rands</th>
              <th>R2 700.00</th>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem"
              }}
            >
              <th>Total Pay-Out</th>
              <th>R3 700.00</th>
            </div>
          </div>
        </table> */}
      </div>

      <div>
        <h3>Contact us </h3>
        <h6>Your email address</h6>
        <input type="email" placeholder="email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Your message" />
        <button className="btn">send</button>
      </div>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
