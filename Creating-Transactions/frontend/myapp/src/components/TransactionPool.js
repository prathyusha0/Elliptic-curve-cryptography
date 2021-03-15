import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';
import Transaction from './Transaction';



function TransactionPool(){
 const [transactions,setTransactions]=useState([]);
 const SECONDS_JS=1*1000
 const POOL_INTERVAL=10*SECONDS_JS
 const API_BASE_URL='http://localhost:5000';
 function fetchTransactions(){
     console.log(11111111111)
     fetch(`${API_BASE_URL}/transactions`).then(response=>response.json()).then(json=>
        
       { console.log('transactions-json',json)
        setTransactions(json)})
 }
 
 
 useEffect(()=>{
     fetchTransactions();
     },[]);
 return (
     <div className="TransactionPool">
         <Link to="/">Home</Link>
         <hr>
         </hr>
         <h3>Transaction Pool</h3>
         <div>
             {
                 transactions.map(transaction=>(<div key={transaction.id}>
                   <hr></hr>
                   <Transaction transaction={transaction}/>
                 </div>))
             }
         </div>
        <hr></hr>
        
     </div>
 )
}
export default TransactionPool;