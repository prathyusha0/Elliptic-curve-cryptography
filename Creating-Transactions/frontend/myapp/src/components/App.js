import React,{ useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';



const API_BASE_URL='http://localhost:5000';
function App() {
  const [wallet,setWallet]=useState({});
  useEffect(() =>{
    fetch(`${API_BASE_URL}/wallet/info`).then(response=>response.json()).then(json=>
    setWallet(json))
  },[]);
  console.log(wallet)
  const {address,balance}=wallet
  return (
    <div className="App">
       <img className="logo" src={logo} alt= "application-logo"/>
       <h3>Welcome to pychain</h3>
       <br></br>
     
       <Link to='/conduct-transaction'>Conduct a Transaction</Link>
       <Link to='/transaction-pool'>Transaction Pool</Link>
       <div className="WalletInfo">
  <div>Address:{address}</div>
  <div>Balance:{balance}</div>
       </div>
       </div>
    
       
    
  );
}

export default App;
