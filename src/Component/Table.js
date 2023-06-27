import React, { useState, useEffect } from 'react';

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dummyData = [
            "aman",
            "aman",
            "saba",
            "sadique",
            "sadique",
            "sadique",
            "aman",
            "sadique",
            "sadique",
            "sadique",
            "sadique",
            "sadique",
            "sadique",
            "sadique",
            "sadique"
          ];
          setData(dummyData);
    }, []);
  
    const duplicateCounts = data.reduce((counts, name) => {
      counts[name] = (counts[name] || 0) + 1;
      return counts;
    }, {});
  
    let tableRows = [];
  
    Object.entries(duplicateCounts).forEach(([name, count]) => {
      let rowColor = '';
  
      if (count > 0 && count < 3) {
        rowColor = 'red';
      } else if (count >= 3 && count < 10) {
        rowColor = 'yellow';
      } else if (count >= 10) {
        rowColor = 'green';
      }
  
      tableRows.push(
        <tr key={name} style={{ backgroundColor: rowColor }}>
          <td>{name}</td>
          <td>{count}</td>
        </tr>
      );
    });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  };
  
export default Table