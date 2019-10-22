import React from "react";

const Active = () => {
  return (
    <div>
      <div className="card">
        <h3 className="grey-text">Method 1</h3>
        <label className="grey-text">Account</label>
        <select class="browser-default">
          <option value="" disabled selected>
            Choose your Payment options
          </option>
          <option value="1">EFT</option>
          <option value="2"> DEBIT CARD</option>
          <option value="3">MASTER CARD</option>
        </select>
        <input type="text" placeholder="account number" />
        <label htmlFor="" className="grey-text">
          Payment required R200.00
        </label>
        <div className="col">
          <button className="btn block">Send</button>
        </div>
      </div>
      <div className="card">
        <h3 className="grey-text">Method 2</h3>
        <label className="grey-text">
          cash stack acount number 7767675675565
        </label>
        <h6 className="grey-text">send prove of payment</h6>
        {/* <button>upload photo</button> */}
        <input id="fileInput" type="file" />
        <div>
          <button className="btn">Send prove of payment</button>
        </div>
      </div>
    </div>
  );
};

export default Active;
