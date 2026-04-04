import React from 'react';
function Hero() {
    return ( 
        <div className="container text-center p-5 border-bottom mt-5" >
           <h1 className='mb-3'>Stockly Products</h1>
           <h3 className='mb-4 text-muted fs-4'>Sleek, modern, and intuitive trading platforms</h3>
           <p>Check out our <a href="" style={{ textDecoration: "none" }}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
     );
}

export default Hero;