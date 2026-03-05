import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import styles from "./endpoints-styles.module.css";

const ENDPOINTS_DATA = [
  { pcName: "Frontend-dev-01", team: "Development", user: "Roei Kleiner" },
  { pcName: "Stand1", team: "Marketing", user: "Noam STC" },
];

function Endpoints() {
  const endpointColumns = [
    {
      header: "",
      accessor: "id",
      width: "50px", 
      cellClassName: styles.idCell,
    },
    { header: "PC Name", accessor: "pcName" },
    { header: "Team", accessor: "team" },
    { header: "User", accessor: "user" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Sidebar name="Roei Kleiner" />

      <main className={styles.dashboardContainer}>
        <div className={styles.card}>
          <h1 className={styles.title}>Endpoints</h1>
          <hr className={styles.divider} />

          <div className={styles.headerRow}>
            <h2 className={styles.subtitle}>List</h2>
          </div>

          <Table 
            columns={endpointColumns} 
            data={ENDPOINTS_DATA} 
            minRows={9} 
            rowsPerPage={5} 
          />
        </div>
      </main>
    </div>
  );
}

export default Endpoints;