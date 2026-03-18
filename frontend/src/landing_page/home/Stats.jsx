import React from 'react';
function Stats() {
    return ( 
       <div className="container p-5">
        <div className="row">
            <div className="col-6">
               <h1 className='mb-5 mt-5'>Trust with confidence</h1>
               <h3>Customer-first always</h3>
               <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
               <h3 className='mt-5'>No spam or gimmicks</h3>
               <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
               <h3 className='mt-5'>The Zerodha universe</h3>
               <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
               <h3 className='mt-5'>Do better with money</h3>
               <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6">
                <img src='/Assets/ecosystem.png' className='img-fluid mx-0 mt-5'/>
                <div className='text-center mt-5'>
                    <a href="" className='mx-5' style={{textDecoration :"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" className='mx-4'style={{textDecoration :"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Stats ;