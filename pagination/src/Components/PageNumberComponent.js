import React, { useState } from "react";
import "../App.css";
const PageNumberComponent = ({ currentPageNo, setCurrentPageNo }) => {
    const pageNo = [10, 15, 20];
    
    const handlePageNoChange=(e)=>{
        setCurrentPageNo(Number(e.target.value));
    }
  return (
    <div>
      <select className="pagenos" value={currentPageNo} onChange={handlePageNoChange}>
        {pageNo.map((pno,ind) => (
          <option key={ind} value={pno}>{pno}</option>
        ))}
      </select>
      
    </div>
  );
};
export default PageNumberComponent;
