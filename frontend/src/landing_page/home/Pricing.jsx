import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3  mt-4">Simple & transparent pricing</h1>
          <p>
            Straightforward charges with no hidden fees — built for both long-term investors and active traders.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            see pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mt-4">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1>₹0</h1>
              <br></br>
              <p>Equity delivery & direct mutual funds</p>
            </div>
            <div className="col p-4 border">
              <h1>₹20</h1>
              <br />
              <p>Flat trading fee for intraday & derivatives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
