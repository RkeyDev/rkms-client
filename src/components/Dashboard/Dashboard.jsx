import Sidebar from "../Sidebar/Sidebar";
import styles from "../Dashboard/dashboard-styles.module.css";

const TEAMS_DATA = [
  { id: 1, name: "Development", manager: "Roei Kleiner", endpoints: 44 },
  { id: 2, name: "Marketing", manager: "Noam STC", endpoints: 6 },
  { id: 3, name: "Sales", manager: "Noam STC", endpoints: 2 },
  { id: 4, name: "IT Support", manager: "Jhon Smith", endpoints: 23 },
  { id: 5, name: "Costumer Su...", manager: "Piti Levi", endpoints: 15 },
];

function Dashbord() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar page="Dashboard" name="Roei Kleiner" />

      <main className={styles.dashboardContainer}>
        <div className={styles.card}>
          <h1 className={styles.title}>Dashboard</h1>
          <hr className={styles.divider} />

          <div className={styles.headerRow}>
            <h2 className={styles.subtitle}>Teams</h2>
            <button className={styles.createBtn}>Create New Team</button>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: "30px" }}></th>
                <th>Team Name</th>
                <th>Manager</th>
                <th>Endpoints</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {TEAMS_DATA.map((team) => (
                <tr key={team.id}>
                  <td className={styles.idCell}>{team.id}</td>
                  <td>{team.name}</td>
                  <td>{team.manager}</td>
                  <td>{team.endpoints}</td>
                  <td className={styles.actionCell}>
                    <button className={styles.viewBtn}>View</button>
                    <button className={styles.settingsBtn}>Settings</button>
                  </td>
                </tr>
              ))}
              {/* Empty filler rows to match UI design */}
              {[6, 7, 8, 9].map((id) => (
                <tr key={id} className={styles.emptyRow}>
                  <td className={styles.idCell}>{id}</td>
                  <td></td><td></td><td></td><td></td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.footer}>
            <div className={styles.navBtns}>
              <button className={styles.navBtn}>Previous</button>
              <button className={styles.navBtn}>Next</button>
            </div>
            <span className={styles.pageInfo}>Page 1 of 1</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashbord;