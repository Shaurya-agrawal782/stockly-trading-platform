import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container p-4 ">
            <h1 className='text-center'>Support Portal</h1>
            <div className="row p-5">
                <div className="col-4">
                  <h5><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Resident individual</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Minor</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Glossary</a>
                </div>
                <div className="col-4">
                    <h5><i class="fa-regular fa-circle-user"></i> Your Zerodha Account</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account modification</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of securities</a>          
                </div>
                <div className="col-4">
                    <h5> <i class="fa-solid fa-circle-plus"></i>Kite</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charts and orders</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Alerts and Nudges</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a>
                    
                </div>
            </div>
            <div className="row p-5">
                <div className="col-4">
                  <h5> <i class="fa-solid fa-indian-rupee-sign"></i> Funds</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw money</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add bank accounts</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a><br />

                </div>
                <div className="col-4">
                    <h5> <i class="fa-solid fa-circle-plus"></i>Console</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Segments</a> <br />         
                </div>
                <div className="col-4">
                    <h5> <i class="fa-solid fa-circle-plus"></i>Coin</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual funds</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Fixed Deposit (FD)</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Features on Coin</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Payments and Orders</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General</a> <br />   
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;