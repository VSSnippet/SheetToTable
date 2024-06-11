// ExcelReader.js
import React from 'react';
import * as XLSX from 'xlsx';

function ExcelReader({ onExcelData }) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      onExcelData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} accept=".xlsx, .xls" className="file:px-6 file:m-3 file:cursor-pointer
      file:py-3 file:bg-blue-500 file:border-none file:text-white file:rounded-full bg-gray-300 text-white rounded-full" />
    </div>
  );
}

export default ExcelReader;
