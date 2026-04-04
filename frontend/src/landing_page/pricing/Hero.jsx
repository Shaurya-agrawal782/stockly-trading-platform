import React from 'react';
function Hero() {
    return ( 
        <div className="container mt-5 p-5 border-bottom">
            <div className="row text-center">
                <h1 className='mt-3 mb-3'>Pricing</h1>
                <p className='text-muted'>₹0 long-term investing. Simple flat fees for active trading.</p>
            </div>
            <div className="row text-center mt-3">
            <div className="col-4 p-5">
            <img src="/Assets/pricingEquity.svg" className='mb-4'  style={{ width: "100%" }} />
            <h4 className='mb-4 '>₹0 Equity Investing</h4>
            <p className="text-small text-muted ">
              Build long-term portfolios with zero brokerage on equity delivery trades across Indian exchanges.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img src="/Assets/other-trades.svg" className='mb-4'  style={{ width: "100%" }}/>
            <h4 className='mb-4 '>Simple Flat Fees for Active Traders</h4>
            <p className="text-small text-muted">
              A low, flat brokerage is applied per executed order for intraday and derivatives trades — designed to keep trading costs predictable.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="/Assets/pricingEquity.svg"className='mb-4'  style={{ width: "100%" }} />
            <h4 className='mb-4'>Direct Mutual Fund Investing</h4>
            <p className="text-small text-muted">
              Invest in direct mutual funds with no commissions, helping you keep more of your returns over time.
            </p>
          </div>
          </div>
        </div>
     );
}

export default Hero;