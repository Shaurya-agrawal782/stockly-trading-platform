import React from 'react';
function Stats() {
    return ( 
       <div className="container p-5">
        <div className="row">
            <div className="col-6">
               <h1 className='mb-5 mt-5'>Built on trust</h1>
               <h3>We put customers first — always.</h3>
               <p>Stockly powers a large share of India’s retail market activity by enabling transparent, reliable, and efficient investing experiences.</p>
               <h3 className='mt-5'>No noise. Just investing.</h3>
               <p>No spam, no gimmicks, and no unnecessary distractions. Stockly products are designed to give you control, clarity, and a calm investing experience.</p>
               <h3 className='mt-5'>The Stockly ecosystem</h3>
               <p>More than just a trading app — Stockly connects you to a growing ecosystem of fintech solutions designed around real investor needs.</p>
               <h3 className='mt-5'>Invest with confidence</h3>
               <p>Smart risk controls, alerts, and safety features help you stay disciplined and make better financial decisions.</p>
            </div>
            <div className="col-6">
                <img src='/Assets/ecosystem.png' className='img-fluid mx-0 mt-5'/>
                <div className='text-center mt-5'>
                    <a href="" className='mx-5' style={{textDecoration :"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" className='mx-4'style={{textDecoration :"none"}}>Try the Stockly trading experience <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Stats ;