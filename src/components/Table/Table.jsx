import { useState } from "react";
import styles from "./table-styles.module.css";

const Table = ({ columns, data, minRows = 9, rowsPerPage = minRows }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination Calculations
  const totalPages = Math.max(1, Math.ceil(data.length / rowsPerPage));
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  // Logic to keep table size identical: 
  // We always want to show 'minRows' total.
  const emptyRowsNeeded = Math.max(0, minRows - currentData.length);
  const emptyRows = Array.from({ length: emptyRowsNeeded }, (_, i) => i);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                style={col.width ? { width: col.width, minWidth: col.width } : {}}
                className={col.headerClassName || ""}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Active Data Rows */}
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className={col.cellClassName || ""}>
                  {col.accessor === "id" 
                    ? startIndex + rowIndex + 1 
                    : col.render 
                      ? col.render(row) 
                      : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}

          {/* Filler Rows to lock height */}
          {emptyRows.map((_, i) => (
            <tr key={`empty-${i}`} className={styles.emptyRow}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={col.cellClassName || ""}>
                  {colIndex === 0 ? startIndex + currentData.length + i + 1 : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.footer}>
        <div className={styles.navBtns}>
          <button 
            className={styles.navBtn} 
            onClick={handlePrev} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button 
            className={styles.navBtn} 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

export default Table;