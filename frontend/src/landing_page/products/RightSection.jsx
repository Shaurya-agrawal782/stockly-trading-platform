import React from 'react';
function RightSection({imageURL ,productName, productDescription, learnMore }) {
  return (
    <div className="container p-4">
        <div className="row ">
            <div className="col-6 p-5 mr-5 mt-5">
            <h1 className='mb-4 mt-5'>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={learnMore} style={{ textDecoration: "none"}}>learnMore <i class="fa-solid fa-arrow-right"></i></a>
            </div>

          </div>
            <div className="col-6 p-3">
            <img src={imageURL} className='img-fluid mx-0 ' />
            </div>
            
        </div>
    </div>
  );
}

export default RightSection;