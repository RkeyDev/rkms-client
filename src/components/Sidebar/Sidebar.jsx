import { useState } from "react";
import styles from "./sidebar-styles.module.css";

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

function Sidebar({ page, name }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getNavLinkClass = (id) => {
    const isActive = page.toLowerCase() === id;
    return `${styles.navItem} ${isActive ? styles.active : ""}`;
  };

  const containerClass = `${styles.sidebarContainer} ${!isOpen ? styles.closed : ""}`;

  return (
    <div className={containerClass}>
      <div className={styles.header}>
        {/* We keep the H1 in the DOM so the layout doesn't jump */}
        <h1 className={styles.logo}>RKMS</h1>
        <button className={styles.burgerBtn} onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.avatar}>{getInitials(name)}</div>
        <a href="#profile" className={styles.profileName}>
          {name}
        </a>
      </div>

      <nav className={styles.navLinks}>
        <div className={getNavLinkClass("dashboard")}>
          <span className={styles.navIcon}>📊</span>
          <span className={styles.navText}>Dashboard</span>
        </div>
        <div className={getNavLinkClass("endpoints")}>
          <span className={styles.navIcon}>🔌</span>
          <span className={styles.navText}>Endpoints</span>
        </div>
        <div className={getNavLinkClass("connection")}>
          <span className={styles.navIcon}>📡</span>
          <span className={styles.navText}>Connection</span>
        </div>
      </nav>

      <div className={styles.logoutSection}>
        <span className={styles.logoutText}>Logout</span>
        <button className={styles.logoutBtn}>
          <img src="/src/assets/logout-icon.png" alt="logout" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;