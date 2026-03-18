import React from "react";
function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-3  mt-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
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
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-4 border">
              <h1>₹20</h1>
              <br />
              <p>Intrady and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
