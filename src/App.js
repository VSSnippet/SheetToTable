// App.js
import React, { useState } from 'react';
import ExcelReader from './ExcelReader';
import ExcelTable from './ExcelTable';


function App() {
  const [excelData, setExcelData] = useState(null);
  

  const handleExcelData = (data) => {
    setExcelData(data);
  };
  

  

  return (
    <div className="grid place-content-center">
      <h1 className="text-3xl text-blue-500  py-2 font-bold">Excel to PDF Converter</h1>
      
      <div className="py-2"><ExcelReader onExcelData={handleExcelData} /></div>
      <div>{excelData && <ExcelTable data={excelData} />}</div>
      
    </div>
  );
}

export default App;
