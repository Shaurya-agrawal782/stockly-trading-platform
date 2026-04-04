import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="fs-3 text-center mt-5 mb-5">
          We believe that investing and trading should be <br /> simple,
          transparent, and accessible to everyone 1.
        </h1>
      </div>
      <div className="row mt-5 border-top ">
        <div className="col mt-5 mx-5 p-5 ">
          <p>
            Stockly was built with the vision of reducing the complexity, cost,
            and friction that traders and investors often face when interacting
            with financial markets. From day one, our focus has been on creating
            clean user experiences, reliable technology, and scalable systems
            that empower users to make informed decisions.
          </p>{" "}
          {" "}
          <p>
            {" "}
            Launched as a technology-driven trading platform, Stockly brings
            together modern design, fast execution, and data-driven insights to
            support both new and experienced market participants. Our platform
            is designed to handle real-time market workflows while maintaining
            simplicity and performance.
          </p>
        </div>
        <div className="col mt-5 p-5">
          <p>
            Today, Stockly is evolving as a full-stack trading ecosystem,
            offering:
            <ul>
              <li>A powerful trading dashboard</li>
              <li>Investment and portfolio management tools</li>
              <li>Developer-friendly APIs</li>
              <li>Learning and educational resources</li>
            </ul>
          </p>
          <p>
            In addition to product development, we strongly believe in financial education. Through Stockly Learn, we aim to help users understand markets, instruments, and risk management better, enabling long-term confidence and growth.
          </p>{" "}
          <p>
            Stockly is continuously improving — experimenting, iterating, and building — with a long-term goal of shaping how modern trading platforms should look and perform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
