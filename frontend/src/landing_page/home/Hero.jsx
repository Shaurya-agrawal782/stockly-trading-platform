import React from 'react';
function Hero() {
    return ( 
       <div className="container p-5">
        <div className="row text-center ">
            <div className="col">
                    <img src='/Assets/homeHero.png' alt='Hero image' className='img-fluid mx-0 mb-5 ' />
                <h1 className='mt-1'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button class="btn btn-primary mb-5">Signup Now For free</button>
            </div>
        </div>
       </div>
     );
}

export default Hero;