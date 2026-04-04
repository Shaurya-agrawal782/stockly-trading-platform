import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
       <div className="container p-5">
        <div className="row text-center ">
            <div className="col">
                    <img src='/Assets/homeHero.png' alt='Hero image' className='img-fluid mx-0 mb-5 ' />
                <h1 className='mt-1'>Invest smarter, all in one place</h1>
                <p>A modern investment platform to trade and invest in stocks, derivatives, mutual funds, ETFs, bonds, and more — seamlessly.</p>
                <Link to="/signup" className="btn btn-primary mb-5">Signup Now For free</Link>
            </div>
        </div>
       </div>
     );
}

export default Hero;