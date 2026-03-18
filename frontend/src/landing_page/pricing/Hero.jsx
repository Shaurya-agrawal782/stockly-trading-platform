import React from 'react';
function Hero() {
    return ( 
        <div className="container mt-5 p-5 border-bottom">
            <div className="row text-center">
                <h1 className='mt-3 mb-3'>Pricing</h1>
                <p className='text-muted'>Free equity investments and flat ₹20 trady and F&O trades</p>
            </div>
            <div className="row text-center mt-3">
            <div className="col-4 p-5">
            <img src="/Assets/pricingEquity.svg" className='mb-4'  style={{ width: "100%" }} />
            <h4 className='mb-4 '>Free equity delivery</h4>
            <p className="text-small text-muted ">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img src="/Assets/other-trades.svg" className='mb-4'  style={{ width: "100%" }}/>
            <h4 className='mb-4 '>Intraday and F&O trades</h4>
            <p className="text-small text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="/Assets/pricingEquity.svg"className='mb-4'  style={{ width: "100%" }} />
            <h4 className='mb-4'>Free direct MF</h4>
            <p className="text-small text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </p>
          </div>
          </div>
        </div>
     );
}

export default Hero;