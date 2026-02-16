import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table"; // Import your new component
import styles from "../Dashboard/dashboard-styles.module.css";

const TEAMS_DATA = [
  { id: 1, name: "Development", manager: "Roei Kleiner", endpoints: 44 },
  { id: 2, name: "Marketing", manager: "Noam STC", endpoints: 6 },
  { id: 3, name: "Sales", manager: "Noam STC", endpoints: 2 },
  { id: 4, name: "IT Support", manager: "Jhon Smith", endpoints: 23 },
  { id: 5, name: "Costumer Support", manager: "Piti Levi", endpoints: 15 },
];

function Dashboard() {
  
  // Define columns configuration
  const teamColumns = [
    {
      header: "",
      accessor: "id",
      width: "30px",
      cellClassName: styles.idCell, 
    },
    {
      header: "Team Name",
      accessor: "name",
    },
    {
      header: "Manager",
      accessor: "manager",
    },
    {
      header: "Endpoints",
      accessor: "endpoints",
    },
    {
      header: "Actions",
      accessor: "actions", // This key doesn't exist in data, but that's fine because we use 'render'
      cellClassName: styles.actionCell,
      // Custom render logic for buttons
      render: (row) => (
        <>
          <button className={styles.viewBtn} onClick={() => console.log("View", row.id)}>
            View
          </button>
          <button className={styles.settingsBtn}>Settings</button>
        </>
      ),
    },
  ];

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

          {/* Reusable Table Component */}
          <Table 
            columns={teamColumns} 
            data={TEAMS_DATA} 
            minRows={9} // Keeps your empty rows design
          />

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

export default Dashboard;