// import React from 'react';
import imageSrc from "../../assets/logo.jpeg";
const InsuranceBox = ({ headingText}) => {
  return (
    <div className="fixed  top-0 right-0 mb-[8rem] h-[-8rem] rounded-lg shadow-md dark:bg-gray-800">
      <a href="https://www.pnbmetlife.com/life-insurance-plans.html" alt="website" target="_blank" className="cursoner-pointer"> 
      <img src={imageSrc} alt={headingText} className="w-50 h-24 mr-4 ml-4" /> </a>
     </div>
  );
};

export default InsuranceBox;
