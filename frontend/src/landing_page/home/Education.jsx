import React from 'react';

function Education() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                <img src='/Assets/education.svg' className='img-fluid mx-0 mt-5'/>

                </div>
                <div className="col-6 mt-5">
                    <h1 className='mb-3  mt-4' >Learn before you invest</h1>
                  <p>Stockly Learn — structured guides covering markets, trading, and investing.</p>
                  <a href=""style={{textDecoration :"none"}}>Stockly Learn<i class="fa-solid fa-arrow-right"></i></a>

                   
                  <p className='mt-3'>Stockly Community — ask questions, share insights, and learn from peers.</p>
                  <a href=""style={{textDecoration :"none"}}>Stockly Community <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;