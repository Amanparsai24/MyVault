import { useState } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  const [openSub, setOpenSub] = useState(false);

  const handleMobileClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  };

  return (
    <div className={`sidebar-desktop ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">

        {/* LOGO */}
        <div className="sidebar-logo">
          <i className="bi bi-bank"></i>
          {!collapsed && <span>Admin Panel</span>}
        </div>

        <ul className="menu">

          <li>
            <NavLink 
              to="/" 
              className="menu-link"
              title="Dashboard"
              onClick={handleMobileClick}
            >
              <i className="bi bi-speedometer2 menu-icon"></i>
              {!collapsed && <span>Dashboard</span>}
              {collapsed && <div className="custom-tooltip">Dashboard</div>}
            </NavLink>
          </li>

          <li>
            <div
              className="menu-link"
              onClick={() => setOpenSub(!openSub)}
              title="Users"
            >
              <i className="bi bi-people menu-icon"></i>
              {!collapsed && (
                <>
                  <span>Users</span>
                  <i className={`bi ms-auto ${openSub ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                </>
              )}
              {collapsed && <div className="custom-tooltip">Users</div>}
            </div>

            <div className={`submenu-wrapper ${openSub ? "open" : ""}`}>
              <ul className="submenu">
                <li onClick={handleMobileClick}>User List</li>
                <li onClick={handleMobileClick}>Add User</li>
              </ul>
            </div>
          </li>

        </ul>

      </div>
    </div>
  );
};

export default Sidebar;