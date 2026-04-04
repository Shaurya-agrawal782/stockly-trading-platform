import React from 'react';
import './Footer.css';
function Footer() {
    return (
      <div className="container border-top mt-5 p-5" style={{backgroundColor:"rgb(240, 240, 240)"}}>
        <div className="row mt-5">
          <div className="col">
            <img src="/Assets/logo.png" style={{ width: "50%" }} alt="logo" />
            <p>Stockly Broking Ltd. All rights reserved.</p>
          </div>
          <div className="col">
            <h4>Account</h4>
            <div className="footer-links">
              <a href="">Open demat account</a>
              <a href="">Minor demat account</a>
              <a href="">NRI demat account</a>
              <a href="">HUF & business accounts</a>
              <a href="">Commodities & derivatives</a>
            </div>
          </div>
          <div className="col">
            <h4>Support</h4>
            <div className="footer-links">
              <a href="">Contact support</a>
              <a href="">Support center</a>
              <a href="">File a complaint</a>
              <a href="">Complaint status</a>
              <a href="">Announcements</a>
            </div>
          </div>
          <div className="col">
            <h4>Company</h4>
            <div className="footer-links">
              <a href="">About Stockly</a>
              <a href="">Our philosophy</a>
              <a href="">Press & media</a>
              <a href="">Careers</a>
              <a href="">CSR initiatives</a>
              <a href="">Technology & open source</a>
            </div>
          </div>
          <div className="col">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="">Upcoming IPOs</a>
              <a href="">Brokerage & charges</a>
              <a href="">Market holidays</a>
              <a href="">Economic calendar</a>
              <a href="">Investment calculators</a>
              <a href="">Market overview</a>
             
            </div>
          </div>
        </div>


        </div>
    );
}

export default Footer;
