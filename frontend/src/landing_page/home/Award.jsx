import React from 'react';
function Award () {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                   <img src='/Assets/largestBroker.svg' className='img-fluid mx-0 mb-4'/>
                </div>
                <div className="col-6">
                     <h1 className='mb-5'>Trusted by millions of investors</h1>
                     <p className='mb-4'>Millions of Stockly users actively trade and invest every day across multiple market segments:</p>
                     <div className="row">
                        <div className="col-6">
                     <ul>
                        <li>
                            <p>Equity & IPO investments</p>
                        </li>
                        <li>
                            <p>Futures & options trading</p>
                        </li>
                        <li>
                            <p>Commodity & currency derivatives</p>
                        </li>
                     </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds & government securities</p>
                        </li>
                     </ul>

                        </div>
                     </div>
                     <img src="/Assets/pressLogos.png" className='img-fluid mx-0 mt-5 mb-3' />
                     
                </div>
            </div>
        </div>
     );
}

export default Award;