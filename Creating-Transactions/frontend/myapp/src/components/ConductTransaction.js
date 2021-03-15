import React,{useState} from 'react';
import {FormGroup,Button, FormControl} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import history from '../history123';
function ConductTransaction(){
  const [amount,setAmount]=useState(0);
  const [recipient,setRecipient]=useState('');
  
  const API_BASE_URL='http://localhost:5000'
  
  
  function updateRecipient(event){
      setRecipient(event.target.value);
  }
  
  
  function updateAmount(event){
    setAmount(Number(event.target.value));
   }
  
  
  
   function submitTransaction(){
      fetch(`${API_BASE_URL}/wallet/transact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({recipient,amount})
    }).then(response=>response.json()).then(json=>{console.log('submit Transactionjson',json);
       alert('Success');
       history.push('/transaction-pool');
    })
  }
  
  
  return (
      <div className="ConductTransaction">
          <Link to='/'>Home</Link>
          <hr></hr>
          <h3>Conduct a Transaction</h3>
          <br></br>
         
              <input
              type="text"
              placeholder="recipient"
              value={recipient}
              onChange={updateRecipient}
              style={{display:"block",margin:"auto",width:"200px"}}
              />
          
          <input
              
              placeholder="amount"
              value={amount}
              onChange={updateAmount}
               style={{display:"block",margin:"20px auto",width:"200px"}}
              />

          <div>
              <button variant="danger" onClick={submitTransaction}>
                  Submit
              </button>
          </div>
          <br></br>
        
      </div>
  )
}
export default ConductTransaction;