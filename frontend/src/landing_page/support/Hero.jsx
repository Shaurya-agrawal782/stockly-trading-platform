import React from 'react';
import './Hero.css';
function Hero() {
    return ( 
        <div className="container mb-3"  id='supportHero'>
            <div className="row p-5 mx-1">
                <div className="col mx-5 ">
                 <h5 style={{color:"white"}}>Support Portal</h5>
                </div>
                <div className="col mx-5 text-center">
                  <a href="" className='text-center '>Track Tickets</a>
                </div>
            </div>
            <div className="row mx-5">
                <div className="col mx-5 ">
                   <h4 id='support'>Search for an answer or browser help topics</h4>
                   <h4 id='support'>to create a ticket</h4>
                   <input className='mt-3' placeholder='Eg. how do i activate F&O, why is my order getting rejected.' /><br />
                   <div className='mt-3'>
                    <div className='mb-2'>
                   <a href="">Track account opening </a>
                   &nbsp;&nbsp;&nbsp;<a href="">Track segment activation </a>
                   &nbsp;&nbsp;&nbsp;<a href="">Intraday margins     </a><br />
                   </div>
                   <div className='mb-5'>
                   <a href="">Kite user manual</a>
                   </div>
                   </div>


                </div>
                <div className="col">
                   <h4 id='support'>Featured</h4>
                   <div className='p-2'>
                   <a href=""> &nbsp;1. Current takeovers and Delisting - January 2024</a>
                   <br /><br />
                   <a href="">&nbsp;2. Latest Intraday leverages - MIS & CO</a>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;