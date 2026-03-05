import { useState } from "react";
import { NavLink } from "react-router-dom"; // Use Link for navigation
import styles from "./sidebar-styles.module.css";

/**
 * 
 * @param {String} name 
 * @returns Initals of a string (e.g: Roei Kleiner -> RK)
 */
function getInitials(name) {
  if (!name) return "";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function Sidebar({ name }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // NavLink provides an 'isActive' boolean in its style/className callback
  const getActiveClass = ({ isActive }) => 
    `${styles.navItem} ${isActive ? styles.active : ""}`;

  const containerClass = `${styles.sidebarContainer} ${!isOpen ? styles.closed : ""}`;

  return (
    <div className={containerClass}>
      <div className={styles.header}>
        <h1 className={styles.logo}>RKMS</h1>
        <button className={styles.burgerBtn} onClick={toggleSidebar} aria-label="Toggle Sidebar">
          ☰
        </button>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.avatar}>{getInitials(name)}</div>
        {/* Changed to Link for internal routing */}
        <NavLink to="/profile" className={styles.profileName}>
          {name}
        </NavLink>
      </div>

      <nav className={styles.navLinks}>
        {/* to="/" or "/dashboard" depending on your route setup */}
        <NavLink to="/dashboard" className={getActiveClass}>
          <span className={styles.navText}>Dashboard</span>
        </NavLink>

        <NavLink to="/endpoints" className={getActiveClass}>
          <span className={styles.navText}>Endpoints</span>
        </NavLink>

        <NavLink to="/connection" className={getActiveClass}>
          <span className={styles.navText}>Connection</span>
        </NavLink>
      </nav>

      <div className={styles.logoutSection}>
        <span className={styles.logoutText}>Logout</span>
        <button className={styles.logoutBtn} onClick={() => console.log("Logging out...")}>
          <img src="/src/assets/logout-icon.png" alt="logout" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;