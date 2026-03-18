import React from 'react';
function Award () {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                   <img src='/Assets/largestBroker.svg' className='img-fluid mx-0 mb-4'/>
                </div>
                <div className="col-6">
                     <h1 className='mb-5'>Largest stock broker in India </h1>
                     <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                     <div className="row">
                        <div className="col-6">
                     <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity and Options</p>
                        </li>
                        <li>
                            <p>Currently derivatives</p>
                        </li>
                     </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt.Securities</p>
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