import styles from "./table-styles.module.css"; 

const Table = ({ columns, data, minRows = 0 }) => {
  
  // Calculate how many empty rows are needed to meet the minRows requirement
  const emptyRowsCount = Math.max(0, minRows - data.length);
  const emptyRows = Array.from({ length: emptyRowsCount }, (_, i) => i);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th 
              key={index} 
              style={col.width ? { width: col.width } : {}}
              className={col.headerClassName || ""}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Render Actual Data */}
        {data.map((row, rowIndex) => (
          <tr key={row.id || rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={`${rowIndex}-${colIndex}`} className={col.cellClassName || ""}>
                {/* If a custom 'render' function is provided in the column config, use it.
                  Otherwise, just display the data text based on the accessor key.
                */}
                {col.render 
                  ? col.render(row) 
                  : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}

        {/* Render Empty Filler Rows (if any) */}
        {emptyRows.map((id) => (
          <tr key={`empty-${id}`} className={styles.emptyRow}>
            {/* Render a cell for the ID, then empty cells for the rest */}
             {columns.map((col, index) => (
                <td key={index} className={col.cellClassName || ""}>
                   {/* Only show the fake ID in the first column, empty for others */}
                   {index === 0 ? data.length + id + 1 : ""}
                </td>
             ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;