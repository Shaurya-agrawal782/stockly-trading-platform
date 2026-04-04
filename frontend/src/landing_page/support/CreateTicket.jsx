import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container p-4 ">
            <h1 className='text-center'>Stockly Support Center</h1>
            <div className="row p-5">
                <div className="col-4">
                  <h5><i class="fa-solid fa-circle-plus"></i> Getting Started</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Individual accounts</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Minor accounts</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>NRI accounts</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Business & institutional accounts</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading & Investment Glossary</a>
                </div>
                <div className="col-4">
                    <h5><i class="fa-regular fa-circle-user"></i> Your Stockly Account</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile & personal details</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Account updates & modifications</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Client Master & depository details</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination services</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Security transfers & conversions</a>          
                </div>
                <div className="col-4">
                    <h5> <i class="fa-solid fa-circle-plus"></i>Stockly Trade</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>IPO investments</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Margin & leverage rules</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Charts, orders & order types</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Alerts & smart notifications</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General Trading Support</a>
                </div>
            </div>
            <div className="row p-5">
                <div className="col-4">
                  <h5> <i class="fa-solid fa-indian-rupee-sign"></i> Funds & Banking</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Add funds</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw funds</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Bank account management</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates & auto-pay</a><br />

                </div>
                <div className="col-4">
                    <h5> <i class="fa-solid fa-circle-plus"></i>Account Dashboard</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio overview</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Funds & ledger statements</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Trade reports</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Segment management</a> <br />         
                </div>
                <div className="col-4">
                    <h5> <i class="fa-solid fa-circle-plus"></i>Stockly Invest</h5>
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual fund investing</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension System (NPS)</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Fixed deposits</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Investment features</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>Payments & order support</a><br />
                    <a href="" style={{textDecoration:"none", lineHeight:"2.5"}}>General investment help</a> <br />   
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;