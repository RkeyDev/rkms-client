import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import styles from "./dashboard-styles.module.css";

const TEAMS_DATA = [
  { name: "Development", manager: "Roei Kleiner", endpoints: 44 },
  { name: "Marketing", manager: "Noam STC", endpoints: 6 },
  { name: "Sales", manager: "Noam STC", endpoints: 2 },
  { name: "IT Support", manager: "Jhon Smith", endpoints: 23 },
  { name: "Customer Support", manager: "Piti Levi", endpoints: 15 },
  { name: "DevOps", manager: "Roei Kleiner", endpoints: 12 },
  { name: "HR", manager: "Sara J", endpoints: 4 },
  { name: "Legal", manager: "Mike Ross", endpoints: 1 },
    { name: "Sales", manager: "Noam STC", endpoints: 2 },
  { name: "IT Support", manager: "Jhon Smith", endpoints: 23 },
  { name: "Customer Support", manager: "Piti Levi", endpoints: 15 },
  { name: "DevOps", manager: "Roei Kleiner", endpoints: 12 },
  { name: "HR", manager: "Sara J", endpoints: 4 },
  { name: "Legal", manager: "Mike Ross", endpoints: 1 },
  
];

function Dashboard() {
  const teamColumns = [
    {
      header: "",
      accessor: "id",
      width: "50px", // Fixed width for the ID column
      cellClassName: styles.idCell, 
    },
    { header: "Team Name", accessor: "name", width: "200px" },
    { header: "Manager", accessor: "manager", width: "150px" },
    { header: "Endpoints", accessor: "endpoints", width: "100px" },
    {
      header: "Actions",
      accessor: "actions", 
      cellClassName: styles.actionCell,
      width: "250px",
      render: (row) => (
        <div className={styles.actionWrapper}>
          <button className={styles.viewBtn} onClick={() => console.log("View", row.name)}>
            View
          </button>
          <button className={styles.settingsBtn}>Settings</button>
        </div>
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

          <Table 
            columns={teamColumns} 
            data={TEAMS_DATA} 
            minRows={9} 
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;