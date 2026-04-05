import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : { username: "Zerodha User", email: "hello@zerodha.com" };
  });

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const token = localStorage.getItem("token");
      await fetch(`${backendURL}/logout`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = import.meta.env.VITE_FRONTEND_URL;
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const backendURL = import.meta.env.VITE_BACKEND_URL;
        const token = localStorage.getItem("token");
        const response = await fetch(`${backendURL}/`, {
          method: "POST",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const data = await response.json();
        if (data.status && data.user) {
          setUser({
            username: data.user.username || "Zerodha User",
            email: data.user.email || "hello@zerodha.com",
          });
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          window.location.href = import.meta.env.VITE_FRONTEND_URL;
        }
      } catch (error) {
        console.error("User verification failed:", error);
        window.location.href = import.meta.env.VITE_FRONTEND_URL;
      }
    };

    fetchUser();
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "130px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          
        </ul>
        <hr />
        <div className="profile-dropdown-wrapper">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{user.username?.charAt(0).toUpperCase() || "Z"}</div>
            <p className="username">{user.username || "USERID"}</p>
          </div>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-header">
                <p className="profile-name">{user.username || "Zerodha User"}</p>
                <p className="profile-email">{user.email || "hello@zerodha.com"}</p>
              </div>
              <div className="profile-dropdown-body">
                <button className="dropdown-item disabled">My profile / Settings</button>
                <button className="dropdown-item disabled">Console</button>
                <button className="dropdown-item disabled">Coin</button>
                <button className="dropdown-item disabled">Support</button>
                <button className="dropdown-item disabled">Invite friends</button>
                <button className="dropdown-item disabled">Tour Kite</button>
                <button className="dropdown-item disabled">Keyboard shortcuts</button>
                <button className="dropdown-item disabled">Help</button>
                <hr />
                <button className="dropdown-item logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
