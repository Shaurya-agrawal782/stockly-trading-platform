import React from 'react';
function LeftSection({imageURL ,productName, productDescription, tryDemo , learnMore ,googlePlay, appStore}) {
    return (
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-6 p-3">
            <img src={imageURL} />
          </div>
          <div className="col-6 p-5 mr-5">
            <h1 className='mb-4'>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
              <a href={learnMore} style={{marginLeft:"110px" , textDecoration: "none"}}>learnMore <i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className='mt-4'>
              <a href={googlePlay} >
                <img src="/Assets/googlePlayBadge.svg" />
              </a>
              <a href={appStore} style={{marginLeft:"35px"}}>
                {" "}
                <img src="/Assets/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftSection;