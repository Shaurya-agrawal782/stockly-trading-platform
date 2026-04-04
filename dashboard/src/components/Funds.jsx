import React, { useEffect, useState } from "react";
import axios from "axios";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("ADD");
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3002";

  const loadFunds = async () => {
    try {
      const res = await axios.get(`${backendURL}/funds`, { withCredentials: true });
      setFunds(res.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadFunds();
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setAmount(0);
    setStatus("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus("");
  };

  const handleSubmit = async () => {
    const value = Number(amount);
    if (!value || value <= 0) {
      setStatus("Enter a valid amount");
      return;
    }

    try {
      const endpoint = modalType === "ADD" ? "/funds/add" : "/funds/withdraw";
      const res = await axios.post(
        `${backendURL}${endpoint}`,
        { amount: value },
        { withCredentials: true }
      );

      if (res.data?.success) {
        setFunds(res.data.funds);
        setStatus(modalType === "ADD" ? "Funds added successfully." : "Withdrawal request processed.");
        setTimeout(() => {
          closeModal();
        }, 1000);
      } else {
        setStatus(res.data?.message || "Something went wrong");
      }
    } catch (err) {
      setStatus(err?.response?.data?.message || err.message);
    }
  };

  if (error) return <div>Funds error: {error}</div>;
  if (!funds) return <div>Loading funds...</div>;

  return (
    <>
      <div className="funds-header">
        <div>
          <p>Instant, zero-cost fund transfers with UPI</p>
        </div>
        <div className="funds-actions">
          <button className="btn btn-green" onClick={() => openModal("ADD")}>Add funds</button>
          <button className="btn btn-blue" onClick={() => openModal("WITHDRAW")}>Withdraw</button>
        </div>
      </div>

      <div className="funds-grid">
        <div className="funds-card">
          <div className="funds-card-title">Equity</div>
          <div className="funds-item">
            <p>Available margin</p>
            <p>₹{funds.availableMargin.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Used margin</p>
            <p>₹{funds.usedMargin.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Available cash</p>
            <p>₹{funds.availableCash.toFixed(2)}</p>
          </div>
          <div className="funds-divider" />
          <div className="funds-item">
            <p>Opening balance</p>
            <p>₹{funds.openingBalance.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Payin</p>
            <p>₹{funds.payin.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>SPAN</p>
            <p>₹{funds.span.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Delivery margin</p>
            <p>₹{funds.deliveryMargin.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Exposure</p>
            <p>₹{funds.exposure.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Options premium</p>
            <p>₹{funds.optionsPremium.toFixed(2)}</p>
          </div>
          <div className="funds-divider" />
          <div className="funds-item">
            <p>Collateral (Liquid funds)</p>
            <p>₹{funds.liquidCollateral.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Collateral (Equity)</p>
            <p>₹{funds.equityCollateral.toFixed(2)}</p>
          </div>
          <div className="funds-item">
            <p>Total collateral</p>
            <p>₹{(funds.liquidCollateral + funds.equityCollateral).toFixed(2)}</p>
          </div>
        </div>

        <div className="commodity-card">
          <p>You don't have a commodity account</p>
          <button className="btn btn-blue" onClick={() => openModal("ADD")}>Open Account</button>
        </div>
      </div>

      {showModal && (
        <div className="funds-modal-overlay">
          <div className="funds-modal">
            <div className="funds-modal-header">
              <div>
                <h3>{modalType === "ADD" ? "Add Funds" : "Withdraw Funds"}</h3>
                <p>{modalType === "ADD" ? "Credit money to your Zerodha account." : "Withdraw available cash to your bank."}</p>
              </div>
              <button className="funds-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="funds-modal-body">
              <div className="funds-modal-item">
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  min="0"
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                />
              </div>
              <div className="funds-modal-info">
                <p>Available cash: ₹{funds.availableCash.toFixed(2)}</p>
                <p>Balance after action: ₹{modalType === "ADD" ? (funds.availableCash + Number(amount || 0)).toFixed(2) : Math.max(0, funds.availableCash - Number(amount || 0)).toFixed(2)}</p>
              </div>
            </div>
            <div className="funds-modal-footer">
              <button className="btn btn-grey" onClick={closeModal}>Cancel</button>
              <button className="btn btn-blue" onClick={handleSubmit}>{modalType === "ADD" ? "Add funds" : "Withdraw"}</button>
            </div>
            {status && <p className="funds-modal-status">{status}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;
