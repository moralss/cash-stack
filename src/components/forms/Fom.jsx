import React, { Component } from 'react';


class Form3 extends Component {


    render() {
        return (
            <div>
            <div>
                    <h1>Banking details </h1>
            <div className="field">
              <label>  Account number </label>
              <input class="input" type="text" placeholder="Account number" />
            </div>
            <div className="field">
              <label> Accounts holder </label>
              <input class="input" type="text" placeholder="Accounts holder" />
            </div>
            <div className="field">
              <label> Branch name </label>
              <input class="input" type="text" placeholder="Branch name" />
            </div>
          </div>
    
            </div>
        );
    }
}

Form3.propTypes = {

};

export default Form3;