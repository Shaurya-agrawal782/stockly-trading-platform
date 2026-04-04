import React from 'react';
import './Hero.css';
function Hero() {
    return ( 
        <div className="container mb-3"  id='supportHero'>
            <div className="row p-5 mx-1">
                <div className="col mx-5 ">
                 <h5 style={{color:"white"}}>Stockly Support Center</h5>
                </div>
                <div className="col mx-5 text-center">
                  <a href="" className='text-center '>Track Tickets</a>
                </div>
            </div>
            <div className="row mx-5">
                <div className="col mx-5 ">
                   <h4 id='support'>Track your support requests or explore help topics</h4>
                   <h4 id='support'>Search for answers before raising a ticket</h4>
                   <input className='mt-3' placeholder='Examples: How do I activate derivatives? Why was my order rejected?' /><br />
                   <div className='mt-3'>
                    <div className='mb-2'>
                   <a href="">Track account status</a>
                   &nbsp;&nbsp;&nbsp;<a href="">Segment & feature activation</a>
                   &nbsp;&nbsp;&nbsp;<a href="">Intraday & margin details</a><br />
                   </div>
                   <div className='mb-5'>
                   <a href="">Stockly Trade user guide</a>
                   </div>
                   </div>


                </div>
                <div className="col">
                   <h4 id='support'>Featured Updates</h4>
                   <div className='p-2'>
                   <a href="">&nbsp;1. Ongoing corporate actions & delistings</a>
                   <br /><br />
                   <a href="">&nbsp;2. Latest intraday margin rules and leverage updates</a>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;