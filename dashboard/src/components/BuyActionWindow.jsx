import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [orderType, setOrderType] = useState("LIMIT");
  const [orderOption, setOrderOption] = useState("MIS");
  const [statusMessage, setStatusMessage] = useState("");
  const generalContext = useContext(GeneralContext);

  const marginRequired = ((Number(stockQuantity) * Number(stockPrice)) * 0.1).toFixed(2);

  const handleOrderClick = async () => {
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${backendURL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode,
        },
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        }
      );
      if (response.data?.success) {
        setStatusMessage(`${mode} order placed: ${uid} (${stockQuantity})`);
      } else {
        setStatusMessage(`Failed to place ${mode} order`);
      }
    } catch (err) {
      setStatusMessage(`Error: ${err.message}`);
    }

    setTimeout(() => {
      generalContext.closeBuyWindow();
    }, 800);
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="buy-window-overlay">
      <div className="buy-window">
        <div className="buy-header">
          <div>
            <p className="trade-title">{mode === "SELL" ? "Sell" : "Buy"} {uid}</p>
            <p className="trade-subtitle">NSE ₹{Number(stockPrice).toFixed(2)} x {stockQuantity} Qty</p>
          </div>
          <button className="close-btn" onClick={handleCancelClick}>
            ×
          </button>
        </div>

        <div className="buy-tabs">
          <button className="tab active">Regular</button>
          <button className="tab">Cover</button>
          <button className="tab">AMO</button>
        </div>

        <div className="radio-row">
          <label className="radio-pill">
            <input
              type="radio"
              name="orderOption"
              checked={orderOption === "MIS"}
              onChange={() => setOrderOption("MIS")}
            />
            <span>Intraday MIS</span>
          </label>
          <label className="radio-pill">
            <input
              type="radio"
              name="orderOption"
              checked={orderOption === "CNC"}
              onChange={() => setOrderOption("CNC")}
            />
            <span>Longterm CNC</span>
          </label>
        </div>

        <div className="radio-row">
          <label className="radio-pill">
            <input
              type="radio"
              name="orderType"
              checked={orderType === "MARKET"}
              onChange={() => setOrderType("MARKET")}
            />
            <span>Market</span>
          </label>
          <label className="radio-pill">
            <input
              type="radio"
              name="orderType"
              checked={orderType === "LIMIT"}
              onChange={() => setOrderType("LIMIT")}
            />
            <span>Limit</span>
          </label>
        </div>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min={1}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
          <fieldset>
            <legend>Trigger price</legend>
            <input
              type="number"
              name="trigger"
              id="trigger"
              disabled={orderType === "MARKET"}
              placeholder={orderType === "MARKET" ? "-" : "Enter trigger"}
            />
          </fieldset>
        </div>

        <div className="order-footer">
          <span>Margin required ₹{marginRequired}</span>
          <div>
            <button className="btn btn-blue" onClick={handleOrderClick}>
              {mode === "SELL" ? "Sell" : "Buy"}
            </button>
            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>

        {statusMessage && <p className="order-status">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default BuyActionWindow;
