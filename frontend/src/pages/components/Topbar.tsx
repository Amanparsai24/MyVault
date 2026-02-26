import { useState, useRef, useEffect } from "react";
import userimg from "../../assets/avatar-8.jpg";
import { useNavigate } from "react-router-dom";

interface TopbarProps {
  toggleSidebar: () => void;
  toggleCollapse: () => void;
  collapsed: boolean;
}

const Topbar = ({ toggleSidebar, toggleCollapse, collapsed }: TopbarProps) => {

  const [openProfile, setOpenProfile] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Static Notification Data
  const notifications = [
    { id: 1, title: "New transaction received", time: "2 min ago" },
    { id: 2, title: "Monthly report generated", time: "1 hour ago" },
    { id: 3, title: "New user registered", time: "Today" }
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setOpenProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node)
      ) {
        setOpenNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <header className="topbar-premium d-flex justify-content-between align-items-center px-4 py-2">

      {/* LEFT SECTION */}
      <div className="d-flex align-items-center gap-3">

        <button className="btn text-white d-md-none" onClick={toggleSidebar}>
          <i className="bi bi-list fs-4"></i>
        </button>

        <button className="btn text-white d-none d-md-inline" onClick={toggleCollapse}>
          {collapsed ? (
            <i className="bi bi-chevron-right"></i>
          ) : (
            <i className="bi bi-chevron-left"></i>
          )}
        </button>

      </div>

      {/* RIGHT SECTION */}
      <div className="d-flex align-items-center gap-4">

        {/* NOTIFICATION */}
        <div className="position-relative" ref={notificationRef}>
          <button
            className="btn text-white position-relative"
            onClick={() => setOpenNotification(!openNotification)}
          >
            <i className="bi bi-bell fs-5"></i>

            {/* Badge */}
            <span className="notification-badge">
              {notifications.length}
            </span>
          </button>

          {openNotification && (
            <div className="notification-dropdown fade-slide">
              <div className="dropdown-header-custom">
                Notifications
              </div>

              <div className="dropdown-divider-line"></div>

              {notifications.map((item) => (
                <div key={item.id} className="notification-item">
                  <div className="fw-medium">{item.title}</div>
                  <small className="text-muted">{item.time}</small>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="position-relative" ref={profileRef}>
          <button
            className="profile-btn d-flex align-items-center"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <img
              src={userimg}
              alt="User"
              className="profile-img"
            />
            <span className="profile-name d-none d-md-inline">
              Admin
            </span>
            <i className="bi bi-chevron-down profile-arrow d-none d-md-inline"></i>
          </button>

          {openProfile && (
            <div className="profile-dropdown fade-slide">
              <button className="dropdown-item-custom">
                My Profile
              </button>

              <div className="dropdown-divider-line"></div>

              <button className="dropdown-item-custom">
                Settings
              </button>

              <div className="dropdown-divider-line"></div>

              <button
                className="dropdown-item-custom text-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Topbar;