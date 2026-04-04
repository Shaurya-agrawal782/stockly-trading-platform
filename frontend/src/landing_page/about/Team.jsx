import React from 'react';
function Team() {
  return (
    <div className="container">
      <div className="row mt-4 ">
        <h1 className="fs-3 text-center mt-5 mb-1 ">People</h1>
      </div>
      <div className="row mt-2 ">
        <div className="col mt-4 text-center">
          <img
            src="/Assets/Shaurya_Agrawal.png"
            style={{ borderRadius: "100%", width: "60%" }}
            className="img-fluid mx-5"
          />
          <h4 className="mt-5">Shaurya Agrawal</h4>
          <h6 className="mt-3">Founder & Developer</h6>
        </div>
        <div className="col mt-5 ">
          <p className="mt-5">
            {" "}
            <p className={{fontSize:"25px"}}>Stockly was conceptualized and developed as a hands-on project to
            deeply understand how modern trading platforms are designed, built,
            and scaled.</p> <p> The focus has been on solving real-world problems
            through clean architecture, modular design, and practical
            engineering decisions.</p> <p>When not building products, Shaurya enjoys
            exploring new technologies and improving system performance and user
            experience.</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;