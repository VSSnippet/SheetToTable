// ExcelTable.js
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './ExcelTable.css';

function ExcelTable({ data }) {
    const [selectedStyle, setSelectedStyle] = useState('style1');

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        const tableColumn = data[0];
        const tableRows = data.slice(1).map(row => row);
    
        const styles = {
            style1: {
              fillColor: [220, 220, 220],
              textColor: [0, 0, 0],
              fontStyle: 'normal',
              cellPadding: 4,
              halign: 'left',
              valign: 'middle'
            },
            style2: {
              fillColor: [76, 175, 80],
              textColor: [255, 255, 255],
              fontStyle: 'bold',
              cellPadding: 4,
              halign: 'left',
              valign: 'middle'
            },
            style3: {
              fillColor: [242, 242, 242],
              textColor: [0, 0, 0],
              fontStyle: 'italic',
              cellPadding: 4,
              halign: 'left',
              valign: 'middle'
            }
          };
        
          doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            styles: styles[selectedStyle],
            headStyles: styles[selectedStyle],
            bodyStyles: styles[selectedStyle]
          });
    
        doc.save('table.pdf');
      };
  return (
    <><div className="mb-4">
    <label className="mr-2">Select Table Style: </label>
    <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)} className="p-2 border rounded">
      <option value="style1">Style 1</option>
      <option value="style2">Style 2</option>
      <option value="style3">Style 3</option>
    </select>
  </div>
  <table className={`min-w-full ${selectedStyle}`}>
        <thead className="bg-gray-200">
          <tr>
            {data[0] && data[0].map((cell, index) => <th key={index} className="px-4 py-2 border">{cell}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2 border">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleDownloadPDF} className="mt-4 p-2 bg-blue-500 text-white rounded">Download PDF</button></>
  );
}

export default ExcelTable;
