import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="admin-wrapper">

      {/* Desktop Sidebar */}
      <div className={`sidebar-desktop ${collapsed ? "collapsed" : ""}`}>
        <Sidebar collapsed={collapsed} />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="sidebar-mobile">
            <Sidebar closeSidebar={() => setSidebarOpen(false)} />
          </div>
        </>
      )}

      <div className="main-section">
        <Topbar collapsed={collapsed} toggleCollapse={toggleCollapse} toggleSidebar={toggleSidebar}/>
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;