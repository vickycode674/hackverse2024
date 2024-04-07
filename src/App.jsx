// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import PatientForm from './components/Patients/PatientForm'
import { useState,useEffect } from 'react';
import HospitalManagementPage from './components/Patients/HospitalManagementPage'
import './App.css'
import Web3 from 'web3';


function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);


  useEffect(() => {
    if (window.ethereum) { 
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      alert('MetaMask not detected. Please install MetaMask to use this app.');
    }
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      console.log('Connected account:', accounts[0]);
    } catch (error) {
      console.error('User denied account access');
    }
  };
  
// import './index.css';

  // const [count, setCount] = useState(0)

  return (
<div>
<div>
      <h1>Connect to Ethereum</h1>
      <button onClick={connectWallet} className=" bg-indigo-600 text-2xl hover:bg-indigo-700 text-white ml-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg">
        {account ? 'Connected' : 'Connect Wallet'}
      </button>
      {account && <p>Connected with: {account}</p>}
    </div>
  
<div className="flex justify-center items-center  mt-[3rem]">
  <h1 className="text-5xl font-bold ">Welcome to the world of MediGuard </h1>
</div>
      {/* <PatientForm/> */}
      <HospitalManagementPage/>
      </div>
  )
}

export default App
