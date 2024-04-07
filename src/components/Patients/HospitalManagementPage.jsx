// import React from 'react';
import PatientForm from './PatientForm'; // Assuming the file is in the same directory
import InsuranceBox from "../pnbinsurance/InsuranceBox";
const HospitalManagementPage = () => {
  const handleSubmit = (patientData) => {
    // Handle the submitted patient data, e.g., send it to the server
    console.log('Submitted Patient Data:', patientData);
  };

  return (
<div className="flex flex-col items-center justify-center  py-4 mt-[0rem] ">
  <h2 className="text-2xl font-bold mb-4">Hospital Management System</h2>
  <div className='w-[13rem] bg-white'>
  <h3 className="text-xl mb-2 ml-3">Enter Patient Details</h3>
  <PatientForm onSubmit={handleSubmit} className="w-full max-w-md"/>

  <div>
  <InsuranceBox
  imageSrc="../"
  headingText="PNB MetLife Insurance "
/>

  </div>
  </div>

</div>

  );
};

export default HospitalManagementPage;
