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
              src="/Assets/nithinKamath.jpg"
              style={{ borderRadius: "100%" ,width:"60%" }}
              className="img-fluid mx-5"
            />
            <h4 className='mt-5'>Nithin Kamath</h4>
            <h6 className='mt-3'>Founder, CEO</h6>
          </div>
          <div className="col mt-5 ">
            <p className='mt-5'> Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p><p> He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p><p> Playing basketball is
            his zen.</p> <p>Connect on <a href="">Homepage</a> / <a href="">TradingQnA </a>/ <a href="">Twitter</a></p>
          </div>
        </div>
      </div>
    );
}

export default Team;