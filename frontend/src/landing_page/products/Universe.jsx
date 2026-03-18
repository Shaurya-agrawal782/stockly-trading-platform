import React from 'react';

function Universe() {
    return (
      <div className="container">
        <div className="row text-center">
          <h2 className="mb-4">The Zerodha Universe</h2>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-5">
            <img src="/Assets/zerodhaFundhouse.png" className='mb-4'  style={{ width: "50%" }} />
            <p className="text-small text-muted">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img src="/Assets/sensibullLogo.svg" className='mb-4'  style={{ width: "50%" }}/>
            <p className="text-small text-muted">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="/Assets/goldenpiLogo.png"className='mb-4'  style={{ width: "50%" }} />
            <p className="text-small text-muted">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="/Assets/streakLogo.png"className='mb-4'  style={{ width: "50%" }}/>
            <p className="text-small text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-5 ">
            <img src="/Assets/smallcaseLogo.png" className='mb-4'  style={{ width: "50%" }}/>
            <p className="text-small text-muted">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-5">
            <img src="/Assets/dittoLogo.png"className='mb-4'  style={{ width: "50%" }} />
            <p className="text-small text-muted">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
        <div className='text-center'>
        <button class="btn btn-primary mb-5 ">Signup Now For free</button>
        </div>
      </div>
    );
}

export default Universe;