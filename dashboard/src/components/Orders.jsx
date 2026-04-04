import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [todayOrders, setTodayOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3002';
    axios
      .get(`${backendURL}/orders`, { withCredentials: true })
      .then((res) => {
        setTodayOrders(res.data || []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div>Orders error: {error}</div>;

  if (todayOrders.length === 0)
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );

  return (
    <div className="orders">
      <h3>Orders ({todayOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Placed At</th>
            </tr>
          </thead>
          <tbody>
            {todayOrders.map((order, index) => (
              <tr key={order._id || index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
                <td>{new Date(order.createdAt || order._id?.getTimestamp?.()).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
