import Sidebar from "../Sidebar/Sidebar";
import Table from "../Table/Table";
import styles from "./connection-styles.module.css";

const CONNECTION_DATA = [
  { teamName: "Development", password: "atw6Gwh312Hjs719B0a" },
  { teamName: "Marketing", password: "aAh72wq3G7gaBysLm01" },
  { teamName: "Sales", password: "Hu67Js9qQs03Sjbn772G" },
];

function Connection() {
  const connectionColumns = [
    {
      header: "",
      accessor: "id",
      width: "50px",
      cellClassName: styles.idCell,
    },
    { header: "Team Name", accessor: "teamName" },
    { header: "Connection Password", accessor: "password" },
    {
      header: "Actions",
      accessor: "actions",
      render: (row) => (
        <button className={styles.settingsBtn}>Regenerate</button>
      ),
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Sidebar name="Roei Kleiner" />

      <main className={styles.dashboardContainer}>
        <div className={styles.card}>
          <h1 className={styles.title}>Connection Settings</h1>
          <hr className={styles.divider} />

          <div className={styles.headerRow}>
            <h2 className={styles.subtitle}>Tokens</h2>
          </div>

          <Table 
            columns={connectionColumns} 
            data={CONNECTION_DATA} 
            minRows={9} 
            rowsPerPage={5} 
          />
        </div>
      </main>
    </div>
  );
}

export default Connection;