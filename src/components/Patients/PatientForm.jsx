import React, { useState } from 'react';
import HealthcareContract from "../../../../../build/contracts/Healthcare.json";


const PatientForm = ({ onSubmit }) => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    treatmentDetails: '',
  });

  const handleChange = (e) => {
    setPatientData({
      ...patientData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call onSubmit function passed from parent component
    onSubmit(patientData);

    // Clear form fields
    setPatientData({
      name: '',
      age: '',
      treatmentDetails: '',
    });

    // Handle submission to the blockchain
    try {
      // Replace 'contractAddress' with your contract address
      const contractAddress = '0xBC2BE8f0b3143066e4914161a63A09e03105c3B4';
      
      // Replace 'HealthcareContract' with your contract ABI
    //   const HealthcareContract = require('../../../../../build/contracts/');
  
      const web3 = window.web3;
      const contract = new web3.eth.Contract(HealthcareContract.abi, contractAddress);
  
      // Call the addPatientRecord function on the smart contract
      await contract.methods.addPatientRecord(patientData.name, patientData.age, patientData.treatmentDetails).send({ from: web3.eth.defaultAccount });
      console.log('Patient record added successfully');
      // Optionally, you can handle transaction hash and receipt here
    } catch (error) {
      console.error('Error adding patient record:', error);
      // Handle error and notify the user
    }
  };

  return (
    <div className="bg-gray-200 rounded-lg p-6 w-[23rem] align-center justify-center ml-[-4rem]">
    <form onSubmit={handleSubmit} className="space-y-2 ">
      <div className='flex-auto'>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={patientData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={patientData.age}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="treatmentDetails" className="block text-sm font-medium text-gray-700">Treatment Details:</label>
        <textarea
          id="treatmentDetails"
          name="treatmentDetails"
          value={patientData.treatmentDetails}
          onChange={handleChange} 
          required
          className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

    </form>
    <button type="submit" className="px-4 ml-28 mt-2  py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>

</div>
  );
};

export default PatientForm;
