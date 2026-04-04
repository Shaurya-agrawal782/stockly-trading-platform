import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className="container" mt-5>
            <div className="row mt-5 text-center">
                <div className="col">
                <h1 className='mt-5 mb-2'>Open a Stockly account</h1>
                <p className='mt-4 mb-5'>Start your investing journey with modern tools, zero delivery brokerage, and simple pricing.</p>
                <Link to="/signup" className="btn btn-primary mb-5">Signup For free</Link>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;